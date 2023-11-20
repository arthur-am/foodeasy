import WithSidebar from "@/components/sidebars/Sidebar";
import RestaurantCard2 from "@/components/cards/RestaurantCard2";
import { categories } from "@/data/categories";
import { restaurants } from "@/data/restaurants";
import { Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const category = categories.find(
    (c) => c.id === parseInt(router.query.id as string)
  );

  const restaurantsOnCategory = restaurants.filter((r) =>
    r.categories.some((cat) => cat.id === category?.id)
  );

  return (
    <>
      <WithSidebar>
        <Stack>
          {restaurantsOnCategory.map((restaurant) => (
            <RestaurantCard2 key={restaurant.id} restaurant={restaurant} />
          ))}
        </Stack>
      </WithSidebar>
    </>
  );
};

export default Page;
