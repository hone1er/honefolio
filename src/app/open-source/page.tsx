import { WorkCard } from "./../../components/ui/workCard";

import Image from "next/image";
import React from "react";

export default function Component() {
  return (
    <>
      <div className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-gray-800 sm:text-5xl md:text-6xl">
                Open Source Contributions
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">
                Here are some of the open source projects I&apos;ve contributed
                to.
              </p>
            </div>
            <div className="flex items-center justify-end"></div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-10">
          <WorkCard
            title="Alchemix.fi"
            description="Alchemix Finance is a future-yield-backed synthetic asset protocol and community DAO."
            repository="https://github.com/alchemix-finance/alchemix-v2-frontend"
            liveDemo="https://alchemix.fi/"
            contributions={[
              "Identified and fixed a bug that prevented users from depositing funds to the wstETH vault. Fixing this bug increased the TVL of the vault by 25% within 48 hours",
              "Identified and fixed a bug in the frontend that was causing the UI to freeze",
            ]}
          />
          <WorkCard
            title="Nexth"
            description="A Next.js + Ethereum starter kit with Viem, Wagmi, Web3Modal, SIWE, Tailwind, daisyUI and more!"
            repository="https://github.com/wslyvh/nexth"
            liveDemo="https://nexth.vercel.app/"
            contributions={[
              "Implemented mulitple reusable components including ENS supported address input and token quantity input",
              "Added support for Coinbase Smart Wallet",
            ]}
          />
        </div>
      </div>
    </>
  );
}
