import { Flex, Avatar, Box, Text, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { Logo } from "./Logo";

export function Header() {
  const { user } = useContext(AuthContext);

  return (
    <Flex
      as="header"
      h="20"
      bgColor="white"
      px="8"
      shadow="0 0 20px rgba(0, 0, 0, 0.05)"
    >
      <Flex
        width="100%"
        maxWidth={1480}
        marginX="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo />
        <HStack spacing="4" alignItems="center">
          <Box textAlign="right">
            <Text fontWeight="medium">{user?.name}</Text>
            <Text color="gray.500" fontSize="small">
              {user?.email}
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Davyd Cardoso"
            src="https://github.com/Rocket-Zapi.png"
          />
        </HStack>
      </Flex>
    </Flex>
  );
}
