// post request to /api/comment that takes in a metadata object and returns a ipfs hash
// Compare this snippet from src/app/api/lens/comment/route.ts:

import { TextOnlyMetadata } from "@lens-protocol/metadata";

export async function uploadToIPFS(metadata: TextOnlyMetadata) {
  try {
    const res = await fetch("/api/lens/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ metadata }),
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const { IpfsHash } = (await res.json()) as { IpfsHash: string };
    return IpfsHash;
  } catch (e) {
    console.log(e);
    throw new Error("Internal Server Error");
  }
}
