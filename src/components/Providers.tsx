"use client";

import "@fontsource/satisfy";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";

import { CacheProvider } from "@chakra-ui/next-js";
import { SessionProvider } from "next-auth/react";
import Chakra from "@/components/ChakraWrappers/Provider";

type Props = {
  children: React.ReactNode;
  cookies: string;
};

export function Providers({ children, cookies }: Props) {
  return (
    <SessionProvider>
      <CacheProvider>
        <Chakra cookies={cookies}>{children}</Chakra>
      </CacheProvider>
    </SessionProvider>
  );
}
