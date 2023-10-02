import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("Todo")
    .ifNotExists()
    .addColumn("id", "uuid", (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn("userId", "uuid", (cb) => cb.references("User.id").onDelete("cascade").notNull())
    .addColumn("title", "varchar(255)", (cb) => cb.notNull())
    .addColumn("disappearAt", sql`timestamp with time zone`)
    .addColumn("createdAt", sql`timestamp with time zone`, (cb) =>
      cb.defaultTo(sql`current_timestamp`)
    )
    .execute();

  await db.schema.createIndex("Todo_userId_index").on("Todo").column("userId").execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("Todo").ifExists().execute();
}
