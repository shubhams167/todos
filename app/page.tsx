import Todos from "./components/Todos";
import { Flex } from "@/app/components/ChakraWrappers/React";

export default function Home() {
	return (
		<Flex flexDirection="column" p={10} gap={10}>
			{/* @ts-expect-error Async Server Component */}
			<Todos />
		</Flex>
	);
}
