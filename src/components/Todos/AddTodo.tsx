"use client";

import { Button, Flex, Input } from "@/components/ChakraWrappers/React";
import { useRef } from "react";
import { addTodo } from "@/lib/actions";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useToast } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { useSession } from "next-auth/react";

const AddTodo = () => {
  const formRef = useRef<HTMLFormElement>();
  const toast = useToast();
  const { data: session } = useSession();

  return (
    <form
      action={async (data: FormData) => {
        const res = await addTodo(data);
        if (res.success) {
          toast({
            title: "Todo added",
            status: "success",
          });
          formRef.current?.reset();
        } else {
          toast({
            title: "Failed to add todo",
            description: res.message || "Something went wrong. Please try again later.",
            status: "error",
          });
        }
      }}
      ref={formRef}
    >
      <Flex gap={4}>
        <Input
          id="title"
          name="title"
          type="text"
          size="lg"
          fontWeight="medium"
          fontFamily="body"
          autoFocus
          required
          placeholder="What's on your mind today?"
        />
        <Input
          id="userEmail"
          name="userEmail"
          type="hidden"
          value={session?.user?.email}
          required
        />
        <AddButton />
      </Flex>
    </form>
  );
};

const AddButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      fontSize="xl"
      colorScheme="teal"
      isLoading={pending}
      fontFamily="body"
      rightIcon={<FiPlus />}
    >
      Add
    </Button>
  );
};

export default AddTodo;
