import Navbar from "@/components/Navbar";
import ProductCard from "@/components/cards/ProductCard";
import RestaurantCard2 from "@/components/cards/RestaurantCard2";
import WithRestaurantSidebar from "@/components/sidebars/SidebarRestaurant";
import { restaurants } from "@/data/restaurants";
import useCart from "@/store/cartStore";
import useFilters from "@/store/filterStore";
import { Flex, Grid, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  const { order } = useFilters();

  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  const restaurant = restaurants.find(
    (r) => r.id === parseInt(router.query.id as string)
  );

  const menu = restaurant?.menu.sort((a, b) => {
    if (order === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <>
      <Navbar />
      <Flex pt={14}>
        <WithRestaurantSidebar>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {menu?.map((item) => (
              <ProductCard
                restaurantId={restaurant?.id!}
                key={item.id}
                product={item}
              />
            ))}
          </SimpleGrid>
          {menu?.length === 0 && (
            <Text w={"100%"} textAlign={"center"}>
              Nenhum item no cardápio.
            </Text>
          )}
        </WithRestaurantSidebar>
      </Flex>
    </>
  );
};

export default Page;
