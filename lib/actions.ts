"use server";

import { revalidatePath } from "next/cache";
import { db } from "./kysely";

export const addTodo = async (data: FormData) => {
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
};

export const deleteTodo = async (id: number) => {
	"use server";
	await db.deleteFrom("todos").where("id", "=", id).execute();
	revalidatePath("/");
};
