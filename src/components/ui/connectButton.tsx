"use client";
import { useState, useEffect } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useEnsAvatar, useEnsName } from "wagmi";
import { Button } from "./button";
import Image from "next/image";
import truncateAddress from "~/utils/truncateAddress";

export function ConnectButton() {
  const { open } = useWeb3Modal();
  const { address, isConnected, isConnecting } = useAccount();
  const [loading, setLoading] = useState(true);
  const { data: ensName } = useEnsName({ address: address, chainId: 1 });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName ?? "", chainId: 1 });

  useEffect(() => {
    if (address !== undefined || isConnected !== undefined) {
      setLoading(false);
    }
  }, [address, isConnected]);

  if (isConnecting || loading) {
    return (
      <Button size="lg" onClick={() => open()}>
        <WalletIcon className="mr-2 h-4 w-4" />
        Loading...
      </Button>
    ); // or return a loading indicator
  }

  if (isConnected && address) {
    return (
      <Button size="lg" onClick={() => open()}>
        {ensAvatar ? (
          <Image
            src={ensAvatar}
            alt="Avatar"
            width={24}
            height={24}
            className="mr-2 rounded-full"
          />
        ) : (
          <WalletIcon className="mr-2 h-4 w-4" />
        )}
        {ensName ?? truncateAddress(address, 5)}
      </Button>
    );
  }

  return (
    <Button size="lg" onClick={() => open()}>
      <WalletIcon className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  );
}
function WalletIcon({ ...props }) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
