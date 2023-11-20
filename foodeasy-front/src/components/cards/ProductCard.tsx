"use client";

import { restaurants } from "@/data/restaurants";
import useCart from "@/store/cartStore";
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

const menuItem = restaurants[0].menu[0];

type ProductCardProps = {
  product: typeof menuItem;
  restaurantId: number;
};

function ProductCard({ product, restaurantId }: ProductCardProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(0);
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={product.picture}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          width={"300px"}
          height={"300px"}
        />

        <Box p="6">
          <Flex mt="1" justifyContent="center" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {product.name}
            </Box>
          </Flex>

          <Flex justifyContent="center" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                R$
              </Box>
              {product.price.toFixed(2)}
            </Box>
          </Flex>
          <Stack direction="row" mt={6}>
            <Box as={Flex} justify={"center"} w={"50%"}>
              <NumberInput
                size="md"
                defaultValue={quantity}
                onChange={(value) => setQuantity(parseInt(value))}
                min={0}
                w={"100%"}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>

            <Tooltip
              label="Adicionar ao carrinho"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <Button
                w={"50%"}
                onClick={() =>
                  addItem({
                    item: product.id,
                    restaurant: restaurantId,
                    quantity,
                  })
                }
              >
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </Button>
            </Tooltip>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCard;
