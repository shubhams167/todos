"use client";

import { DeleteIcon, EditIcon } from "@/components/ChakraWrappers/Icons";
import {
  Card,
  CardBody,
  Flex,
  Text,
  IconButton,
  Stack,
  Icon,
  useColorModeValue,
} from "@/components/ChakraWrappers/React";
import { deleteTodo } from "@/lib/actions";
import { ReactNode, useEffect, useMemo, useState, useTransition } from "react";
import { useToast } from "@chakra-ui/react";
import moment from "moment";
import { BiTimer } from "react-icons/bi";
import { getDisappearingInText } from "@/lib/utils";

interface Props {
  id: string;
  disappearAt: Date;
  children: ReactNode;
}

const Todo = ({ id, disappearAt, children }: Props) => {
  const [isLoading, startTransition] = useTransition();
  const toast = useToast();
  const [currentTime, setCurrentTime] = useState(new Date());

  const disappearingIn = useMemo(
    () => moment(disappearAt).diff(moment(currentTime), "m"),
    [currentTime, disappearAt]
  );
  const disappearingInText = useMemo(() => getDisappearingInText(disappearingIn), [disappearingIn]);

  // Re-render component every minute
  useEffect(() => {
    if (!disappearAt) return;

    const id = setInterval(() => setCurrentTime(new Date()), 10000);

    // Cleanup interval on unmounting
    return () => clearInterval(id);
  }, [disappearAt]);

  const disappearingTextColor = useColorModeValue("gray.500", "gray.400");

  if (disappearingIn < 0) {
    return null;
  }

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
        {!Number.isNaN(disappearingIn) && (
          <Flex alignItems={"center"} color={disappearingTextColor} fontSize="md">
            <Icon as={BiTimer} mr={1} aria-label="Disappearing" aria-hidden />
            <Text>{disappearingInText}</Text>
          </Flex>
        )}
      </CardBody>
    </Card>
  );
};

export default Todo;
