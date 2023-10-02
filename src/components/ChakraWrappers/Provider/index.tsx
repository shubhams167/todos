import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from "@chakra-ui/react";
import theme from "@/lib/theme";

export default function Chakra({ cookies, children }) {
  const colorModeManager =
    typeof cookies === "string" ? cookieStorageManagerSSR(cookies) : localStorageManager;

  return (
    <ChakraProvider
      colorModeManager={colorModeManager}
      theme={theme}
      toastOptions={{ defaultOptions: { position: "top-right", duration: 2000 } }}
    >
      {children}
    </ChakraProvider>
  );
}
