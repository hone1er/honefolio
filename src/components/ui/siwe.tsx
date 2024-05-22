"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import type { Hex } from "viem";
import { useAccount, usePublicClient, useSignMessage } from "wagmi";
import { SiweMessage } from "siwe";
import { Button } from "./button";
import { useQuery } from "@tanstack/react-query";
import { signIn, signOut, useSession } from "next-auth/react";
import { useToast } from "./use-toast";

// Function to fetch nonce from the backend
const fetchNonce: () => Promise<string> = async () => {
  const response = await fetch("/api/nonce");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = (await response.json()) as { nonce: string };
  return data.nonce ?? "";
};

export function SignInWithEthereum() {
  const [signature, setSignature] = useState<Hex | undefined>(undefined);
  const [valid, setValid] = useState<boolean | undefined>(undefined);
  const client = usePublicClient();
  const { data: session, status } = useSession();
  const { toast } = useToast();

  const { signMessageAsync } = useSignMessage({
    mutation: {
      onSuccess: async (sig) => {
        setSignature(sig);
        await signIn("credentials", {
          message: JSON.stringify(message),
          redirect: false,
          signature: sig,
          callbackUrl: "/web3",
        });
        toast({
          title: "Signed in",
          description: "You have successfully signed in with Ethereum!",
        });
      },
    },
  });
  const account = useAccount();

  const { data: nonce } = useQuery({
    queryKey: ["nonce"],
    queryFn: fetchNonce,
  });

  const message = useMemo(() => {
    if (!account.address) return;
    return new SiweMessage({
      domain: document.location.host,
      address: account.address,
      chainId: account.chainId,
      uri: document.location.origin,
      version: "1",
      statement: "Honefolio Smart Wallet SIWE Example",
      nonce: nonce ?? "", // replace with nonce generated by your backend
    });
  }, [account.address]);

  const checkValid = useCallback(async () => {
    if (!signature || !account.address || !client) return;
    const isValid = await client.verifyMessage({
      address: account.address,
      message: message?.prepareMessage() ?? "",
      signature,
    });
    setValid(isValid);
  }, [signature, account]);

  useEffect(() => {
    void checkValid();
  }, [signature, account]);

  useEffect(() => {
    if (!session) return;
    if (session?.user.id !== account.address) {
      void signOut();
    }
  }, [session, account]);

  const promptToSign = async () => {
    if (status === "authenticated") {
      await signOut();
      return;
    }
    if (valid) {
      toast({
        title: "Already signed",
        description: "You have already signed in with Ethereum!",
      });
      return;
    }
    console.log("🚀 ~ promptToSign ~ ccount.address:", account.address);
    console.log(
      "🚀 ~ promptToSign ~ message?.prepareMessage():",
      message?.prepareMessage(),
    );

    await signMessageAsync({
      message: message?.prepareMessage() ?? "",
      account: account.address,
    });
  };
  return (
    <>
      <Button className=" min-w-[140px]" size={"lg"} onClick={promptToSign}>
        {status !== "authenticated" ? "SIWE" : "Sign out"}
      </Button>
    </>
  );
}
