import React, { useState } from "react";
import {
  VStack,
  Link,
  Text,
  Flex,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Box,
  Image,
  useToast,
} from "@chakra-ui/react";
import {
  RiMailOpenLine,
  RiContactsLine,
  RiPencilRulerLine,
  RiPriceTag3Line,
  RiSettings2Line,
  RiLogoutBoxLine,
} from "react-icons/ri";
import { ImQrcode } from "react-icons/im";
import { signOut } from "../contexts/AuthContext";
import qrcode from "../teste";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosError } from "axios";
import { application } from "../config/application";
import { urls } from "../config/urls";

export const Sidebar: React.FC = () => {
  const [qrCode, setQrCode] = useState<string>(qrcode);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  function handleSignOut() {
    signOut();
  }

  async function atualizarQrCode() {
    const token = await AsyncStorage.getItem("@hiperion.token");

    const api = axios.create({
      baseURL:
        application.ambient === "production"
          ? urls.backend_api
          : "http://localhost:3001/hiperion/v1",
      headers: { Authorization: `Bearer ${token}` },
    });

    try {
      await api.get("/whatsapp/qrcode/image").then((response) => {
        setQrCode(response.data.qrcode);
      });
    } catch (err) {
      const error = err as AxiosError;
      if (error.response) {
        if (error.response.status === 403) {
          toast({
            title: "Error generating QR code",
            position: "top-right",
            description: "User session has expired, please login again",
            isClosable: true,
            onCloseComplete: () => {
              signOut();
              window.location.reload();
            },
          });
        }
      }
    }
  }

  async function getQrCodeSocket() {
    const token = await AsyncStorage.getItem("@hiperion.token");

    const api = axios.create({
      baseURL:
        application.ambient === "production"
          ? urls.backend_api
          : "http://localhost:3001/hiperion/v1",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    await api.get("/whatsapp/qrcode", {}).catch((err) => {
      const error = err as AxiosError;
      console.log(error.response?.data);

      if (error.response) {
        if (error.response.status === 403) {
          toast({
            title: "Error generating QR code",
            position: "top-right",
            description: "User session has expired, please login again",
            isClosable: true,
            onCloseComplete: () => {
              signOut();
              window.location.reload();
            },
          });
        }
      }
    });

    return;
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
      alignItems="center"
    >
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Qr Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody alignItems="center" alignSelf="center">
            <Box alignItems="center" justifyContent="center" boxSize="auto">
              <Image src={"data:image/jpeg;base64, " + qrCode} width={300} />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => getQrCodeSocket()}>
              Iniciar Sess??o
            </Button>
            <Button onClick={() => atualizarQrCode()} variant="ghost">
              Atualizar QrCode
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <VStack spacing="4" pr="8" alignItems="stretch">
        <Text fontWeight="bold" color="gray.700" fontSize="small" px={8}>
          GERAL
        </Text>
        <a href="/">
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
        <a href="/contacts">
          <Link
            display="flex"
            alignItems="center"
            py="1"
            pl={8}
            borderLeft="3px solid"
          >
            <RiContactsLine size="20" />
            <Text ml="4" fontSize="medium" fontWeight="medium">
              Contatos
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
        <a href="/">
          <Link
            display="flex"
            alignItems="center"
            py="1"
            pl={8}
            borderLeft="3px solid"
          >
            <RiPriceTag3Line size="20" />
            <Text ml="4" fontSize="medium" fontWeight="medium">
              Grupo Contatos
            </Text>
          </Link>
        </a>
      </VStack>
      <VStack spacing="4" pr="8" mt={8} alignItems="stretch">
        <Text fontWeight="bold" color="gray.700" fontSize="small" px={8}>
          SISTEMA
        </Text>
        <a href="/">
          <Link
            display="flex"
            alignItems="center"
            py="1"
            pl={8}
            borderLeft="3px solid"
          >
            <RiSettings2Line size="20" />
            <Text ml="4" fontSize="medium" fontWeight="medium">
              Configura????o
            </Text>
          </Link>
        </a>
        <Button width={130} onClick={onOpen}>
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
        </Button>
      </VStack>

      <Button
        onClick={() => {
          handleSignOut();
          window.location.reload();
        }}
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
};
