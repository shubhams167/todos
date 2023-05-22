import { ColumnType, Generated } from "kysely";

interface UserTable {
	id: Generated<number>;
	name: string;
	email: string;
	createdAt: ColumnType<Date, string | undefined, never>;
}

interface TodoTable {
	id: Generated<number>;
	/** ID of the user it belongs to */
	userId: string;
	title: string;
	createdAt: ColumnType<Date, string | undefined, never>;
}

export interface Database {
	users: UserTable;
	todos: TodoTable;
}
