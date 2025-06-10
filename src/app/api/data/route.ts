import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Data from "@/models/dataModel";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { prompt, response } = reqBody;
    const data = await Data.create({ prompt, response });

    if (!data) {
      return NextResponse.json(
        { message: "Failed to create data" },
        { status: 500 }
      );
    }

    console.log(data);

    return NextResponse.json({
      message: "Data created successfully",
      success: true,
      data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
