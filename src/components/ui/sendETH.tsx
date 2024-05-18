"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { AddressInput } from "~/components/ui/addressInput";
import {
  useAccount,
  useBalance,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from "wagmi";
import { isAddress, parseEther } from "viem";
import { useState } from "react";
import truncateAddress from "~/utils/truncateAddress";
import { useToast } from "./use-toast";
import { scanners } from "~/constants/scanners";
import { mainnet } from "viem/chains";

export function SendETH() {
  const [to, setTo] = useState("");
  const { address, chainId } = useAccount();
  const { data, isLoading } = useBalance({
    chainId,
    address,
  });
  const { toast } = useToast();

  const { data: hash, sendTransaction } = useSendTransaction();
  const { isLoading: isLoadingTxReciept } = useWaitForTransactionReceipt({
    hash,
  });

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const to = formData.get("address") as `0x${string}`;
    const value = formData.get("value") as string;
    if (!isAddress(to)) return;
    sendTransaction(
      { to, value: parseEther(value) },
      {
        onSuccess: (val) => {
          toast({
            title: "Transaction sent",
            description:
              "Your transaction has been sent! To view it, click the button below.",
            action: (
              <a href={`${scanners[chainId ?? mainnet.id]}/tx/${val}`}>
                <Button>View Transaction</Button>
              </a>
            ),
          });
        },
        onError: (error) => {
          toast({
            title: "Error sending transaction",
            description: error.message,
          });
        },
      },
    );
  }

  return (
    <>
      <div>
        {data?.formatted ? (
          <p className="text-gray-500 dark:text-gray-400">
            Your balance: {data.formatted}
          </p>
        ) : isLoading ? (
          <p className="text-gray-500 dark:text-gray-400">Loading balance...</p>
        ) : null}
      </div>
      <form className="w-full space-y-4" onSubmit={submit}>
        <AddressInput
          name="address"
          onRecipientChange={(address: string) => setTo(address)}
          className="w-full"
          placeholder="Recipient address"
          type="text"
        />
        <Input name="value" placeholder="0.05" required />
        <Button
          className="w-full"
          size={"lg"}
          type="submit"
          disabled={!isAddress(to) || isLoadingTxReciept}
        >
          Send
        </Button>
      </form>
      {hash ? (
        <p className="text-gray-500 dark:text-gray-400">
          View transaction on explorer:{" "}
          <a
            href={`${scanners[chainId ?? mainnet.id]}/tx/${hash}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {truncateAddress(hash as string, 15)}
          </a>
        </p>
      ) : null}
    </>
  );
}
