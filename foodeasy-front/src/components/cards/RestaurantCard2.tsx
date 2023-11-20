import { restaurants } from "@/data/restaurants";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { RiEBike2Fill } from "react-icons/ri";

type RestaurantCard2Props = {
  restaurant: (typeof restaurants)[0];
};

const RestaurantCard2 = ({ restaurant }: RestaurantCard2Props) => {
  return (
    <>
      <Link href={"/restaurant/" + restaurant.id}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          alignItems={"center"}
        >
          <Image
            objectFit="fill"
            width={{ base: "150px", sm: "75px" }}
            height={{ base: "150px", sm: "75px" }}
            src={restaurant.picture}
            alt={restaurant.name}
            m={6}
          />

          <Stack>
            <CardBody>
              <Heading size="md">{restaurant.name}</Heading>

              <Text py="2">{restaurant.description}</Text>

              <Stack direction="row" align={"center"}>
                <Text fontSize={"sm"} align={"center"} color="blue.600" mr={4}>
                  <Icon as={AiFillStar} mr={2} />
                  {restaurant.rating}
                </Text>
                <Text color="blue.600" fontSize="sm" align={"center"}>
                  <Icon as={RiEBike2Fill} mr={2} /> R${" "}
                  {restaurant.deliveryFee.toFixed(2)}
                </Text>
              </Stack>
            </CardBody>
          </Stack>
        </Card>
      </Link>
    </>
  );
};

export default RestaurantCard2;
