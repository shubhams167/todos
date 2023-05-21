import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
	const data = [
		{
			id: "1",
		},
		{ id: "2" },
	];
	return NextResponse.json({ data });
}

export async function POST() {
	const data = [{ id: "1" }, { id: "2" }, { id: "3" }];
	return NextResponse.json({ data });
}
