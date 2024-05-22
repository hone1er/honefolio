"use client";
import { Button } from "./button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";

interface Tec {
  title: string;
  href: string;
  zIndex: number;
}
export interface TechListProps {
  techList?: Tec[];
}

export const tec: Tec[] = [
  {
    title: "Next.js",
    href: "https://nextjs.org/",
    zIndex: 50,
  },
  { title: "NextAuthJS", href: "https://next-auth.js.org/", zIndex: 40 },

  {
    title: "Sign in with Ethereum",
    href: "https://login.xyz/",
    zIndex: 30,
  },
  {
    title: "WAGMI hooks",
    href: "https://wagmi.sh/",
    zIndex: 20,
  },
];

const staggerMenuItems = stagger(0.12, { startDelay: 0.1 });

export function useMenuAnimation(shouldAnimate: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (shouldAnimate) {
      void animate(
        "li",
        { opacity: [0, 1], y: [-75, 0] },
        { delay: staggerMenuItems, type: "spring" },
      );
    } else {
      try {
        void animate("li", { opacity: 0, y: 20 });
      } catch (e) {
        console.log(e);
      }
    }
  }, [shouldAnimate, animate]);

  return scope;
}

export function CollapsibleTech({ techList = tec }: TechListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [animate, setAnimate] = useState<boolean>(false);
  const scope = useMenuAnimation(animate);

  return (
    <Collapsible className="transition-all duration-500">
      <div className="flex w-full flex-col gap-4">
        <div className="relative z-40 flex items-center justify-between space-x-4  px-4">
          <h4 className="text-sm font-semibold">
            What was used to build this?
          </h4>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-9 p-0"
              onClick={() => {
                setIsExpanded(!isExpanded);
                setAnimate(!animate);
              }}
            >
              <ChevronDownIcon
                className={`h-4 w-4 ${isExpanded ? "rotate-[-540deg]" : ""} transform transition-transform duration-500`}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent ref={scope}>
          <ul className="flex list-inside list-none flex-col space-y-2 px-4">
            {techList.map((tech) => (
              <a
                key={tech.title}
                href={tech.href}
                target="_blank"
                className={`relative z-${tech.zIndex} w-full`}
              >
                <li className="rounded-xl border-2 border-gray-700 bg-gray-50 p-2 px-4 text-black">
                  {tech.title}
                </li>
              </a>
            ))}
          </ul>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
