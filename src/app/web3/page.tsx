"use client";
import { ConnectButton } from "./../../components/ui/connectButton";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { CardContent, Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import Image from "next/image";

import { AddressInput } from "~/components/ui/addressInput";
import { useReadContract } from "wagmi";
import { erc721Abi } from "viem";

export function truncateAddress(address: string, length = 8) {
  return `${address.slice(0, length)}...${address.slice(-length)}`;
}

export default function Component() {
  const NFTURI = useReadContract({
    address: "0x42069ABFE407C60cf4ae4112bEDEaD391dBa1cdB",
    abi: erc721Abi,
    functionName: "tokenURI",
    args: [BigInt(730)],
  });

  return (
    <>
      <main className="flex-1">
        <section
          className="bg-gradient-to-r from-black to-[#ffd700] py-20 text-white"
          id="hero"
        >
          <div className="container mx-auto grid max-w-3xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Web3 Frontend Showcase
              </h1>
              <p className="text-lg">
                Browse web3 features implemented by Joe in this frontend from
                connecting a wallet to minting NFTs and more.
              </p>
              <div className="flex gap-4">
                <ConnectButton />
                <Button size="lg" variant="outline" className="text-black">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                alt="Hero"
                className="rounded-xl object-cover"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width="400"
              />
            </div>
          </div>
        </section>
        <section className="py-20" id="nft">
          <div className="container mx-auto grid max-w-3xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Display and Mint NFTs
              </h2>
              <p>
                Showcase your ability to interact with NFTs by displaying an NFT
                and providing functionality to mint a new one.
              </p>
              <div className="flex gap-4">
                <Button size="lg">
                  <NfcIcon className="mr-2 h-4 w-4" />
                  Display NFT
                </Button>
                <Button size="lg" variant="outline" className="text-black">
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Mint NFT
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                  <Image
                    alt="NFT"
                    className="rounded-xl"
                    height="300"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/300",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-semibold">Cosmic Traveler</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Unique NFT artwork
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-20 dark:bg-gray-800" id="ethereum">
          <div className="container mx-auto grid max-w-3xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12">
            <div className="flex justify-center">
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                  <BitcoinIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-semibold">Send Ethereum</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Transfer Ethereum to any address. ENS support included.{" "}
                      <br />
                      Send some ETH to hone1er.eth!
                    </p>
                  </div>
                  <form className="w-full space-y-4">
                    <AddressInput
                      onRecipientChange={(address) => console.log(address)}
                      className="w-full"
                      placeholder="Recipient address"
                      type="text"
                    />
                    <Input
                      className="w-full"
                      placeholder="Amount (ETH)"
                      type="text"
                    />
                    <Button
                      className="w-full"
                      onClick={(e) => e.preventDefault()}
                    >
                      Send
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4 text-gray-700">
              <h2 className="text-3xl font-bold tracking-tight">
                Transfer Ethereum Securely
              </h2>
              <p>
                Showcase your ability to handle Ethereum transactions by
                providing a simple and secure way to send Ether to any address.
              </p>
              <div className="flex gap-4">
                <ConnectButton />
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20" id="about">
          <div className="container mx-auto grid max-w-3xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12">
            <div className="flex justify-center">
              <Image
                alt="Developer"
                className="rounded-full"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width="300"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                About the Developer
              </h2>
              <p>
                I&apos;m a passionate frontend developer with a keen eye for
                design and a deep understanding of modern web technologies.
                I&apos;m excited to showcase my skills in building interactive
                and visually appealing user interfaces.
              </p>
              <div className="flex gap-4">
                <Button size="lg">
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button size="lg" variant="outline" className="text-black">
                  <TwitterIcon className="mr-2 h-4 w-4" />
                  Twitter
                </Button>
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

function BitcoinIcon({ ...props }) {
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
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  );
}

function CodeIcon({ ...props }) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
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

function MenuIcon({ ...props }) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function NfcIcon({ ...props }) {
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
      <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
      <path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" />
      <path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
      <path d="M16.37 2a20.16 20.16 0 0 1 0 20" />
    </svg>
  );
}

function PlusIcon({ ...props }) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
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
