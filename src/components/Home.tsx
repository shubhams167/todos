"use client";

import GoogleLoginButton from "@/components/Button/GoogleLogin";
import {
  Box,
  Button,
  Flex,
  Heading,
  Skeleton,
  Text,
  useColorMode,
} from "@/components/ChakraWrappers/React";
import { useSession } from "next-auth/react";
import Image from "next/image";
import NextLink from "next/link";
import { FiArrowRight } from "react-icons/fi";
import todosImg from "@/public/images/todos.jpg";

const Home = () => {
  const { colorMode } = useColorMode();
  const { status } = useSession();

  return (
    <Flex direction="column" py={20} px={40} justifyContent={"center"} gap={10}>
      <Flex flexDirection="row" justifyContent="space-between">
        <Flex direction="column">
          <Heading
            w="70%"
            fontSize="8xl"
            fontFamily="body"
            fontWeight="light"
            color={colorMode === "dark" ? "whiteAlpha.900" : "blackAlpha.800"}
            lineHeight={1.1}
          >
            Todos that{" "}
            <Box
              as="span"
              color={colorMode === "dark" ? "teal.200" : "teal.400"}
              fontFamily="heading"
              fontWeight="semibold"
            >
              disappear
            </Box>{" "}
            over time!
          </Heading>
          {/* <Text fontSize="md">
            {
              "Imagine a to-do app that adapts to your changing priorities effortlessly. With tasks that vanish over time, this app keeps you engaged and focused on what's current. Say goodbye to task clutter, and hello to a streamlined and efficient way to manage your daily goals and commitments."
            }
          </Text> */}
        </Flex>

        <Flex w="40%" justifyContent="center">
          <Image src={todosImg} style={{ objectFit: "contain" }} alt="Todos list" />
        </Flex>
      </Flex>
      <Skeleton isLoaded={status !== "loading"} m="auto">
        {status === "unauthenticated" && <GoogleLoginButton title="Get started with " size="lg" />}
        {status === "authenticated" && (
          <Button as={NextLink} href="/dashboard" size="lg" rightIcon={<FiArrowRight />}>
            Go to your dashboard
          </Button>
        )}
      </Skeleton>
    </Flex>
  );
};

export default Home;
