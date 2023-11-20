import { DelivermanForm } from "@/components/forms/DelivermanForm";
import { RestaurantForm } from "@/components/forms/RestaurantForm";
import { UserForm } from "@/components/forms/UserForm";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";

const App = () => {
  const [formType, setFormType] = useState<
    "client" | "restaurant" | "deliverman"
  >("client");

  const handleFormTypeChange = (
    value: "client" | "restaurant" | "deliverman"
  ) => {
    setFormType(value);
  };

  return (
    <Container
      maxW="2xl"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>Crie sua conta</Heading>
            <Text color="fg.muted">
              Já tem uma conta?{" "}
              <NextLink href={"/auth"} passHref={true}>
                <Link>Entrar</Link>
              </NextLink>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <FormControl as="fieldset">
              <FormLabel as="legend">Tipo de conta</FormLabel>
              <RadioGroup
                defaultValue="Itachi"
                value={formType}
                onChange={handleFormTypeChange}
              >
                <HStack spacing="24px">
                  <Radio value="client">Cliente</Radio>
                  <Radio value="deliverman">Entregador</Radio>
                  <Radio value="restaurant">Restaurante</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            {formType === "client" && <UserForm />}
            {formType === "deliverman" && <DelivermanForm />}
            {formType === "restaurant" && <RestaurantForm />}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default App;
