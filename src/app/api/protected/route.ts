import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await getServerSession();
  console.log("🚀 ~ GET ~ session:", session);
  if (!session) {
    return NextResponse.json({
      content: "You are not signed in with Ethereum.",
    });
  }
  return NextResponse.json({
    title: "This is protected content!",
    content:
      "Contact me at honeoner@gmail.com so I can implement SIWE for you! 🎉",
  });
}
