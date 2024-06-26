"use client";

import { useQuery } from "@tanstack/react-query";
import { Button } from "./button";
import { SignInWithEthereum } from "./siwe";
import { useSession } from "next-auth/react";
import { CollapsibleTech } from "./CollapsibleTech";

function fetchProtectedContent() {
  return fetch("/api/protected").then((res) => res.json());
}

export function SIWE() {
  const { status } = useSession();
  const { data, isLoading } = useQuery<{ title: string; content: string }>({
    queryKey: ["protected"],
    queryFn: fetchProtectedContent,
    enabled: status === "authenticated",
  });

  return (
    <section
      className="min-h-[720px] bg-gray-100 py-20 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
      id="hero"
    >
      <div className="container mx-auto flex max-w-3xl grid-cols-1 flex-col-reverse gap-8 px-4 md:grid md:grid-cols-2 md:gap-12">
        <div
          className={`flex flex-col justify-center gap-4 place-self-start ${status === "authenticated" ? "" : "blur-md"}`}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-400 dark:text-gray-400">
            {data?.title ?? "Protected Content"}
          </h2>
          <p className={`place-self-center  tracking-normal text-black `}>
            {isLoading
              ? "...loading"
              : data?.content ??
                "Nice try. Sign in with ethereum first to see this content..."}
          </p>
        </div>

        <div className="space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold tracking-tight">
            Sign in with Ethereum
          </h2>
          <p>
            SIWE is a secure way to sign in with Ethereum. This implementation
            uses NextAuthJS on the backend to verify your signature. Try it out
            to unlock the protected content!
          </p>
          <div className="flex gap-4">
            <SignInWithEthereum />
            <a href="https://login.xyz/" target="_blank">
              <Button className=" min-w-[140px]" size="lg" variant="outline">
                Learn More
              </Button>
            </a>
          </div>
          <CollapsibleTech />
        </div>
      </div>
    </section>
  );
}
