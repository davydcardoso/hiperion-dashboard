import React from "react";
import {
  Flex,
  Button,
  Stack,
  Text,
  Link as ChakraLink,
  Link,
  Input,
  useToast,
} from "@chakra-ui/react";

import InputMask from "react-input-mask";

import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { Logo } from "../../components/Logo";
import { AxiosError } from "axios";
import { signUp } from "../../services";

type SignUpFormData = {
  name: string;
  fantasyName: string;
  document: string;
  email: string;
  phone: string;
  webhook: string;
};

const signUpFormSchema = yup.object().shape({
  name: yup.string().required("Nome da empresa é obrigatorio"),
  fantasyName: yup.string().optional(),
  document: yup.string().required("CNPJ não é valido"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  phone: yup.string().required("Numero de telefone é obrigatorio"),
  password: yup.string().required("Senha obrigatória"),
  webhook: yup.string().optional(),
});

const SignUp: React.FC = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signUpFormSchema),
  });

  const toast = useToast();

  const handleSignUp: SubmitHandler<SignUpFormData> = async ({
    name,
    fantasyName,
    document,
    email,
    phone,
    webhook,
  }) => {
    await signUp({
      name,
      fantasyName: name,
      document,
      email,
      phone,
      webhook: "http://localhost",
    })
      .then(() => {
          window.location.href = "/"
      })
      .catch((err) => {
        if (err.response) {
          const error = err as AxiosError;

          toast({
            title: "Login Error",
            position: "top-right",
            status: "error",
            description:
              error.response?.data.error || err.message || "Error logging in",
            isClosable: true,
          });

          return;
        }

        toast({
          title: "Login Error",
          position: "top-right",
          status: "error",
          description: err.message || "Error logging in",
          isClosable: true,
        });
      });
  };

  const { errors } = formState;

  return (
    <>
      <Flex
        w="100vw"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection={["column", "row"]}
      >
        <Stack p={[6, 8]} spacing="4" mr={[0, 0, 0, 100]}>
          <Logo />
          <Text
            color="gray.900"
            letterSpacing="tight"
            lineHeight="normal"
            fontSize={["3xl", "5xl"]}
            mb="8"
            fontWeight="extrabold"
            maxW={430}
          >
            Crie sua conta para utilizar nossas API's
          </Text>
        </Stack>
        <Flex
          as="form"
          width="100%"
          maxWidth={400}
          p={[6, 8]}
          borderRadius={8}
          flexDirection="column"
          //@ts-ignore
          onSubmit={handleSubmit(handleSignUp)}
        >
          <Stack spacing="4">
            <Input
              // name="email"
              type="name"
              placeholder="Nome da Empresa"
              {...register("name")}
              error={errors.name}
              bg="gray.100"
            />

            <Input
              // name="email"
              type="document"
              placeholder="CNPJ"
              {...register("document")}
              //   error={errors.document}
              as={InputMask}
              mask="**.***.***/****-**"
              bg="gray.100"
            />

            <Input
              // name="email"
              type="email"
              placeholder="Email da empresa"
              {...register("email")}
              error={errors.email}
              bg="gray.100"
            />

            <Input
              type="phone"
              placeholder="Whatsapp"
              {...register("phone")}
              //   error={errors.phone}
              as={InputMask}
              mask="+** (**) *****-****"
              bg="gray.100"
            />

            <Input
              // name="password"
              type="password"
              placeholder="Senha"
              {...register("password")}
              error={errors.password}
              bg="gray.100"
            />
          </Stack>
          <Button
            type="submit"
            mt="6"
            colorScheme="purple"
            size="lg"
            isLoading={false}
          >
            Entrar
          </Button>
          <Link href="/">
            <ChakraLink alignSelf="center" mt="4">
              <Text color="gray.500">Já possui uma conta? Entre!</Text>
            </ChakraLink>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export { SignUp };
