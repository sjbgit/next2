import { NextRequest, NextResponse } from "@/node_modules/next/server";

interface Props {
    params: { id: number }
}

//const data = [{id: 1, name: 'mosh'}, { id: 2, name: 'seth'}];

export function GET(request: NextRequest, { params }: { params: { id: number} }) {
    

    if (params.id > 10)
        return NextResponse.json({ error: 'user not found'}, { status: 404})

    return NextResponse.json({id: 1, name: 'seth'})
    //const filtered = data.filter(user => user.id === params.id)
    //return NextResponse.json(filtered);
    
    //return NextResponse.json([{id: 1, name: 'mosh'}, { id: 2, name: 'seth'}])
}

// export async function POST(request: NextRequest, { params }: { params: { id: number} }) {
//     const body = await request.json()
//     return NextResponse.json(body)
// }

export async function PUT(request: NextRequest,
    { params }: { params: { id: number} }) {
    const body = await request.json()
    if (!body.name) {
        return NextResponse.json({error: 'name is required'}, {status: 400})
    }

    if (params.id > 10) {
        return NextResponse.json({error: 'User not found - PUT'}, {status: 404})
    }
    return NextResponse.json({ "id": 1, "name": body.name + ' - test PUT'}, {status: 201})
}