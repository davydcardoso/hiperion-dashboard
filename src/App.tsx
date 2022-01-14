import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/dashboard";

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <SignIn />
    </ChakraProvider>
  );
};
