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