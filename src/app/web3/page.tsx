import { SIWE } from "./../../components/ui/SIWESection";
import { MintNFTButton } from "./../../components/ui/mintNFT";
import { ConnectButton } from "./../../components/ui/connectButton";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import { SendETH } from "~/components/ui/sendETH";
import { Card, CardContent } from "~/components/ui/card";
import { PropsWithChildren } from "react";
import { Separator } from "~/components/ui/separator";
import { MintCard } from "../../components/ui/mintCard";
import { LensProfileCardSection } from "~/components/ui/lensProfile";

export default function Component() {
  return (
    <>
      <main className="flex-1">
        <section
          className="bg-gradient-to-r from-black to-[#ffd700] py-20 text-white"
          id="hero"
        >
          <div className="container mx-auto grid max-w-3xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <h1 className=" text-4xl font-bold tracking-tight  sm:text-5xl">
                Swaggy lil&apos; Web3 Demo
              </h1>
              <p className="text-lg">
                Peep the skills I have in building Web3 applications by testing
                out some features I threw together.
              </p>
              <div className="flex gap-4">
                <ConnectButton />
                <a href="https://ethereum.org/en/web3/" target="_blank">
                  <Button size="lg" variant="outline" className="text-black">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center"></div>
          </div>
        </section>
        <SIWE />
        <MintCard>
          <MintNFTButton />
        </MintCard>
        <SendETHServer>
          <SendETH />
        </SendETHServer>
        <Separator className="py-1" />

        <Separator className="py-1" />

        <LensProfileCardSection />
        <section className="bg-gray-50 py-20" id="about">
          <div className="container mx-auto grid max-w-3xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-700">
                About the Developer
              </h2>
              <p className="space-y-4 text-gray-700">
                A dude who loves to code and build cool stuff. <br />
                <br />
                Love the freedom that crypto and web3 represents and the
                possibilities it brings.
                <br />
                <br />
                If you have any questions or just want to chat, feel free to
                reach out!
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/joe-villavicencio-523a6b179/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="lg">
                    <LinkedinIcon className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
                <a
                  href="https://www.x.com/hone1er/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="lg" variant="outline" className="text-black">
                    <TwitterIcon className="mr-2 h-4 w-4" />
                    Twitter
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-6 text-white">
        <div className="container mx-auto flex items-center justify-between px-4">
          <p className="text-sm">
            © 2024 Frontend Showcase. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            <Link
              className="text-sm underline-offset-4 hover:underline"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="text-sm underline-offset-4 hover:underline"
              href="#"
            >
              Terms
            </Link>
            <Link
              className="text-sm underline-offset-4 hover:underline"
              href="#"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}

function LinkedinIcon({ ...props }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ ...props }) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function SendETHServer({ children }: PropsWithChildren) {
  return (
    <section className="bg-gray-100 py-20 dark:bg-gray-800" id="ethereum">
      <div className="container mx-auto grid max-w-3xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12">
        <div className="flex justify-center">
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
              <Image
                alt="Ethereum"
                height="300"
                src="/images/ethereum.png"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "contain",
                }}
                width="300"
                className="h-12 w-12 text-gray-900 dark:text-gray-50"
              />
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-semibold">Send Ethereum</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Transfer Ethereum to any address. ENS support included. <br />
                  Send some ETH to hone1er.eth!
                </p>
              </div>
              {children}
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold tracking-tight">
            Transfer Ethereum Securely
          </h2>
          <p>
            Show me the money! Sending money should be easy and secure. With
            Web3, you can send Ethereum to any address with just a few clicks.
          </p>
          <div className="flex gap-4">
            <ConnectButton />
            <a
              href="https://ethereum.org/en/developers/docs/intro-to-ether/#transferring-ether"
              target="_blank"
            >
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
