import { Suspense } from "react";
import Todos from "@/components/Todos";
import { Flex } from "@/components/ChakraWrappers/React";
import AddTodo from "@/components/Todos/AddTodo";
import LoadingSpinner from "@/components/Spinner";

export const metadata = {
  title: "Dashboard | Disappearing Todos",
  description: "Create your disappearing todos",
};

export default function Home() {
  return (
    <Flex flexDirection="column" p={10} gap={10}>
      <AddTodo />
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        {/* @ts-expect-error Async Server Component */}
        <Todos />
      </Suspense>
    </Flex>
  );
}
