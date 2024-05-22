"use client";

import { useAccount, useSwitchChain, useWriteContract } from "wagmi";
import { Button, buttonVariants } from "./button";
import { useToast } from "~/components/ui/use-toast";
import { scanners } from "~/constants/scanners";
import { baseSepolia, mainnet } from "viem/chains";
import { ToastAction } from "./toast";
import { cn } from "~/lib/utils";

export function MintNFTButton() {
  const { address, chainId } = useAccount();
  const { writeContract, status } = useWriteContract();
  const { switchChain } = useSwitchChain();
  const { toast } = useToast();

  const handleMintNFT = async () => {
    if (!address) return;
    if (baseSepolia.id !== chainId) {
      toast({
        title: "Wrong Network",
        description: "Please switch to Base Sepolia network to mint this NFT",
        action: (
          <ToastAction
            altText="Switch network"
            className={cn(buttonVariants({}))}
            onClick={() => switchChain({ chainId: baseSepolia.id })}
          >
            Switch Network
          </ToastAction>
        ),
      });

      return;
    }

    const contractAddress = "0x133dadddc938a30b47ffada424d79001f97813e0";
    writeContract(
      {
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
      },
      {
        onSuccess: (val) =>
          toast({
            title: "NFT Minted",
            description: `Your NFT has been minted with hash: ${val}`,
            action: (
              <a href={`${scanners[chainId ?? mainnet.id]}/tx/${val}`}>
                <Button>View Transaction</Button>
              </a>
            ),
          }),
        onError: (val) =>
          toast({
            title: "Error Minting NFT",
            description: val.message,
          }),
      },
    );
  };

  return (
    <Button
      size="lg"
      variant="outline"
      className="min-w-[140px] text-black"
      onClick={handleMintNFT}
      disabled={status === "pending"}
    >
      <PlusIcon
        className={`mr-2 h-4 w-4 ${status === "pending" ? "animate-spin" : ""}`}
      />
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
