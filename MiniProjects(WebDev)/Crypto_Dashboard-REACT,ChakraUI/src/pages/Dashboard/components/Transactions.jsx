import { CustomCard } from "../../../chakra/CustomCard";
import {
  Text,
  Stack,
  Flex,
  Box,
  Icon,
  Grid,
  Divider,
  Button,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { PiCurrencyBtcFill } from "react-icons/pi";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: HiMiniCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: PiCurrencyBtcFill,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      inr: "+ ₹81,123.10",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: HiMiniCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];

  return (
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="black.80">
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider />}
            <Flex gap="4">
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={transaction.icon} boxSize={7} />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.text}</Text>
                  <Text fontSize="sm" color="black.40">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.amount}</Text>
                  <Flex justify="flex-end">
                    <Text fontSize="sm" color="black.40">
                      {transaction.inr}
                    </Text>
                  </Flex>
                </Stack>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" mt={6} colorScheme="gray">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
