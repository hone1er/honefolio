"use client";
import { MintNFTButton } from "./../../components/ui/mintNFT";
import { ConnectButton } from "./../../components/ui/connectButton";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import { SendETH } from "~/components/ui/sendETH";
import { BlackCreateWalletButton } from "~/components/ui/createWallet";
import { MintServer, SendETHServer, LinkedinIcon, TwitterIcon } from "./page";

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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Swaggy lil&apos; Web3 Demo
              </h1>
              <p className="text-lg">
                Peep the skills I have in building Web3 applications by testing
                out some features i threw together.
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
        <MintServer>
          <MintNFTButton />
        </MintServer>
        <SendETHServer>
          <SendETH />
        </SendETHServer>
        <section className="py-20" id="nft">
          <div className="container mx-auto grid max-w-3xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12">
            <div className="flex justify-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  Coinbase Smart Wallet
                </h2>
                <p className="text-lg">
                  Coinbase Wallet SDK allows you to create a wallet with just a
                  few clicks. <br />
                  <br />
                  Simplifying the process of creating a wallet and managing keys
                  securely using Passkeys stored on the users&apos; device.
                  <br />
                  <br />
                  <strong>Try it out!</strong>
                </p>
                <div className="flex items-baseline gap-4">
                  <BlackCreateWalletButton />

                  <a href="https://www.smartwallet.dev/why" target="_blank">
                    <Button size="lg" variant="outline" className="text-black">
                      Learn More
                    </Button>
                  </a>
                </div>
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
                src="/images/computerPep.jpeg"
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
