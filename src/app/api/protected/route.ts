import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    content: "This is protected content! You are signed in with Ethereum.",
  });
}
