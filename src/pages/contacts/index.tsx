import React from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Link as ChakraLink,
  Icon,
  Button,
  Link,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";
import { RiAddLine, RiSearch2Line } from "react-icons/ri";

export const Contacts: React.FC = () => {
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
                Inscritos
              </Heading>
              <Text mt="1" color="gray.400">
                Listagem completa de inscritos
              </Text>
            </Box>

            <Flex>
              <Flex
                as="form"
                // onSubmit={handleSubmit(handleSearchContacts)}
              >
                <Input
                  name="search"
                  placeholder="Buscar contatos"
                  // {...register('search')}
                />

                <Button
                  size="lg"
                  fontSize="sm"
                  colorScheme="purple"
                  ml="2"
                  // disabled={isLoading}
                  // isLoading={isLoading}
                >
                  <Icon as={RiSearch2Line} fontSize="16" />
                </Button>
              </Flex>
              <Link href="/contacts/create">
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
                <Th>Nome</Th>
                <Th>Email</Th>
                <Th>Whatsapp</Th>
                <Th>Data Criação</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* {data?.contacts.map((contact) => ( */}
              <Tr key="{contact.id}">
                <Td>
                  <Link href={`/subscribers/1d2asd5a46`} passHref>
                    <ChakraLink color="blue.500" title="Ver detalhes">
                      Davyd Kewen
                    </ChakraLink>
                  </Link>
                </Td>
                <Td color="gray.500">davydkewen@gmail.com</Td>
                <Td color="gray.500">62 9.8305-5581</Td>
                <Td color="gray.500">18/01/2022</Td>
              </Tr>
              {/* ))} */}
            </Tbody>
          </Table>

          {/* <Pagination 
            totalCountOfRegisters={data?.totalCount}
            currentPage={page}
            onPageChange={setPage}
            currentCountOfPosts={data?.contacts.length}
          /> */}
        </Box>
      </Flex>
    </Box>
  );
};
