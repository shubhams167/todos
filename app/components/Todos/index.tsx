import { Stack } from "@/app/components/ChakraWrappers/React";
import Todo from "./Todo";
import { db } from "@/lib/kysely";
// import { experimental_useOptimistic as useOptimistic } from "react";

const TodoList = async () => {
	const todos = await db
		.selectFrom("todos")
		// .innerJoin("users", "users.id", "todos.userId")
		.selectAll()
		.execute();

	// const [optimisticTodos, deletedOptimisticTodos] = useOptimistic(
	// 	todos,
	// 	(state, removedTodo) => state.filter(todo => todo.id !== removedTodo.id)
	// );

	return (
		<Stack>
			{todos.map(todo => (
				<Todo key={todo.id} id={todo.id}>
					{todo.title}
				</Todo>
			))}
		</Stack>
	);
};

export default TodoList;
