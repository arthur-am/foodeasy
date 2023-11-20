import useUser from "@/store/userStore";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export const UserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");
  const { register } = useUser();
  const router = useRouter();

  const handleSubmit = () => {
    register({
      email,
      password,
      name: `${name} ${lastName}`,
      telefone: phone,
      type: "client",
      address: {
        street,
        number,
        district,
        city,
        state,
        cep,
      },
    });
    router.push("/");
  };

  return (
    <>
      <Stack dir="row">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Stack dir="column">
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Sobrenome</FormLabel>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
        </Stack>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Confirmar Senha</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Telefone</FormLabel>
          <Input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>
      </Stack>
      {/* Endereço */}
      <Stack dir="row" backgroundColor={"gray.50"} p={6}>
        <Heading fontSize={"xl"}>Endereço</Heading>
        <FormControl>
          <FormLabel>CEP</FormLabel>
          <Input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Estado</FormLabel>
          <Input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Cidade</FormLabel>
          <Input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Rua</FormLabel>
          <Input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Bairro</FormLabel>
          <Input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Número</FormLabel>
          <Input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </FormControl>
      </Stack>
      <Stack spacing="6">
        <Button onClick={() => handleSubmit()}>Cadastrar</Button>
      </Stack>
    </>
  );
};
