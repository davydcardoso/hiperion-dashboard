import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import "./styles.css";

export const Dashboard: React.FC = () => {
  return (
    <>
      <Box>
        <Header />

        <Flex width="100%" my="6" maxWidth={1480} marginX="auto">
          <Sidebar />
        </Flex>
      </Box>
    </>
  );
};
