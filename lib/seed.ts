import { db, sql } from "@/lib/kysely";

export async function seed() {
	const createUsersTable = await db.schema
		.createTable("users")
		.ifNotExists()
		.addColumn("id", "serial", cb => cb.primaryKey())
		.addColumn("name", "varchar(255)", cb => cb.notNull())
		.addColumn("email", "varchar(255)", cb => cb.notNull().unique())
		.addColumn("createdAt", sql`timestamp with time zone`, cb =>
			cb.defaultTo(sql`current_timestamp`)
		)
		.execute();
	console.log(`Created "users" table`);

	const addUsers = await db
		.insertInto("users")
		.values([
			{
				name: "Shubham Singh",
				email: "shubham@gmail.com",
			},
			{
				name: "John Doe",
				email: "john@gmail.com",
			},
			{
				name: "Peter McDonald",
				email: "peter@mcdonald.com",
			},
		])
		.execute();
	console.log("Seeded database with 3 users");

	const createTodosTable = await db.schema
		.createTable("todos")
		.ifNotExists()
		.addColumn("id", "serial", cb => cb.primaryKey().unique())
		.addColumn("userId", "serial", cb => cb.notNull())
		.addColumn("title", "varchar(255)", cb => cb.notNull())
		.addColumn("createdAt", sql`timestamp with time zone`, cb =>
			cb.defaultTo(sql`current_timestamp`)
		)
		.execute();
	console.log(`Created "todos" table`);

	const addTodos = await db
		.insertInto("todos")
		.values([
			{
				title: "Go to your boss and ask for hike",
			},
			{
				title: "Read for 30 mins",
			},
		])
		.execute();
	console.log("Seeded database with 2 todos");

	return {
		createUsersTable,
		createTodosTable,
		addUsers,
		addTodos,
	};
}
