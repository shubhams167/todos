import { Center, Stack, Text } from "@/components/ChakraWrappers/React";
import Todo from "./Todo";
import { db, sql } from "@/lib/kysely";
import { getServerSession } from "next-auth";

const TodoList = async () => {
  const session = await getServerSession();
  if (!session.user) return null;

  const todos = await db
    .selectFrom("Todo")
    .innerJoin(
      (eb) =>
        eb
          .selectFrom("User")
          .select(["id"])
          .where("email", "=", session.user.email)
          .as("LoggedInUser"),
      (join) => join.onRef("LoggedInUser.id", "=", "Todo.userId")
    )
    .select(["Todo.id", "title", "disappearAt", "createdAt"])
    .where((eb) => eb("disappearAt", ">", sql`current_timestamp`).or("disappearAt", "is", null))
    .execute();

  return (
    <Stack mt={2}>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} disappearAt={todo.disappearAt}>
          {todo.title}
        </Todo>
      ))}
      {!todos.length && (
        <Center>
          <Text fontFamily="body" colorScheme="gray">
            {"Let's do something exciting today!"}
          </Text>
        </Center>
      )}
    </Stack>
  );
};

export default TodoList;
