"use server";

import { revalidatePath } from "next/cache";
import { db } from "./kysely";
import { z } from "zod";
import moment from "moment";

const addTodoSchema = z.object({
  title: z.string().min(1).max(100),
  userEmail: z.string().min(1).max(100).email(),
  disappearIn: z.number().gte(0),
});

const deleteTodoSchema = z.object({
  id: z.string(),
});

type ActionResponse = {
  success: boolean;
  message?: string;
};

export const addTodo = async (data: FormData): Promise<ActionResponse> => {
  try {
    const parsedData = addTodoSchema.parse({
      title: data.get("title"),
      userEmail: data.get("userEmail"),
      disappearIn: Number(data.get("disappearIn")),
    });

    const disappearAt = !parsedData.disappearIn
      ? null
      : moment(new Date()).add(parsedData.disappearIn, "minutes").toDate();

    await db
      .insertInto("Todo")
      .columns(["title", "userId", "disappearAt"])
      .expression((eb) =>
        eb
          .selectFrom("User")
          .select((eb) => [
            eb.val(parsedData.title).as("title"),
            "User.id",
            eb.val(disappearAt).as("disappearAt"),
          ])
          .where("User.email", "=", parsedData.userEmail)
      )
      .execute();
    revalidatePath("/");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, message: err?.[0]?.message };
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const parsedData = deleteTodoSchema.parse({ id });
    await db.deleteFrom("Todo").where("id", "=", parsedData.id).execute();
    revalidatePath("/");
    return { success: true };
  } catch (err) {
    return { success: false, message: err?.[0]?.message };
  }
};
