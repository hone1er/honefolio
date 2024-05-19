import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <>
      <main className="flex-1 scroll-smooth transition-all duration-500">
        <section className=" w-full bg-[#2d2d2d] py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-4">
              <h1 className="text-left text-4xl font-bold tracking-tighter sm:text-center sm:text-5xl md:text-6xl">
                Full-Stack Developer
              </h1>
              <p className="max-w-[420px] text-left text-gray-300 md:text-xl">
                Good vibes and great code. I build beautiful, responsive, and
                performant web applications. Let&apos;s build.
              </p>
            </div>
            <div className="plase grid w-full max-w-[400px] grid-cols-2 gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#ffd700] px-4 text-sm font-medium text-[#1e1e1e] shadow transition-colors hover:bg-[#ffb700] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50"
                href="#portfolio"
              >
                View Portfolio
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#ffd700] bg-transparent px-4 text-sm font-medium text-[#ffd700] shadow-sm transition-colors hover:bg-[#ffd700] hover:text-[#1e1e1e] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50"
                href="mailto:honeoner@gmail.com?subject=Hiring Inquiry"
              >
                Hire Me
              </Link>
            </div>
          </div>
          <div className="container grid items-center justify-center gap-4 px-4 pt-24 text-center md:px-6 lg:gap-10">
            <div className="grid w-full grid-cols-2 items-center justify-center gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-12 xl:grid-cols-6">
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Next.js"
                  className="h-12 w-12"
                  height={48}
                  src="/images/nextjs.svg"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "contain",
                  }}
                  width={48}
                />
                <div className="text-sm font-medium">Next.js</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  React framework for building server-rendered applications.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="TypeScript"
                  className="h-12 w-12"
                  height={48}
                  src="/images/ts-logo-round-512.png"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "contain",
                  }}
                  width={48}
                />
                <div className="text-sm font-medium">TypeScript</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Superset of JavaScript that adds optional static typing.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="React"
                  className="h-12 w-12"
                  height={48}
                  src="/images/react-logo.svg"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "contain",
                  }}
                  width={48}
                />
                <div className="text-sm font-medium">React</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  JavaScript library for building user interfaces.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Python"
                  className="h-12 w-12"
                  height={48}
                  src="/images/python-logo-only.png"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "contain",
                  }}
                  width={48}
                />
                <div className="text-sm font-medium">Python</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  High-level programming language for general-purpose
                  development.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Solidity"
                  className="h-12 w-12"
                  height={48}
                  src="/images/solidity_logo.svg"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "contain",
                  }}
                  width={48}
                />
                <div className="text-sm font-medium">Solidity</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Contract-oriented, high-level language for implementing smart
                  contracts.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="Tailwind CSS"
                  className="h-12 w-12"
                  height={48}
                  src="/images/tailwind-logo.svg"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "contain",
                  }}
                  width={48}
                />
                <div className="text-sm font-medium">Tailwind CSS</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Utility-first CSS framework for rapidly building custom
                  designs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full bg-[#1e1e1e] py-24 md:py-24 lg:py-32"
          id="portfolio"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="relative flex flex-col justify-center space-y-4 sm:bottom-10">
                <div className="relative bottom-10 space-y-2">
                  <div className="inline-block rounded-lg bg-[#2d2d2d] px-3 py-1 text-sm">
                    Featured Projects
                  </div>
                  <h2 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Pixel-Perfect Creations
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    I build beautiful, responsive, and performant web
                    applications.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#ffd700] px-4 text-sm font-medium text-[#1e1e1e] shadow transition-colors hover:bg-[#ffb700] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50"
                    href="/web3"
                  >
                    Web3 Demo
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#ffd700] bg-transparent px-4 text-sm font-medium text-[#ffd700] shadow-sm transition-colors hover:bg-[#ffd700] hover:text-[#1e1e1e] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50"
                    href="https://github.com/hone1er"
                  >
                    <GithubIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </div>
              </div>
              <div className="flex w-full flex-col gap-8">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href={"/freelance"}
                    className="relative overflow-hidden rounded-lg bg-[#333333] p-6 pt-0 transition-transform duration-500 hover:scale-105"
                  >
                    <Image
                      alt="Ziti Studio"
                      className="h-full w-full object-cover"
                      height="300"
                      src="/images/ziti.png"
                      style={{
                        aspectRatio: "300/300",
                        objectFit: "contain",
                      }}
                      width="300"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1e1e1e]/80 to-transparent p-4">
                      <div className="text-sm font-medium">Freelance</div>
                    </div>
                  </Link>
                  <Link
                    href={"/individual-contributions"}
                    className="relative overflow-hidden rounded-lg bg-[#333333] p-6 pt-0 transition-transform duration-500 hover:scale-105"
                  >
                    <Image
                      alt="Drippi"
                      className="h-full w-full object-cover  "
                      height="300"
                      src="/images/drippiMobile.png"
                      style={{
                        aspectRatio: "300/300",
                        objectFit: "contain",
                      }}
                      width="300"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1e1e1e]/80 to-transparent p-4">
                      <div className="text-sm font-medium">
                        Individual contributor
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={"/personal-projects"}
                    className="relative overflow-hidden rounded-lg bg-[#333333] p-6 pt-0 transition-transform duration-500 hover:scale-105"
                  >
                    <Image
                      alt="CareMatey"
                      className="h-full w-full object-cover"
                      height="300"
                      src="/images/carematey.png"
                      style={{
                        aspectRatio: "300/300",
                        objectFit: "contain",
                      }}
                      width="300"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1e1e1e]/80 to-transparent p-4">
                      <div className="text-sm font-medium">Personal</div>
                    </div>
                  </Link>
                  <Link
                    href={"/open-source"}
                    className="relative overflow-hidden rounded-lg bg-[#333333] p-6 pt-0 transition-transform duration-500 hover:scale-105"
                  >
                    <Image
                      alt="Open Source"
                      className="h-full w-full object-cover"
                      height="300"
                      src="/images/open.jpeg"
                      style={{
                        aspectRatio: "300/300",
                        objectFit: "contain",
                      }}
                      width="300"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1e1e1e]/80 to-transparent p-4">
                      <div className="text-sm font-medium">Open-source</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="w-full bg-[#2d2d2d] text-white py-12 md:py-24 lg:py-32"> 
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#1e1e1e] px-3 py-1 text-sm">
                    web3
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Crypto & Web3 Development
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    I build decentralized applications and contribute to the
                    blockchain ecosystem. Click the button below to try out a demo!
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#ffd700] px-4 text-sm font-medium text-[#1e1e1e] shadow transition-colors hover:bg-[#ffb700] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50"
                    href="/web3"
                  >
                   Demo
                  </Link>
                 
                </div>
              </div>
              </div>
              </div>
          </section> */}
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-[#2d2d2d] px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-400">
          © 2024 Joe V.. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs hover:text-[#ffd700]" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-[#ffd700]" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </>
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
