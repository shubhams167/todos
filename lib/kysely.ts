import { Database } from "@/types/kysely";
import { createKysely } from "@vercel/postgres-kysely";

export const db = createKysely<Database>();
export { sql } from "kysely";
