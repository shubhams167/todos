"use client";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  Icon,
  Switch,
  FormControl,
  FormLabel,
  Flex,
  Box,
  useColorMode,
} from "@/components/ChakraWrappers/React";
import { SunIcon, MoonIcon } from "@/components/ChakraWrappers/Icons";
import { FiLogOut } from "react-icons/fi";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const HeaderMenu = () => {
  const { data: session, status } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Menu closeOnSelect={false}>
      <MenuButton variant="unstyled" as={Button}>
        {status === "authenticated" && (
          <Avatar name={session.user.name} src={session.user.image} boxSize={10}></Avatar>
        )}
      </MenuButton>
      <MenuList fontFamily="body">
        <MenuItem as={Box} icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}>
          <FormControl as={Flex} alignItems="center" justifyContent="space-between">
            <FormLabel htmlFor="darkMode" mb="auto">
              Dark mode
            </FormLabel>
            <Switch
              id="darkMode"
              pointerEvents="auto"
              isChecked={colorMode === "dark"}
              onChange={toggleColorMode}
              colorScheme="teal"
            />
          </FormControl>
        </MenuItem>
        <MenuItem onClick={() => signOut()} icon={<Icon as={FiLogOut} />}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HeaderMenu;
