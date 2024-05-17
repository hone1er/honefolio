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
                Freelance Work
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">
                Here are some of the freelance projects I&apos;ve worked on.
              </p>
            </div>
            <div className="flex items-center justify-end"></div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-10">
          <WorkCard
            title="SkateXP"
            description="Skateboarding non-profit based in Los Berkeley, California."
            repository="https://github.com/hone1er/skatexpsite"
            liveDemo="https://skatexp.org/"
            contributions={[
              "Designed and and implemented complete website using Django and TailwindCSS",
              "Features include a blog, program signups, and donation page powered by Stripe",
            ]}
          />
          <WorkCard
            title="Castiza & Charrúa"
            description="Interior design studio based in Madrid, Spain."
            liveDemo="https://castizaycharrua.com"
            contributions={[
              "Implemented custom styled form elements using CSS and javascript",
            ]}
          />
          <WorkCard
            title="Crony Creative"
            description="Crony is an award-winning full-service strategy and creative agency based in Brooklyn."
            liveDemo="https://www.cronycreative.com/"
            contributions={[
              "Implemented custom animations using CSS and javascript",
              "Assisted in improving the mobile responsiveness of the website",
            ]}
          />
          <WorkCard
            title="Ziti Studio"
            description="Rapid design and development studio based in New York."
            repository="https://github.com/hone1er/ziti"
            liveDemo="https://ziti.studio"
            contributions={[
              "Implemented the landing page using React and TailwindCSS",
            ]}
          />
        </div>
      </div>
    </>
  );
}
