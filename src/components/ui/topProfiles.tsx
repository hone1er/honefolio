"use client";
import {
  ExploreProfilesOrderByType,
  LimitType,
  Profile,
  TriStateValue,
  useExploreProfiles,
  useFollow,
  useUnfollow,
} from "@lens-protocol/react-web";
import { MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "./button";
import { useEffect, useState } from "react";
import { stagger, useAnimate } from "framer-motion";

const staggerMenuItems = stagger(0.1, {
  startDelay: 0.125,
  from: "center",
  ease: "linear",
});

function useMenuAnimation(shouldAnimate: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (shouldAnimate) {
      void animate(
        "div",
        { opacity: [0, 1], y: [-20, 0], x: [-20, 0] },
        { delay: staggerMenuItems },
      );
    } else {
      //   void animate("div > div", { opacity: 0, y: 20 });
    }
  }, [shouldAnimate, animate]);

  return scope;
}

export default function TopProfiles() {
  const [animate, setAnimate] = useState<boolean>(false);
  const scope = useMenuAnimation(animate);

  const { data: profiles } = useExploreProfiles({
    orderBy: ExploreProfilesOrderByType.MostFollowers,
    limit: LimitType.Ten,
  });

  useEffect(() => {
    if (profiles?.length) {
      setAnimate(true);
    }
  }, [profiles]);

  return (
    <section className="overflow-hidden py-32">
      <div className="mx-auto flex min-h-80 flex-col gap-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Top Accounts</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Follow some of the top accounts on Lens Protocol{" "}
          </p>
        </div>
        <div
          ref={scope}
          className="no-scrollbar mx-auto flex w-[4000px] max-w-6xl flex-row gap-6 overflow-x-scroll p-6  md:grid md:w-full md:grid-cols-3 md:overflow-x-hidden  lg:grid-cols-3 xl:grid-cols-4"
        >
          {profiles?.slice(0, 8)?.map((profile) => (
            <div
              key={profile.id}
              className="relative min-w-[258px] rounded-lg bg-white py-3 opacity-0 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-950"
            >
              <FollowButton profile={profile} />
              <div className="flex items-center space-x-4 p-4">
                <Image
                  alt="Profile Picture"
                  className="rounded-full"
                  height={48}
                  src={
                    profile?.metadata?.picture?.__typename === "ImageSet"
                      ? (profile?.metadata?.picture?.thumbnail?.uri as string)
                      : profile?.metadata?.picture?.__typename === "NftImage"
                        ? (profile?.metadata?.picture?.image?.thumbnail
                            ?.uri as string)
                        : ""
                  }
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width={48}
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {profile.metadata?.displayName}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {profile.globalStats.followers} Followers
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="block min-w-[758px] sm:hidden"></div>
        </div>
      </div>
    </section>
  );
}

function FollowButton({ profile }: { profile: Profile }) {
  const { execute: executeFollow, loading: loadingFollow } = useFollow();
  const { execute: executeUnfollow, loading: loadingUnfollow } = useUnfollow();

  async function handleFollow() {
    if (!profile || profile.operations.canFollow === TriStateValue.No) return;
    try {
      await executeFollow({ profile });
    } catch (e) {
      console.log("🚀 ~ handleFollow ~ e:", e);
    }
  }
  async function handleUnfollow() {
    if (!profile) return;
    try {
      await executeUnfollow({ profile });
    } catch (e) {
      console.log("🚀 ~ handleFollow ~ e:", e);
    }
  }
  return (
    <Button
      className="absolute right-2 top-2 z-50 h-6 w-6 "
      variant={"secondary"}
      size={"icon"}
      onClick={
        profile.operations.canFollow === TriStateValue.No
          ? handleUnfollow
          : handleFollow
      }
      disabled={
        (profile.operations.canFollow === TriStateValue.No &&
          !profile.operations.canUnfollow) ||
        loadingFollow ||
        loadingUnfollow ||
        !!profile.followModule?.contract.address
      }
    >
      {profile.operations.canUnfollow ? (
        <MinusCircledIcon className="h-6 w-6" />
      ) : (
        <PlusCircledIcon className="h-6 w-6" />
      )}
    </Button>
  );
}
