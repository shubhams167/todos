"use client";

import { Button, ResponsiveValue, Text } from "@/components/ChakraWrappers/React";
import { signIn } from "next-auth/react";
import Image from "next/image";

type Props = {
  title?: string;
  size?: ResponsiveValue<(string & {}) | "sm" | "md" | "lg" | "xs">;
};

const GoogleLoginButton = ({ title, size = "md" }: Props) => {
  return (
    <Button m={"auto"} size={size} onClick={() => signIn()}>
      {!!title && (
        <Text mr={2} fontSize={size}>
          {title}
        </Text>
      )}
      <Image
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google"
        height={20}
        width={20}
        aria-hidden
      />
    </Button>
  );
};

export default GoogleLoginButton;
