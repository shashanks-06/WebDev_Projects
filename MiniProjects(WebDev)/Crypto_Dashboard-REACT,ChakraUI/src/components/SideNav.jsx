import { Box, Stack, HStack, Icon, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();

  const isActiveLink = (link) => {
    return location.pathname === link;
  };
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack
      justifyContent="space-between"
      bg="white"
      boxShadow={{
        lg: "lg",
        base: "none",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Heading
          textAlign="center"
          fontSize="20px"
          as="h1"
          pt="3.5rem"
          color="#5F00D9"
        >
          @SHASHANK_S
        </Heading>
        <Box mx="3" mt="6">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                borderRadius="10px"
                px="3"
                py="4"
                _hover={{
                  bg: "#EEEEF4",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mx="3" mt="6" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            px="3"
            py="4"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
