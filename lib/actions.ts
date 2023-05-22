"use server";

import { revalidatePath } from "next/cache";
import { zact } from "zact/server";
import { db } from "./kysely";
import { headers } from "next/headers";

export const addTodo = zact()(async (data: FormData) => {
  "use server";
  if (!data.get("title")) return;
  await db
    .insertInto("todos")
    .values([
      {
        title: data.get("title"),
      },
    ])
    .execute();
  revalidatePath("/");
});

export const deleteTodo = zact()(async (id: number) => {
  "use server";
  await db.deleteFrom("todos").where("id", "=", id).execute();
  revalidatePath("/");
});
