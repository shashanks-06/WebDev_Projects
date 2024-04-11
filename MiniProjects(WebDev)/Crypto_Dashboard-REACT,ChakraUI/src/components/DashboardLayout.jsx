import { Flex, Box, Container, useDisclosure } from "@chakra-ui/react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <div>
      <Flex>
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <SideNav />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <TopNav title={title} onOpen={onOpen} />
          <Container
            overflowX="hidden"
            overflowY="auto"
            h="calc(100vh - 88px)"
            mt="6"
            maxW="70rem"
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
