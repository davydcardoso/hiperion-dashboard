import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { SignIn } from "./pages/SignIn";

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <SignIn />
    </ChakraProvider>
  );
};
