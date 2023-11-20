import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

export const DelivermanForm = () => {
  return (
    <>
      <Stack dir="row">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <Stack dir="column">
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Sobrenome</FormLabel>
            <Input type="text" />
          </FormControl>
        </Stack>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <Input type="password" />
        </FormControl>
        <FormControl>
          <FormLabel>Confirmar Senha</FormLabel>
          <Input type="password" />
        </FormControl>
        <FormControl>
          <FormLabel>Telefone</FormLabel>
          <Input type="text" />
        </FormControl>
      </Stack>
      {/* Endereço */}
      <Stack dir="row" backgroundColor={"gray.50"} p={6}>
        <Heading fontSize={"xl"}>Endereço</Heading>
        <FormControl>
          <FormLabel>CEP</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Estado</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Cidade</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Rua</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Bairro</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Número</FormLabel>
          <Input type="number" />
        </FormControl>
      </Stack>
      <Stack spacing="6">
        <Button>Cadastrar</Button>
      </Stack>
    </>
  );
};
