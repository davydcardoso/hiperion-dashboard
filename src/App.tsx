import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ChakraProvider>
  );
};
