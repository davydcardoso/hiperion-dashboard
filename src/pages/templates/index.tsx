import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine } from "react-icons/ri";

export const Templates: React.FC = () => {
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} marginX="auto">
        <Sidebar />

        <Box
          flex="1"
          ml="6"
          borderRadius={4}
          bgColor="white"
          shadow="0 0 20px rgba(0, 0, 0, 0.05)"
          p="8"
        >
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Box>
              <Heading size="lg" fontWeight="medium">
                Templates
              </Heading>
              <Text mt="1" color="gray.400">
                Listagem completa de templates de mensagens
              </Text>
            </Box>

            <Flex>
              <Link href="/templates/create">
                <Button
                  size="lg"
                  fontSize="xl"
                  colorScheme="purple"
                  ml="2"
                  maxW={59}
                >
                  <Icon as={RiAddLine} />
                </Button>
              </Link>
            </Flex>
          </Flex>

          <Table>
            <Thead>
              <Tr>
                <Th>Template</Th>
                <Th w="16"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr key="1">
                <Td>
                  <Link color="blue.500" title="Ver detalhes">
                    Promoção de final de semana
                  </Link>
                </Td>

                <Td textAlign="right">
                  <Button
                    colorScheme="purple"
                    // disabled={template.isDefault}
                    size="sm"
                    fontSize="sm"
                    // onClick={() => handleSetDefaultTemplate(template.id)}
                  >
                    Enviar Mensagem
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          {/* <Pagination 
            totalCountOfRegisters={data?.totalCount}
            currentPage={page}
            onPageChange={setPage}
            currentCountOfPosts={data?.templates.length}
          /> */}
        </Box>
      </Flex>
    </Box>
  );
};
