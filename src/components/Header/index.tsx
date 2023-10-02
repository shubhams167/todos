"use client";

import { Heading, Skeleton, Stack, useColorMode } from "@/components/ChakraWrappers/React";

import { useSession } from "next-auth/react";
import HeaderMenu from "./Menu";
import Links from "./Links";
import GoogleLoginButton from "../Button/GoogleLogin";

const Header = () => {
  const { colorMode } = useColorMode();
  const { status } = useSession();

  return (
    <Stack direction="row" justifyContent="space-between" p={10}>
      <Stack direction="row" gap={20}>
        <Heading
          as={"h1"}
          fontSize="5xl"
          color={colorMode === "dark" ? "teal.200" : "teal.400"}
          pointerEvents="none"
        >
          Disappearing Todos
        </Heading>
        <Links />
      </Stack>
      <Stack direction="row" gap={2} alignItems="center">
        <Skeleton isLoaded={status !== "loading"}>
          {status === "unauthenticated" && <GoogleLoginButton title="Continue with" />}
          {status === "authenticated" && <HeaderMenu />}
        </Skeleton>
      </Stack>
    </Stack>
  );
};

export default Header;
