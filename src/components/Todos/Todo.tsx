"use client";

import { DeleteIcon, EditIcon } from "@/components/ChakraWrappers/Icons";
import { Card, CardBody, Flex, Text, IconButton, Stack } from "@/components/ChakraWrappers/React";
import { deleteTodo } from "@/lib/actions";
import { ReactNode, useTransition } from "react";
import { useToast } from "@chakra-ui/react";

interface Props {
  id: string;
  children: ReactNode;
}

const Todo = ({ id, children }: Props) => {
  const [isLoading, startTransition] = useTransition();
  const toast = useToast();

  return (
    <Card variant="elevated">
      <CardBody>
        <Flex justifyContent="space-between">
          <Stack>
            <Text fontSize="xl" fontFamily="body">
              {children}
            </Text>
          </Stack>
          <IconButton
            variant="ghost"
            aria-label="Delete todo"
            colorScheme="red"
            icon={<DeleteIcon />}
            isLoading={isLoading}
            onClick={() =>
              startTransition(async () => {
                const res = await deleteTodo(id);
                if (res.success) {
                  toast({
                    title: "Todo deleted",
                    status: "success",
                  });
                } else {
                  toast({
                    title: "Failed to delete todo",
                    description: res.message || "Something went wrong. Please try again later.",
                    status: "error",
                  });
                }
              })
            }
          />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Todo;
