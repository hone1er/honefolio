import { NextResponse, NextRequest } from "next/server";
import { TextOnlyMetadata } from "@lens-protocol/metadata";

export async function POST(request: NextRequest) {
  console.log("🚀 ~ POST ~ request:", request);
  try {
    if (!request.body)
      return NextResponse.json({ error: "No body" }, { status: 400 });
    const { metadata } = (await request.json()) as {
      metadata: TextOnlyMetadata;
    };

    const res = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PINATA_JWT}`,
      },
      body: JSON.stringify(metadata),
    });

    const IpfsHash = (await res.json()) as { IpfsHash: string };
    console.log(IpfsHash);

    return NextResponse.json(IpfsHash, { status: 200 });
    // return NextResponse.json({ IpfsHash: metadata }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
