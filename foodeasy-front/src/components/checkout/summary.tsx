import { restaurants } from "@/data/restaurants";
import useCart from "@/store/cartStore";
import {
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import _ from "lodash";
import useUser from "@/store/userStore";

export default function Summary() {
  const { items } = useCart();
  const { currentUser } = useUser();
  const [loadingFinish, setLoadingFinish] = useState(false);

  const cartItems =
    items.map((item) => {
      const restaurant = restaurants.find((r) => r.id === item.restaurant);
      const menuItem = restaurant?.menu.find((m) => m.id === item.item);

      return {
        ...menuItem,
        restaurant,
        quantity: item.quantity,
      };
    }) || [];

  const total = cartItems.reduce((acc, item) => {
    return acc + item?.price! * item.quantity;
  }, 0);

  const restaurantsInvolved = _.uniqBy(cartItems, "restaurant.id");

  const frete = restaurantsInvolved.reduce((acc, item) => {
    return acc + item?.restaurant?.deliveryFee!;
  }, 0);

  return (
    <VStack
      width="full"
      height="full"
      padding="10"
      spacing="6"
      alignItems="flex-start"
      overflowY={"auto"}
    >
      <VStack spacing="3" alignItems="flex-start">
        <Heading size="2xl">Resumo da compra</Heading>
      </VStack>
      {cartItems?.map((item) => (
        <HStack
          justifyContent="space-between"
          width="full"
          key={`${item.id}${item.name}`}
        >
          <HStack spacing="3">
            <Image
              src={item.picture}
              width="100px"
              rounded={"md"}
              alt={item.description}
            />
            <VStack spacing="0" alignItems="flex-start">
              <Heading size="md">{item.name}</Heading>
              <Text fontSize="md">
                {item.quantity}x {item?.price?.toFixed(2).replace(".", ",")}
              </Text>
            </VStack>
          </HStack>
          <Heading size="sm">
            R$ {(item?.price! * item.quantity).toFixed(2).replace(".", ",")}
          </Heading>
        </HStack>
      ))}
      <VStack spacing="4" width="full">
        <HStack justifyContent="space-between" width="full">
          <Text>Subtotal</Text>
          <Text as="b">R$ {total.toFixed(2).replace(".", ",")}</Text>
        </HStack>
        <HStack justifyContent="space-between" width="full">
          <Text>Taxa de Entrega</Text>
          <Text as="b">R$ {frete.toFixed(2).replace(".", ",")}</Text>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" width="full">
        <Text>Total</Text>
        <Heading size="lg">
          R$ {(total + frete).toFixed(2).replace(".", ",")}
        </Heading>
      </HStack>
      <Button
        size="lg"
        width="full"
        colorScheme={"green"}
        variant="solid"
        isDisabled={!currentUser || !items.length}
        isLoading={loadingFinish}
        onClick={() => {}}
      >
        {!currentUser
          ? "Faça o login para finalizar a compra"
          : "Finalizar compra"}
      </Button>
    </VStack>
  );
}
