"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { AddressInput } from "~/components/ui/addressInput";
import { useAccount, useBalance, useSendTransaction } from "wagmi";
import { isAddress, parseEther } from "viem";
import { useState } from "react";
import truncateAddress from "~/utils/truncateAddress";

export function SendETH() {
  const [to, setTo] = useState("");
  const { address } = useAccount();
  const { data, isLoading } = useBalance({
    address,
  });

  const { data: hash, sendTransaction } = useSendTransaction();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const to = formData.get("address") as `0x${string}`;
    const value = formData.get("value") as string;
    if (!isAddress(to)) return;
    sendTransaction(
      { to, value: parseEther(value) },
      {
        onSuccess: (hash) => {
          console.log("Transaction sent with hash", hash);
        },
        onError: (error) => {
          console.error("Failed to send transaction", error);
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
          disabled={!isAddress(to)}
        >
          Send
        </Button>
      </form>
      {hash ? (
        <p className="text-gray-500 dark:text-gray-400">
          View transaction on explorer:{" "}
          <a
            href={`https://arbiscan.io/tx/${hash}`}
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
