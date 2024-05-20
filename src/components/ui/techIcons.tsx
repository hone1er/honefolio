"use client";
import React, { useEffect, useState } from "react";
import { useAnimate, stagger } from "framer-motion";
import Image from "next/image";

const staggerMenuItems = stagger(0.1, { startDelay: 0.1 });

function useMenuAnimation(shouldAnimate: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (shouldAnimate) {
      void animate(
        "div > div",
        { opacity: 1, y: 0 },
        { delay: staggerMenuItems },
      );
    } else {
      void animate("div > div", { opacity: 0, y: 20 });
    }
  }, [shouldAnimate, animate]);

  return scope;
}

export function TechIcons() {
  const [animate, setAnimate] = useState<boolean>(false);
  const scope = useMenuAnimation(animate);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      ref={scope}
      className="grid w-full grid-cols-2 items-center justify-center gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-12 xl:grid-cols-6"
    >
      {[
        {
          alt: "Next.js",
          src: "/images/nextjs.svg",
          text: "Next.js",
          description:
            "React framework for building server-rendered applications.",
        },
        {
          alt: "TypeScript",
          src: "/images/ts-logo-round-512.png",
          text: "TypeScript",
          description:
            "Superset of JavaScript that adds optional static typing.",
        },
        {
          alt: "React",
          src: "/images/react-logo.svg",
          text: "React",
          description: "JavaScript library for building user interfaces.",
        },
        {
          alt: "Python",
          src: "/images/python-logo-only.png",
          text: "Python",
          description:
            "High-level programming language for general-purpose development.",
        },
        {
          alt: "Solidity",
          src: "/images/solidity_logo.svg",
          text: "Solidity",
          description:
            "Contract-oriented, high-level language for implementing smart contracts.",
        },
        {
          alt: "Tailwind CSS",
          src: "/images/tailwind-logo.svg",
          text: "Tailwind CSS",
          description:
            "Utility-first CSS framework for rapidly building custom designs.",
        },
      ].map(({ alt, src, text, description }, index) => (
        <div
          key={index}
          className="img-container flex translate-y-5 flex-col items-center gap-2 opacity-0"
        >
          <Image
            alt={alt}
            className="h-12 w-12"
            height={48}
            src={src}
            style={{
              aspectRatio: "48/48",
              objectFit: "contain",
            }}
            width={48}
          />
          <div className="text-sm font-medium">{text}</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
}
