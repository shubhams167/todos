import { Stack } from "@/app/components/ChakraWrappers/React";
import Todo from "./Todo";
import { db } from "@/lib/kysely";
import AddTodo from "./AddTodo";

const TodoList = async () => {
  const todos = await db
    .selectFrom("todos")
    // .innerJoin("users", "users.id", "todos.userId")
    .selectAll()
    .execute();

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <AddTodo />
      <Stack mt={2}>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id}>
            {todo.title}
          </Todo>
        ))}
      </Stack>
    </>
  );
};

export default TodoList;
