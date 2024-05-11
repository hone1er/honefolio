import Image from "next/image";
import React from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "~/components/ui/card";

export default function Component() {
  return (
    <>
      <div className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-gray-800 sm:text-5xl md:text-6xl">
                Open Source Contributions
              </h1>
              <p className="text-lg text-gray-500 md:text-xl dark:text-gray-400">
                Here are some of the open source projects I&apos;ve contributed
                to.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <Image
                alt="John Doe"
                className="rounded-full"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-10">
          <Card>
            <CardHeader>
              <CardTitle>Nexth</CardTitle>
              <CardDescription>
                A Next.js + Ethereum starter kit with Viem, Wagmi, Web3Modal,
                SIWE, Tailwind, daisyUI and more!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <GithubIcon className="h-4 w-4" />
                <a
                  className="hover:underline"
                  href="https://github.com/wslyvh/nexth"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Repository
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <LinkIcon className="h-4 w-4" />
                <a
                  className="hover:underline"
                  href="https://nexth.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Live Demo
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Alchemix.fi</CardTitle>
              <CardDescription>
                Alchemix Finance is a future-yield-backed synthetic asset
                protocol and community DAO.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <GithubIcon className="h-4 w-4" />
                <a
                  className="hover:underline"
                  href="https://github.com/alchemix-finance/alchemix-v2-frontend"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Repository
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <LinkIcon className="h-4 w-4" />
                <a
                  className="hover:underline"
                  href="https://alchemix.fi/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Live Demo
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

function GithubIcon({ ...props }) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkIcon({ ...props }) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}
