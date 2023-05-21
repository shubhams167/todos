"use client";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	Flex,
	IconButton,
	Stack,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type Todo = {
	id: string;
	title: string;
};

const Todo = ({ children }: { children: ReactNode }) => {
	return (
		<Card>
			<CardBody>
				<Flex justifyContent="space-between">
					<Text fontSize="xl">{children}</Text>
					<ButtonGroup variant="ghost">
						<IconButton
							aria-label="Edit todo"
							colorScheme="blue"
							icon={<EditIcon />}
						/>
						<IconButton
							aria-label="Delete todo"
							colorScheme="red"
							icon={<DeleteIcon />}
						/>
					</ButtonGroup>
				</Flex>
			</CardBody>
		</Card>
	);
};

const TodoList = ({ todos }: { todos: Todo[] }) => {
	return (
		<Stack>
			{todos.map(todo => (
				<Todo key={todo.id}>{todo.title}</Todo>
			))}
		</Stack>
	);
};

export default function Home() {
	const todos: Todo[] = [
		{ id: "1", title: "Go to your supervisor and ask for a hike" },
		{ id: "2", title: "Complete all Jira tickets" },
	];

	return (
		<Box p={10}>
			<TodoList todos={todos} />
		</Box>
	);
}
