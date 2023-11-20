import Navbar from "@/components/Navbar";
import Summary from "@/components/checkout/summary";
import { Container, Flex } from "@chakra-ui/react";
import { NextPage } from "next";

const CheckoutPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <Container padding="0" maxWidth="container.xl">
        <Flex
          paddingY={["0", "10", "20"]}
          direction={{ base: "column", md: "row" }}
          height={{ base: "auto", md: "100vh" }}
        >
          <Summary />
        </Flex>
      </Container>
    </>
  );
};

export default CheckoutPage;
