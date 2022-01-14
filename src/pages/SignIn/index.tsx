import React, { useContext } from "react";
import {
  Flex,
  Button,
  Stack,
  Text,
  Link as ChakraLink,
  Link,
  Input,
} from "@chakra-ui/react";

import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { AuthContext } from "../../contexts/AuthContext";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

const SignIn: React.FC = () => {
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await signIn(data);
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
          {/* <Logo /> */}
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
          <Link href="/forgot-password" passHref>
            <ChakraLink alignSelf="center" mt="4">
              <Text color="gray.500">Esqueci minha senha</Text>
            </ChakraLink>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export { SignIn };
