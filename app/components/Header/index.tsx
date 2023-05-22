"use client";

import {
  Box,
  Heading,
  IconButton,
  Stack,
  Text,
  useColorMode,
} from "@/app/components/ChakraWrappers/React";
import { SunIcon, MoonIcon } from "@/app/components/ChakraWrappers/Icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const date = new Date();

  return (
    <Stack direction="row" justifyContent="space-between" p={10}>
      <Box>
        <Text fontSize="md" fontWeight="normal">
          YOUR TODOS FOR{" "}
        </Text>
        <Text fontSize="4xl" fontWeight="bold" color="orange.500">
          {date.toDateString()}
        </Text>
      </Box>
      <IconButton
        aria-label="Toggle color mode"
        variant="ghost"
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      />
    </Stack>
  );
};

export default Header;
