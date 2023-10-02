// import { db } from "@/lib/kysely";
// import { seed } from "@/lib/seed";
// import { headers } from "next/headers";
// import { NextResponse } from "next/server";

// export async function GET(request: Request, response: Response) {
// 	try {
// 		const users = await db.selectFrom("users").selectAll().execute();
// 		return NextResponse.json(users);
// 	} catch (e: any) {
// 		if (e.message === `relation "users" does not exist`) {
// 			console.log(
// 				"Table does not exist, creating and seeding it with dummy data now..."
// 			);
// 			// Table is not created yet
// 			await seed();

// 			const users = await db.selectFrom("users").selectAll().execute();
// 			return NextResponse.json(users);
// 		}
// 		return NextResponse.json({});
// 	}
// }

// export async function POST() {
// 	const data = [{ id: "1" }, { id: "2" }, { id: "3" }];
// 	return NextResponse.json({ data });
// }
