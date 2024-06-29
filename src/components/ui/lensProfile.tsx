"use client";
import { AvatarImage, AvatarFallback, Avatar } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { CardContent, Card } from "~/components/ui/card";
import {
  type Profile,
  type ProfileId,
  TriStateValue,
  useFollow,
  useLogin,
  useLogout,
  useProfile,
  useProfilesManaged,
  useUnfollow,
} from "@lens-protocol/react-web";
import { useAccount } from "wagmi";
import { useState } from "react";
import { Separator } from "./separator";
import TopProfiles from "./topProfiles";

export default function LensProfileLogin({
  isLoggedIn,
  setIsLoggedIn,
  profile,
}: {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  profile: Profile;
}) {
  const { address } = useAccount();

  const data = profile;

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
      className="min-w-[140px] text-black"
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
    <Card className="h-full w-full rounded-xl border border-gray-500 bg-[#ffffffd5] bg-opacity-20 bg-clip-padding shadow-2xl shadow-white backdrop-blur-lg backdrop-filter">
      <CardContent className="flex flex-col items-center gap-6 p-6">
        <div className="relative flex w-60 flex-row gap-4">
          <div className="absolute inset-0 right-32 z-0 rounded-full bg-gradient-to-r from-[#cedb6f] to-[#28d942] opacity-70 blur-[60px]" />

          <Avatar className="h-20 w-20 rounded-full border-2 border-white">
            <AvatarImage
              alt="@shadcn"
              src={
                "https://ik.imagekit.io/lens/media-snapshot/3986968c836357ca1fff03bf9318bfcfa694c49b72240ea31e0afd665fec5a5c.jpg?tr=h-auto%2Cw-256%2Cc-at_max"
              }
            />
            <AvatarFallback className="text-gray-900">hone</AvatarFallback>
          </Avatar>
          <div className="flex flex-col place-self-end">
            <h3 className="text-md font-semibold text-gray-900">hone</h3>
            <h3 className="text-md font-extralight text-gray-600">
              lens/hone1er
            </h3>
          </div>
        </div>
        <div className="space-y-4 text-center">
          {isLoggedIn ? (
            <div className="flex w-60 justify-start gap-4">
              <>
                <p className="text-sm text-gray-800 dark:text-gray-300">
                  {data?.stats.following} Following
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-300">
                  {data?.stats.followers} Followers
                </p>
              </>
            </div>
          ) : null}
          <Separator className="mt-0 bg-gray-600" />
          <p className="mt-0 max-w-60 text-left text-sm text-gray-800 dark:text-gray-300">
            Full-stack Web3 developer with frontend focus
          </p>
        </div>

        <div className="flex flex-row gap-2">
          <Button
            onClick={() => {
              void handleFollow();
            }}
            disabled={
              data?.operations.canFollow === TriStateValue.No ||
              !isLoggedIn ||
              loadingFollow
            }
            className="w-full  min-w-[140px] border border-white border-opacity-20 bg-white bg-opacity-10 text-gray-900 transition-colors hover:bg-gray-900 hover:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-100"
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
            className="w-full min-w-[140px] border border-white border-opacity-20 bg-white bg-opacity-10 text-gray-900 transition-colors hover:bg-gray-900 hover:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-100"
            variant="outline"
          >
            Unfollow
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function LensProfileCardSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { address } = useAccount();
  const { data: profiles } = useProfilesManaged({
    for: address!,
  });
  const data = profiles?.[0];

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
                    profile={data}
                  />
                  <a
                    href="https://docs.lens.xyz/docs/what-is-lens"
                    target="_blank"
                  >
                    <Button className=" min-w-[140px]" size="lg">
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                <p>Don&apos;t have a Lens profile yet? Create one now!</p>
                <div className="flex gap-4">
                  <a href="https://lens.xyz" target="_blank">
                    <Button
                      size="lg"
                      className="min-w-[140px] text-black"
                      variant="outline"
                    >
                      Create Profile
                    </Button>
                  </a>
                  <a
                    href="https://docs.lens.xyz/docs/what-is-lens"
                    target="_blank"
                  >
                    <Button className=" min-w-[140px]" size="lg">
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" flex flex-auto flex-col gap-4 overflow-hidden rounded-xl">
          <LensProfileCard isLoggedIn={isLoggedIn} />
        </div>
      </div>
      {isLoggedIn ? <TopProfiles /> : null}
    </section>
  );
}
