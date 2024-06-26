"use client";
import { useState } from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
} from "./card";
export interface WorkCardProps {
  title: string;
  description: string;
  repository?: string;
  liveDemo?: string;
  contributions: string[];
}
export function WorkCard({
  title,
  description,
  repository,
  liveDemo,
  contributions,
}: WorkCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Card className={`h-fit min-h-[210px]`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 ">
        {repository ? (
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <GithubIcon className="h-4 w-4" />
            <a
              className="hover:underline"
              href={repository}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Repository
            </a>
          </div>
        ) : null}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <LinkIcon className="h-4 w-4" />
          <a
            className="hover:underline"
            href={liveDemo}
            rel="noopener noreferrer"
            target="_blank"
          >
            View Live Demo
          </a>
        </div>
        <div className="flex cursor-pointer flex-col items-start justify-start gap-2 place-self-start text-sm text-gray-500  dark:text-gray-400 ">
          <button
            onClick={handleToggle}
            className="flex flex-row gap-2 hover:underline"
          >
            <DownArrowIcon
              className={`h-4 w-4 ${isOpen ? "rotate-0deg" : "rotate-[270deg]"} `}
            />
            <p>View Contributions</p>
          </button>
          <ol
            className={`${isOpen ? "block" : "hidden"} space-y-2 p-4 text-sm text-gray-500 dark:text-gray-400 `}
          >
            {contributions.map((contribution, index) => (
              <li className="list-item list-disc" key={index}>
                {contribution}
              </li>
            ))}
          </ol>
        </div>
      </CardContent>
    </Card>
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
function DownArrowIcon({ ...props }) {
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
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
