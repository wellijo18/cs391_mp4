import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const POKEMON_API_KEY = process.env.POKEMON_API_KEY;

export async function GET(request: Request): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");

    if(!name){
        return NextResponse.json({error: "No [name] provided"}, {status:400});
    }

    const res = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=name:${name}&apiKey=${POKEMON_API_KEY}`
    );

    if(res.status !== 200){
        return NextResponse.json({error: "Failed to fetch data"}, {status:500});
    }

    const data = await res.json();

    return NextResponse.json(data);
}