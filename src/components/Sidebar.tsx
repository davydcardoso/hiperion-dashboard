import { VStack, Link, Text, Flex, Button } from "@chakra-ui/react";
import {
  RiMailOpenLine,
  RiContactsLine,
  RiPencilRulerLine,
  RiPriceTag3Line,
  RiSettings2Line,
  RiSendPlaneLine,
  RiLogoutBoxLine,
} from "react-icons/ri";
import { ImQrcode } from "react-icons/im";

import { signOut } from "../contexts/AuthContext";

export function Sidebar() {
  function handleSignOut() {
    signOut();
  }

  return (
    <Flex
      as="aside"
      w="72"
      minH="calc(100vh - 8rem)"
      bgColor="white"
      py="8"
      shadow="0 0 20px rgba(0, 0, 0, 0.05)"
      borderRadius={4}
      direction="column"
    >
      <VStack spacing="4" pr="8" alignItems="stretch">
        <Text fontWeight="bold" color="gray.700" fontSize="small" px={8}>
          GERAL
        </Text>
        <a href="/messages">
          <Link
            display="flex"
            alignItems="center"
            py="1"
            pl={8}
            borderLeft="3px solid"
          >
            <RiMailOpenLine size="20" />
            <Text ml="4" fontSize="medium" fontWeight="medium">
              Mensagens
            </Text>
          </Link>
        </a>
        <a href="/subscribers">
          <Link
            display="flex"
            alignItems="center"
            py="1"
            pl={8}
            borderLeft="3px solid"
          >
            <RiContactsLine size="20" />
            <Text ml="4" fontSize="medium" fontWeight="medium">
              Inscritos
            </Text>
          </Link>
        </a>
        <a href="/templates">
          <Link
            display="flex"
            alignItems="center"
            py="1"
            pl={8}
            borderLeft="3px solid"
          >
            <RiPencilRulerLine size="20" />
            <Text ml="4" fontSize="medium" fontWeight="medium">
              Templates
            </Text>
          </Link>
        </a>
        <a href="/tags">
          <Link
            display="flex"
            alignItems="center"
            py="1"
            pl={8}
            borderLeft="3px solid"
          >
            <RiPriceTag3Line size="20" />
            <Text ml="4" fontSize="medium" fontWeight="medium">
              Tags
            </Text>
          </Link>
        </a>
      </VStack>
      <VStack spacing="4" pr="8" mt={8} alignItems="stretch">
        <Text fontWeight="bold" color="gray.700" fontSize="small" px={8}>
          SISTEMA
        </Text>
        <a href="/settings">
          <Link
            display="flex"
            alignItems="center"
            py="1"
            pl={8}
            borderLeft="3px solid"
          >
            <RiSettings2Line size="20" />
            <Text ml="4" fontSize="medium" fontWeight="medium">
              Configuração
            </Text>
          </Link>
        </a>
        <a href="/senders">
          <Link
            display="flex"
            alignItems="center"
            py="1"
            pl={8}
            borderLeft="3px solid"
          >
            <ImQrcode size="20" />
            <Text ml="4" fontSize="medium" fontWeight="medium">
              Qr Code
            </Text>
          </Link>
        </a>
      </VStack>

      <Button
        onClick={handleSignOut}
        variant="link"
        alignSelf="flex-start"
        display="flex"
        alignItems="center"
        py="1"
        ml={8}
        mt="auto"
      >
        <RiLogoutBoxLine size="20" />
        <Text ml="4" fontSize="medium" fontWeight="medium">
          Logout
        </Text>
      </Button>
    </Flex>
  );
}
