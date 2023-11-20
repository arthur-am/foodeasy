import WithCategorySidebar from "@/components/sidebars/SidebarCategories";
import RestaurantCard2 from "@/components/cards/RestaurantCard2";
import { categories } from "@/data/categories";
import { restaurants } from "@/data/restaurants";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import useFilters from "@/store/filterStore";
import { cousines } from "@/data/cousines";

const Page = () => {
  const { categories: categoriesOnFilter, cousines: cousinesOnFilter } =
    useFilters();

  let restaurantsToDisplay = restaurants;

  if (categoriesOnFilter.length > 0) {
    restaurantsToDisplay = restaurantsToDisplay.filter((r) =>
      r.categories.some((restaurantCategory) =>
        categoriesOnFilter.some((category) => category === restaurantCategory.id)
      )
    );
  }

  if (cousinesOnFilter.length > 0) {
    restaurantsToDisplay = restaurantsToDisplay.filter((r) =>
      r.cousines.some((restaurantCousine) =>
        cousinesOnFilter.some((cousine) => cousine === restaurantCousine.id)
      )
    );
  }

  return (
    <>
      <Navbar />
      <Flex pt={14}>
        <WithCategorySidebar>
          <Stack>
            {restaurantsToDisplay.map((restaurant) => (                                                                                                                         
              <RestaurantCard2 key={restaurant.id} restaurant={restaurant} />
            ))}

            {restaurantsToDisplay.length === 0 && (
              <Text w={"100%"} textAlign={"center"}>
                Nenhum restaurante encontrado.
              </Text>
            )}
          </Stack>
        </WithCategorySidebar>
      </Flex>
    </>
  );
};

export default Page;
