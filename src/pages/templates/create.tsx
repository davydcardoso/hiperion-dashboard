import { Box, Button, Flex, Heading, HStack, Link, VStack } from "@chakra-ui/react";
import React from "react";
import { RiSaveLine } from "react-icons/ri";
import { CodeEditor } from "../../components/CodeEditor";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export const CreateTemplate: React.FC = () => {
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
          // onSubmit={handleSubmit(handleSaveTemplate)}
        >
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Box>
              <Heading size="lg" fontWeight="medium">
                Criar template
              </Heading>
            </Box>

            <HStack>
              <Link href="/templates">
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
              label="Título"
              // error={errors.title}
              name="title"
              // {...register('title')}
            />

            {/* <CodeEditor
              // error={errors.content}
              label="Conteúdo"
              description="Inclua {{ message_content }} para injetar o conteúdo da mensagem"
              name="content"
              // control={control}
            /> */}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};
