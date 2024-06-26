import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import { Web3Provider } from "~/context/web3";
import { Toaster } from "~/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Joe V. - Software Engineer",
  description:
    "Joe V. is a software engineer specializing in web development and blockchain technologies.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} scrollbar scroll-smooth transition-transform duration-500`}
    >
      <body>
        <div className="flex min-h-[100dvh] flex-col bg-[#1e1e1e] text-white">
          <header className="flex h-14 items-center justify-between px-4 lg:px-6">
            <Link className="flex items-center gap-2" href="/">
              <GamepadIcon className="h-6 w-6 text-[#ffd700]" />
              <span className="text-2xl font-bold">Joe V.</span>
            </Link>
            <nav className="hidden gap-4 lg:flex">
              <Link
                className="text-sm font-medium hover:text-[#ffd700]"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-sm font-medium hover:text-[#ffd700]"
                href="/web3"
              >
                Web3
              </Link>
              <Link
                className="text-sm font-medium hover:text-[#ffd700]"
                href="/open-source"
              >
                Open Source
              </Link>
            </nav>
          </header>
          <Web3Provider>{children}</Web3Provider>
          <Toaster />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
function GamepadIcon({ ...props }) {
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
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}
