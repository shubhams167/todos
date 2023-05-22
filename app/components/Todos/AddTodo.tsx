"use client";

import { Button, Flex, Input } from "@/app/components/ChakraWrappers/React";
import { addTodo } from "@/lib/actions";
import { useRef } from "react";
// import { useTransition } from "react";

const AddTodo = async () => {
	// const [isPending, startTransition] = useTransition();
	const formRef = useRef<HTMLFormElement>();

	return (
		<form
			ref={formRef}
			action={async data => {
				await addTodo(data);
				// startTransition(() => addTodo(data));
				formRef.current.reset();
			}}
			// action={data => startTransition(() => addTodo(data))}
			// onSubmit={event => {
			// 	event.preventDefault();
			// 	const data = new FormData(event.currentTarget);
			// 	console.log(data);
			// 	startTransition(() => addTodo(data));
			// }}
		>
			<Flex gap={4}>
				<Input id="title" name="title" type="text" />
				<Button type="submit">Add</Button>
			</Flex>
		</form>
	);
};

export default AddTodo;
