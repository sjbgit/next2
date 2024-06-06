import { NextRequest, NextResponse } from "@/node_modules/next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([{id: 1, name: 'mosh'}, { id: 2, name: 'seth'}])
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    if (!body.name) {
        return NextResponse.json({error: 'name is required'}, {status: 400})
    }
    return NextResponse.json({ "id": 1, "name": body.name + ' - test POST'}, {status: 201})
}