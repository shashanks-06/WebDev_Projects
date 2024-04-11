import { Flex, Stack, Text, Icon, Box } from "@chakra-ui/react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      justify="space-between"
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="24rem">
        <Icon as={icon} color="p.purple" boxSize={6} />
        <Text
          as="h1"
          textStyle="h1"
          fontWeight="medium
        "
        >
          {title}
        </Text>
        <Text fontSize="sm" color="black.60">
          {text}
        </Text>
      </Stack>
      <Box maxW="34.375rem" w="full">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
