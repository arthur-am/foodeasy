import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Center,
  VStack,
  Text,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

interface ProductData {
  name: string;
  description: string;
  price: string;
  image: string;
}

const ProductForm: React.FC = () => {
  const [productData, setProductData] = useState<ProductData>({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageUrl = e.target.value;
    setProductData({
      ...productData,
      image: imageUrl,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Dados do produto a serem enviados:", productData);
    
  };

  return (
    <>
      <Navbar />
      <Center h="100vh">
        <Box minWidth="400px" maxW="500px" borderWidth="1px" p={4} borderRadius="md" boxShadow="md">
          <VStack spacing={5}>
            <Text fontWeight="bold" fontSize="xl">
              Adicionar Produto
            </Text>
            <FormControl>
              <FormLabel>Nome do Produto</FormLabel>
              <Input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Descrição</FormLabel>
              <Textarea
                name="description"
                value={productData.description}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Preço</FormLabel>
              <Input
                type="number"
                name="price"
                value={productData.price}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Link da Imagem do Produto</FormLabel>
              <Input
                type="text"
                name="image"
                value={productData.image}
                onChange={handleImageChange}
              />
            </FormControl>
            <Button colorScheme="teal" onClick={handleSubmit}>
              Adicionar Produto
            </Button>
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default ProductForm;
