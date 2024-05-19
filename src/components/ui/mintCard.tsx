"use client";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";
import { PropsWithChildren } from "react";
import { useAccount, useReadContract } from "wagmi";
import { erc721Abi } from "viem";

export function MintCard({ children }: PropsWithChildren) {
  const { address } = useAccount();
  const { data } = useReadContract({
    address: "0x133dadddc938a30b47ffada424d79001f97813e0",
    abi: erc721Abi,
    functionName: "balanceOf",
    args: [address ?? "0x"],
  });

  console.log("🚀 ~ MintCard ~ data:", parseInt(data?.toString() ?? "0"));
  return (
    <section className="py-20" id="nft">
      <div className="container mx-auto grid max-w-3xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12">
        <div className="space-y-4 ">
          <h2 className="text-3xl font-bold tracking-tight">
            Mint it, show it off
          </h2>
          <p>
            Displaying and minting NFTs is a common feature in Web3. Check out
            my NFT minting feature by minting a copy of my resume!
          </p>
          <div className="flex gap-4">
            <a
              href="https://arbiscan.io/address/0x9cfb7a9bfd05de861e60caa9c62148f617f17806#code"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="lg">
                <CodeIcon className="mr-2 h-4 w-4" />
                Read Contract
              </Button>
            </a>
            {children}
          </div>
        </div>
        <div className="flex justify-center">
          <Card className="bg-slate-100">
            <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
              <Image
                alt="NFT"
                className="rounded-xl"
                height="300"
                src="/images/resume.png"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Resume NFT</h3>
                {parseInt(data?.toString() ?? "0") > 0 ? (
                  <>
                    {" "}
                    <p className="text-gray-500 dark:text-gray-400">
                      View your minted NFT here.
                    </p>
                    <a href="ipfs://bafybeif5755vwbgsifizxv2r5zknnjnwo57kayd2lbviinmvdbtjvwm2ce/">
                      <Button size="lg" variant="outline">
                        View NFT
                      </Button>
                    </a>{" "}
                  </>
                ) : null}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function CodeIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
