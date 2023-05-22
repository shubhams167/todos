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
import { ReactNode, useTransition } from "react";

interface Props {
	id: number;
	children: ReactNode;
}

const Todo = ({ id, children }: Props) => {
	const [isPending, startTransition] = useTransition();

	return (
		<Card>
			<CardBody>
				<Flex justifyContent="space-between">
					<Stack>
						<Text fontSize="xl">{children}</Text>
					</Stack>
					<IconButton
						aria-label="Delete todo"
						colorScheme="red"
						icon={<DeleteIcon />}
						isLoading={isPending}
						onClick={() => startTransition(() => deleteTodo(id))}
					/>
				</Flex>
			</CardBody>
		</Card>
	);
};

export default Todo;
