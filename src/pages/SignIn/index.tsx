import React, { useContext } from "react";
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

import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { AuthContext } from "../../contexts/AuthContext";
import { Logo } from "../../components/Logo";
import { AxiosError } from "axios";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

const SignIn: React.FC = () => {
  const toast = useToast();
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await signIn(data).catch((err) => {
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

        return
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

  console.log(process.env.BACKEND_URL_API);

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
            Faça login para acessar a dashboard
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
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input
              // name="email"
              type="email"
              placeholder="Seu email"
              {...register("email")}
              error={errors.email}
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
          
          <Link href="/create-account" passHref>
            <ChakraLink alignSelf="center" mt="4">
              <Text color="gray.500">Ainda não possui uma conta? Crie já!</Text>
            </ChakraLink>
          </Link>
         
        </Flex>
      </Flex>
    </>
  );
};

export { SignIn };
