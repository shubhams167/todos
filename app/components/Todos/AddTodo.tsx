"use client";

import { Button, Flex, Input } from "@/app/components/ChakraWrappers/React";
import { useRef } from "react";
import { addTodo } from "@/lib/actions";
import { useZact } from "zact/client";

const AddTodo = async () => {
  const formRef = useRef<HTMLFormElement>();
  const { mutate, isLoading } = useZact(addTodo);

  return (
    <form ref={formRef}>
      <Flex gap={4}>
        <Input
          id="title"
          name="title"
          type="text"
          size="lg"
          fontWeight="medium"
          placeholder="What's on your mind today?"
        />
        <Button
          type="submit"
          size="lg"
          colorScheme="blue"
          isLoading={isLoading}
          onClick={(e) => {
            e.preventDefault();
            const data = new FormData(formRef.current);
            mutate(data);
            formRef.current.reset();
          }}
        >
          Add
        </Button>
      </Flex>
    </form>
  );
};

export default AddTodo;
