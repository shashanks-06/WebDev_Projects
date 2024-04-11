import {
  Card,
  Flex,
  Button,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Tag,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { FaDownload } from "react-icons/fa6";
import TransactionTable from "./components/TransactionTable";
import { TfiSearch } from "react-icons/tfi";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mb={3} mt={6}>
        <Button leftIcon={<Icon as={FaDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Box>
          <Tabs>
            <TabList
              pt="4"
              w="full"
              display="flex"
              justifyContent="space-between"
            >
              <HStack>
                {tabs.map((tab) => (
                  <Tab key={tab.name} display="flex" gap="2" pb="4">
                    {tab.name}
                    <Tag colorScheme="gray" borderRadius="full">
                      {tab.count}
                    </Tag>
                  </Tab>
                ))}
              </HStack>
              <InputGroup maxW="265px" pr="6">
                <InputLeftElement pointerEvents="none">
                  <Icon as={TfiSearch} />
                </InputLeftElement>
                <Input
                  type="search"
                  placeholder="Search by ID or destination"
                />
              </InputGroup>
            </TabList>
            <TabPanels>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
