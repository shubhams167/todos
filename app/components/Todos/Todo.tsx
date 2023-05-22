"use client";
import { DeleteIcon, EditIcon } from "@/app/components/ChakraWrappers/Icons";
import {
  Card,
  CardBody,
  Flex,
  Text,
  IconButton,
  Stack,
} from "@/app/components/ChakraWrappers/React";
import { deleteTodo } from "@/lib/actions";
import { ReactNode } from "react";
import { useZact } from "zact/client";

interface Props {
  id: number;
  children: ReactNode;
}

const Todo = ({ id, children }: Props) => {
  const { mutate, isLoading } = useZact(deleteTodo);

  return (
    <Card variant="elevated">
      <CardBody>
        <Flex justifyContent="space-between">
          <Stack>
            <Text fontSize="xl" fontWeight="medium">
              {children}
            </Text>
          </Stack>
          <IconButton
            variant="ghost"
            aria-label="Delete todo"
            colorScheme="red"
            icon={<DeleteIcon />}
            isLoading={isLoading}
            onClick={() => mutate(id)}
          />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Todo;
