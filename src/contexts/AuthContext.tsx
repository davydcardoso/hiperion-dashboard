import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/apiClient";
import { Buffer } from "buffer";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  name: string;
  email: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  user: User | undefined;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function signOut() {
  authChannel.postMessage(" ");

  new Promise<void>(async (resolve, reject) => {
    await AsyncStorage.removeItem("@hiperion.token");
    await AsyncStorage.removeItem("@hiperion.user");
  });
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "signOut":
          signOut();
          authChannel.close();
          break;

        default:
          break;
      }
    };

    new Promise(async () => {
      const userAlreadyLoggedIn = await AsyncStorage.getItem("@hiperion.user");

      if (!userAlreadyLoggedIn) {
        return;
      }

      const user = JSON.parse(userAlreadyLoggedIn) as User;
      setUser(user);
    });
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    const authorization = Buffer.from(`${email}:${password}`, "ascii").toString(
      "base64"
    );

    const response = await api.post("/auth/signin", null, {
      headers: {
        Authorization: `Basic ${authorization}`,
      },
    });

    const { token, name } = response.data;

    await AsyncStorage.setItem("@hiperion.token", token);
    await AsyncStorage.setItem(
      "@hiperion.user",
      JSON.stringify({
        email: email,
        name: name,
      })
    );

    //@ts-ignore
    api.defaults.headers.authorization = `Bearer ${token}`;

    setUser({
      email,
      name,
    });
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
