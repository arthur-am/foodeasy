import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Facilidade",
      text: "Peça de qualquer lugar com o FoodEasy!",
      image:
        "https://th.bing.com/th/id/OIG.mSe6bk.TUS47FgyyJIWF?pid=ImgGn",
    },
    {
      title: "Variedade de Restaurantes",
      text: "Explore uma ampla gama de opções, desde pizzas saborosas até pratos de sushi frescos.",
      image: "https://lh6.googleusercontent.com/XcqIz6GR3DepUz2jZ6q0OHqKxSFoaP4C1St14njJdONrdtt5atH2rnwWcRbbVvqg5J6PVkgdHaFGRiRY50vmUpr2DTjIS1LSrFdeYnKKILYHigUN6SZ-9X5sPbCrdJWn4q7Rh3V8NIpJlRRdrXoHiA",
    },
    {
      title: "Entrega Confiável",
      text: "Nossa entrega rápida e confiável garante que sua comida chegue fresca e quente à sua porta.",
      image: "https://foodydelivery.com/wp-content/uploads/2021/10/Untitled-design-36.png",
    }
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >

                <Box boxShadow='dark-lg' p='6' rounded='md' bg='white'>
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} color="Black" textShadow={"dark-lg"}>
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color="Black">
                    {card.text}
                  </Text>
                </Box>

              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
