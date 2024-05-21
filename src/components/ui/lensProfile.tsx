"use client";
import { AvatarImage, AvatarFallback, Avatar } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { CardContent, Card, CardTitle } from "~/components/ui/card";
import {
  ProfileId,
  TriStateValue,
  useFollow,
  useLogin,
  useLogout,
  useProfile,
  useProfiles,
  useUnfollow,
} from "@lens-protocol/react-web";
import { useAccount } from "wagmi";
import { useState } from "react";
import Image from "next/image";

export default function LensProfileLogin({
  isLoggedIn,
  setIsLoggedIn,
}: {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}) {
  const { address } = useAccount();
  const { data: profiles } = useProfiles({
    where: {
      ownedBy: [address as string],
    },
  });
  const data = profiles?.[0];

  const { execute: executeLogin, loading: loadingLogin } = useLogin();
  const { execute: executeLogout, loading: loadingLogout } = useLogout();

  async function handleLogin() {
    const result = await executeLogin({
      address: address as string,
      profileId: `${data?.id}` as ProfileId,
    });
    if (result.isSuccess()) {
      setIsLoggedIn(true);
    }
  }

  async function handleLogout() {
    void executeLogout();
    setIsLoggedIn(false);
  }

  return (
    <Button
      onClick={() => {
        isLoggedIn ? void handleLogout() : void handleLogin();
      }}
      size="lg"
      variant="outline"
      className="text-black"
      disabled={loadingLogin || loadingLogout}
    >
      {isLoggedIn ? "Logout" : "Login"}
    </Button>
  );
}

export function LensProfileCard({ isLoggedIn }: { isLoggedIn: boolean }) {
  const { execute: executeFollow, loading: loadingFollow } = useFollow();
  const { execute: executeUnfollow, loading: loadingUnfollow } = useUnfollow();

  const { data } = useProfile({
    forHandle: isLoggedIn ? "lens/hone1er" : "",
  });

  async function handleFollow() {
    if (!data || !isLoggedIn || data.operations.canFollow === TriStateValue.No)
      return;
    try {
      await executeFollow({ profile: data });
    } catch (e) {
      console.log("🚀 ~ handleFollow ~ e:", e);
    }
  }
  async function handleUnfollow() {
    if (!data || !isLoggedIn) return;
    try {
      await executeUnfollow({ profile: data });
    } catch (e) {
      console.log("🚀 ~ handleFollow ~ e:", e);
    }
  }
  return (
    <Card className="h-full w-full rounded-md border border-gray-500 bg-purple-800 bg-opacity-10 bg-clip-padding backdrop-blur-xl backdrop-filter">
      <CardTitle className="pt-4 text-center text-gray-800">
        {isLoggedIn ? data?.handle?.suggestedFormatted.full : "lens/@hone1er"}
      </CardTitle>
      <CardContent className="flex flex-col items-center gap-4 p-6">
        <Avatar className="h-20 w-20 rounded-full border-2 border-white">
          <AvatarImage
            alt="@shadcn"
            src={
              "https://ik.imagekit.io/lens/media-snapshot/3986968c836357ca1fff03bf9318bfcfa694c49b72240ea31e0afd665fec5a5c.jpg?tr=h-auto%2Cw-256%2Cc-at_max"
            }
          />
          <AvatarFallback className="text-gray-900">
            {isLoggedIn ? data?.metadata?.displayName : "hone"}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1 text-center">
          <h4 className="text-lg font-semibold text-gray-800">
            {isLoggedIn ? data?.metadata?.displayName : "hone"}
          </h4>
          <p className="max-w-60 text-sm text-gray-800 dark:text-gray-300">
            {isLoggedIn
              ? data?.metadata?.bio
              : "Full-stack Web3 developer with frontend focus"}
          </p>
        </div>
        <div className="flex gap-4">
          <p className="text-sm text-gray-800 dark:text-gray-300">
            {data?.stats.following} Following
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-300">
            {data?.stats.followers} Followers
          </p>
        </div>
        <Button
          onClick={() => {
            void handleFollow();
          }}
          disabled={
            data?.operations.canFollow === TriStateValue.No ||
            !isLoggedIn ||
            loadingFollow
          }
          className="w-full border border-white border-opacity-20 bg-white bg-opacity-10 transition-colors hover:bg-gray-900 hover:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-900"
          variant="outline"
        >
          Follow
        </Button>
        <Button
          onClick={handleUnfollow}
          disabled={
            data?.operations.canUnfollow === false ||
            !isLoggedIn ||
            loadingUnfollow
          }
          className="w-full border border-white border-opacity-20 bg-white bg-opacity-10 transition-colors hover:bg-gray-900 hover:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-900"
          variant="outline"
        >
          Unfollow
        </Button>
      </CardContent>
    </Card>
  );
}

export function LensProfileCardSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { address } = useAccount();
  const { data: profiles } = useProfiles({
    where: {
      ownedBy: [address as string],
    },
  });
  const data = profiles?.[0];
  console.log("🚀 ~ LensProfileCardSection ~ data:", data);
  return (
    <section className="py-20 dark:bg-gray-800 " id="lens-profile">
      <div className="container mx-auto grid max-w-3xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12">
        <div className="space-y-4 ">
          <h2 className="text-3xl font-bold tracking-tight">Lens Protocol</h2>
          <div className="flex flex-col gap-8">
            <p>
              {" "}
              Have you heard of Lens? It&apos;s a decentralized social network
              built on Web3.
            </p>
            {!!data ? (
              <div className="flex flex-col gap-8">
                <p> Login to your Lens profile and give me a follow!</p>
                <div className="flex gap-4">
                  <LensProfileLogin
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                  <a
                    href="https://docs.lens.xyz/docs/what-is-lens"
                    target="_blank"
                  >
                    <Button size="lg">Learn More</Button>
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                <p>Don&apos;t have a Lens profile yet? Create one now!</p>
                <div className="flex gap-4">
                  <a href="https://lens.xyz" target="_blank">
                    <Button size="lg" className="text-black" variant="outline">
                      Create Profile
                    </Button>
                  </a>
                  <a
                    href="https://docs.lens.xyz/docs/what-is-lens"
                    target="_blank"
                  >
                    <Button size="lg">Learn More</Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="relative flex flex-auto flex-col gap-4 rounded-md">
          <div className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-[#4c1d95] to-[#6d28d9] opacity-50 blur-[100px]" />
          <Image
            src={"/images/design.png"}
            alt="Lens Protocol"
            style={{
              borderRadius: "2.5rem",
            }}
            fill
          />
          <LensProfileCard isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </section>
  );
}