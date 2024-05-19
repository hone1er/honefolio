import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const randomNonce = Math.random().toString(36).substring(2, 24);
  return NextResponse.json({ nonce: randomNonce });
}
