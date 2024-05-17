import { WorkCard } from "./../../components/ui/workCard";
import React from "react";

export default function Component() {
  return (
    <>
      <div className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-gray-800 sm:text-5xl md:text-6xl">
                Individual Contributor Roles
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">
                Work i have done as an individual contributor.
              </p>
            </div>
            <div className="flex items-center justify-end"></div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-10">
          <WorkCard
            title="Twali"
            description="A smart contract freelance platform that allows users to create and fulfill freelance contracts using Ethereum."
            repository="https://github.com/twali-xyz/twali-marketplace"
            liveDemo="https://twali.xyz/"
            contributions={[
              "As a junior developer, I was responsible for implementing the frontend of the platform using React and Chakra UI",
              "Later as a senior developer, I was responsible for connecting the frontend to the smart contracts using ethers.js, debugging and fixing bugs in the UI, creating and maintaining documentation, and implementing new features",
            ]}
          />
          <WorkCard
            title="Drippi"
            description="A platform for influcencers to manage their finances and connect with brands."
            repository="https://github.com/twali-xyz/drippi"
            liveDemo="https://drippi-erqr90rsj-drippi.vercel.app/"
            contributions={[
              "As a senior developer, I implemented the frontend of the platform using React and Chakra UI",
              "Created and maintained documentation, and implemented new features",
              "Some of the features I implemented include the dashboard, profile page, and the brand page",
              "Connected to APIs such as Stripe and Plaid to manage financial data",
            ]}
          />
        </div>
      </div>
    </>
  );
}
