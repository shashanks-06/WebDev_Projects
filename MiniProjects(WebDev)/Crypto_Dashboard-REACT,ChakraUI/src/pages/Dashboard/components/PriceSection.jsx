import { CustomCard } from "../../../chakra/CustomCard";
import {
  Stack,
  HStack,
  Text,
  Icon,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { BsArrowUpRight, BsFillPlusCircleFill } from "react-icons/bs";
import { FaCircleMinus } from "react-icons/fa6";
import graph from "/Graph.svg";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const PriceSection = () => {
  const timestamps = ["7.15 PM", "12.55 AM", "6.35 AM", "8.30 AM", "5.45 PM"];
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Current Price</Text>
          </HStack>
          <HStack
            spacing={4}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹26,670.25
              </Text>{" "}
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontStyle="sm" fontWeight="medium">
                  0.04%
                </Text>
              </HStack>{" "}
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={BsFillPlusCircleFill} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaCircleMinus} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
                _selected={{
                  bg: "white",
                }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src={graph} mt="3rem" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>Coming Soon!</p>
          </TabPanel>
          <TabPanel>
            <p>Coming Soon!</p>
          </TabPanel>
          <TabPanel>
            <p>Coming Soon!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
