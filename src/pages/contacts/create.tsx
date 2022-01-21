import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  VStack,
} from "@chakra-ui/react";
import { RiSaveLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";

export const CreateContact: React.FC = () => {
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} marginX="auto">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          ml="6"
          borderRadius={4}
          bgColor="white"
          shadow="0 0 20px rgba(0, 0, 0, 0.05)"
          p="8"
          // onSubmit={handleSubmit(handleSaveContato)}
        >
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Box>
              <Heading size="lg" fontWeight="medium">
                Criar contato
              </Heading>
            </Box>

            <HStack>
              <Link href="/contacts">
                <Button size="md" colorScheme="blackAlpha">
                  Cancelar
                </Button>
              </Link>

              <Button
                type="submit"
                size="md"
                leftIcon={<RiSaveLine size="24" />}
                colorScheme="pink"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
          <VStack spacing="6" maxWidth="4xl">
            <Input
              label="Nome"
              // error={errors.name}
              name="name"
              // {...register('name')}
            />
            <Input
              label="Whatsapp"
              // error={errors.name}
              name="name"
              // {...register('name')}
            />

            <Input
              label="E-mail"
              // error={errors.email}
              name="email"
              // {...register('email')}
            />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};
