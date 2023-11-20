import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/cards/CategoryCard";
import { cousines } from "@/data/cousines";
import { RestaurantCard } from "@/components/cards/RestaurantCard";
import { restaurants } from "@/data/restaurants";
import Link from "next/link";
import { useRouter } from "next/router";
import useFilters from "@/store/filterStore";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { switchCategory, clearFilters, switchCousines } = useFilters();

  useEffect(() => {
    clearFilters();
  }, [clearFilters]);
  return (
    <>
      <Navbar />
      <Carousel />
      <Flex w={"100%"} direction={"column"} p={6} gap={6}>
        <Box>
          <Box mb={4}>
            <Heading>Compre por categoria</Heading>
          </Box>
          <Stack direction={"row"} spacing={10} w={"100%"} overflow={"scroll"} >
            {categories.map((category) => (
              <Link
                key={"category" + category.id}
                href={"/category"}
                onClick={() => switchCategory(category.id)}
                
              >
                <Box flex="1"
                 minWidth={"300px"}
                 maxWidth={"300px"}>
                <CategoryCard category={category}/>
                </Box>
              </Link>
            ))}
          </Stack>
        </Box>
        <Box>
          <Box mb={4}>
            <Heading>Compre por culinaria</Heading>
          </Box>
          <Stack direction={"row"} spacing={10} w={"100%"} overflow={"scroll"}>
            {cousines.map((category) => (
              <Link
                key={"cousine" + category.id}
                href={"/category"}
                onClick={() => switchCousines(category.id)}
              >
                 <Box flex="1"
                 minWidth={"300px"}
                 maxWidth={"300px"}></Box>
                <CategoryCard
                  key={"cousine" + category.id}
                  category={category}
                />
              </Link>
            ))}
          </Stack>
        </Box>
        <Box>
          <Box mb={4}>
            <Heading>Conheça os restaurantes</Heading>
          </Box>
          <Stack direction={"row"} spacing={10} w={"100%"} overflow={"scroll"}>
            {restaurants.map((restaurant) => {
              return (
                <Box flex="1"
                  minWidth={"300px"}
                  maxWidth={"300px"}
                  key={"restaurant" + restaurant.id}>
                  <RestaurantCard
                    restaurant={restaurant} />
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
