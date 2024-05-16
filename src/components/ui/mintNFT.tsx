"use client";

import { useAccount, useSwitchChain, useWriteContract } from "wagmi";
import { Button } from "./button";

export function MintNFTButton() {
  const { address, chainId } = useAccount();
  const { switchChain } = useSwitchChain();
  const { writeContract } = useWriteContract();

  const handleMintNFT = async () => {
    const contractAddress = "0x9CFB7a9bfd05De861e60cAa9c62148F617f17806";
    writeContract({
      address: contractAddress,
      functionName: "safeMint",
      args: [address, "QmZTCdyUwaGnEKYpobxLv3jyi1EUaVfj2MBrtnEuhZrQW3"],
      abi: [
        {
          constant: false,
          inputs: [
            {
              name: "to",
              type: "address",
            },
            {
              name: "uri",
              type: "string",
            },
          ],
          name: "safeMint",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    });
  };

  return (
    <Button
      size="lg"
      variant="outline"
      className="text-black"
      onClick={handleMintNFT}
    >
      <PlusIcon className="mr-2 h-4 w-4" />
      Mint NFT
    </Button>
  );
}
function PlusIcon({ ...props }) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
