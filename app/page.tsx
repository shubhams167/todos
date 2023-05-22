import Todos from "./components/Todos";
import { Box, Flex, Stack } from "@/app/components/ChakraWrappers/React";
import AddTodo from "./components/Todos/AddTodo";

export default function Home() {
	return (
		<Flex flexDirection="column" p={10} gap={10}>
			{/* @ts-expect-error Async Server Component */}
			<AddTodo />
			{/* @ts-expect-error Async Server Component */}
			<Todos />
		</Flex>
	);
}
