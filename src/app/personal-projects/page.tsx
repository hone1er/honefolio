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
                Personal Projects
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">
                Here are some of the personal projects I&apos;ve worked on.
              </p>
            </div>
            <div className="flex items-center justify-end"></div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-10">
          <WorkCard
            title="CareMatey"
            description="CareMatey is a platform for pet owners, sitters, and veterinarians to create personalized care guides for pets."
            repository="https://github.com/carematey/CareMatey"
            liveDemo="https://carematey.com/"
            contributions={[
              "Integrated the OpenAI API to generate personalized profiles for pets",
              "Implemented a user-friendly interface for creating and sharing care guides",
            ]}
          />
          <WorkCard
            title="Alexa Skill - Thrasher"
            description="A custom Alexa skill that reads the latest video titles and descriptions from Thrasher Magazine's website."
            repository="https://github.com/hone1er/Thrasher_alexa_skill"
            liveDemo="https://www.amazon.com/Hone-Thrasher-video/dp/B07RLBPR8F"
            contributions={[
              "Wrote the Python script to scrape the website and format the data for Alexa",
              "Deployed the skill to the Alexa Skills Store and maintained the codebase",
            ]}
          />
          <WorkCard
            title="Web Threes"
            description="A web3 version of the dice game Threes, built using Solidity and React."
            repository="https://github.com/hone1er/threes"
            // liveDemo="https://alchemix.fi/"
            contributions={[
              "Identified and fixed a bug that prevented users from depositing funds to the wstETH vault. Fixing this bug increased the TVL of the vault by 25% within 48 hours",
              "Identified and fixed a bug in the frontend that was causing the UI to freeze",
            ]}
          />
        </div>
      </div>
    </>
  );
}
