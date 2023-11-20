import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
  Badge,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import useCart from "@/store/cartStore";
import useUser from "@/store/userStore";
import Image from "next/image";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

function useNavItems() {
  const NAV_ITEMS: Array<NavItem> = useMemo(() => [], []);

  return NAV_ITEMS;
}

export default function Nav() {
  const { isOpen, onToggle } = useDisclosure();

  const { items } = useCart();
  const { currentUser, logout } = useUser();

  const router = useRouter();
  const navIsEmpty = useNavItems().length === 0;

  return (
    <Box>
      <Center
        position={{ base: "absolute", md: "fixed" }}
        width={"full"}
        zIndex={"overlay"}
        backgroundColor={"gray.200"}
      >
        <Box width={"7xl"}>
          <Flex
            minH={5}
            maxH={"68px"}
            py={{ base: 2, xl: 0 }}
            px={{ base: 4, xl: 0 }}
            align={"center"}
          >
            <Flex display={{ base: "flex", md: "none" }}>
              {!navIsEmpty && (
                <IconButton
                  onClick={onToggle}
                  icon={
                    isOpen ? (
                      <CloseIcon w={3} h={3} />
                    ) : (
                      <HamburgerIcon w={5} h={5} />
                    )
                  }
                  variant={"ghost"}
                  aria-label={"Toggle Navigation"}
                  color={"white"}
                />
              )}
            </Flex>

            <Flex
              justify={"center"}
              width={useBreakpointValue({ base: "full", md: "" })}
            >
              <Image
                alt="FoodEasy Logo"
                onClick={() => {
                  router.push("/");
                }}
                style={{
                  cursor: "pointer",
                }}
                src={"/logo.png"}
                width={96}
                height={96}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
              <Flex display={{ base: "none", md: "flex" }} ml={10}>
                <DesktopNav />
              </Flex>
            </Flex>

            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              <Button
                background={"red.300"}
                w="fit-content"
                onClick={() => router.push("/cart")}
              >
                <FaShoppingCart color="white" />
                {items?.length !== 0 && (
                  <Badge
                    position={"absolute"}
                    top={8}
                    right={-2}
                    color={"white"}
                    bg={"red.500"}
                    zIndex={1000000}
                    variant="subtle"
                  >
                    {items?.length}
                  </Badge>
                )}
              </Button>

              {currentUser ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar size={"sm"} />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <Center mx={5}>{/* <ChangeLang /> */}</Center>
                    <br />
                    <Center>
                      <Avatar size={"2xl"} />
                    </Center>
                    <br />
                    <Center>
                      <p>{currentUser?.name || "Você não está logado!"}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem
                      onClick={() => {
                        logout();
                      }}
                    >
                      Sair
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <>
                  <Button
                    background={"green.200"}
                    w="fit-content"
                    color="black"
                    onClick={() => router.push("/auth")}
                  >
                    Entrar
                  </Button>
                  <Button
                    background={"green.300"}
                    w="fit-content"
                    color="black"
                    onClick={() => router.push("/auth/signup")}
                  >
                    Cadastrar
                  </Button>
                </>
              )}
            </Stack>
          </Flex>

          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Box>
      </Center>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "white");
  const linkHoverColor = useColorModeValue("black", "white");
  const popoverContentBgColor = useColorModeValue("white", "black");

  const navItems = useNavItems();

  return (
    <Stack direction={"row"} spacing={4} align={"center"}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                color={linkColor}
                fontWeight={500}
                _hover={{
                  textDecoration: "inherit",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  const navItems = useNavItems();
  return (
    <Stack p={4}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          // borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
