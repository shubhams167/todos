import { Database } from "@/types/kysely";
import { createKysely } from "@vercel/postgres-kysely";
import { KyselyAuth } from "@auth/kysely-adapter"

export const db = createKysely<Database>();
// export const db2 = new KyselyAuth<Database>({});
export { sql } from "kysely";
