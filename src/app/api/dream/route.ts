// app/api/dream/route.ts
import { NextResponse } from "next/server";
import { dreamInterpreter } from "@/lib/llm/gemini";

export async function POST(req: Request) {
  const { text } = await req.json();

  if (!text || typeof text !== "string") {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const reply = await dreamInterpreter(text);
    return NextResponse.json({ reply });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to generate reply" }, { status: 500 });
  }
}
