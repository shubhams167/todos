"use client";

import { Button, Flex, Icon, Input, Select } from "@/components/ChakraWrappers/React";
import { useRef } from "react";
import { addTodo } from "@/lib/actions";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useToast } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { BiTimer } from "react-icons/bi";
import { useSession } from "next-auth/react";

const disappearInOptions = [
  { label: "1 min", value: 1 },
  { label: "1 hr", value: 60 },
  { label: "2 hrs", value: 120 },
  { label: "4 hrs", value: 240 },
  { label: "9 hrs", value: 540 },
  { label: "12 hrs", value: 720 },
  { label: "1 day", value: 1440 },
  { label: "2 days", value: 2880 },
  { label: "1 week", value: 10080 },
  { label: "never", value: 0 },
];

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
      <Flex gap={4} fontFamily="body">
        <Input
          id="title"
          name="title"
          type="text"
          size="lg"
          placeholder="What's on your mind today?"
          autoFocus
          required
        />
        <Select
          id="disappearIn"
          name="disappearIn"
          size="lg"
          maxW={"7%"}
          defaultValue={720}
          placeholder="Disappear in"
          icon={<Icon as={BiTimer} fontSize={"2xl"} />}
          required
        >
          {disappearInOptions.map((opt) => (
            <option key={opt.label} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
        <Input
          id="userEmail"
          name="userEmail"
          type="hidden"
          value={session?.user?.email || "unknown"}
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
