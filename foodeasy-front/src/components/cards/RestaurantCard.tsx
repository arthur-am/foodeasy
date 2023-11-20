import { restaurants } from "@/data/restaurants";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

type RestaurantCardProps = {
  restaurant: (typeof restaurants)[0];
};

export const RestaurantCard = (props: RestaurantCardProps) => {
  return (
    <Card maxW="xs" shadow="lg" dropShadow={"lg"}>
      <CardBody>
        <Flex alignItems="center" justify={"center"}>
          <Image
            src={props.restaurant.picture}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            width={"200px"}
          />
        </Flex>
        <Stack mt="6" spacing="3" maxHeight={"100px"} overflow={"auto"}>
          <Heading size="md">{props.restaurant.name}</Heading>
          <Text>{props.restaurant.description}</Text>
          <Text color="blue.600" fontSize="sm">
            Entrega: R$ {props.restaurant.deliveryFee.toFixed(2)}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2" w={"100%"}>
          <Link href={`/restaurant/${props.restaurant.id}`}>
            <Button variant="solid" w={"100%"} colorScheme="teal">
              Visitar
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
