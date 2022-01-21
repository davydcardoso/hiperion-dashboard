import axios, { AxiosError } from "axios";
import { signOut } from "../contexts/AuthContext";

export function setupApiClient(ctx = undefined) {
  const api = axios.create({
    baseURL: process.env.BACKEND_URL_API || "http://localhost:3001/api/v1",
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      console.log(error);
      if (error.response && error.response.status === 401) {
        signOut();
      }

      return Promise.reject(error);
    }
  );

  return api;
}
