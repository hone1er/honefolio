/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mlp32NDwYxr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <>
      <main className="flex-1 ">
        <section className=" w-full bg-[#2d2d2d] py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto  flex flex-col items-center px-4 text-center md:px-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Full-Stack Developer
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                Crafting pixel-perfect web experiences with a retro twist.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#ffd700] px-8 text-sm font-medium text-[#1e1e1e] shadow transition-colors hover:bg-[#ffb700] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                View Portfolio
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#ffd700] bg-transparent px-8 text-sm font-medium text-[#ffd700] shadow-sm transition-colors hover:bg-[#ffd700] hover:text-[#1e1e1e] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#1e1e1e] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#2d2d2d] px-3 py-1 text-sm">
                    Featured Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Pixel-Perfect Creations
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Explore a collection of my most recent web development
                    projects, each crafted with a retro-inspired design and
                    cutting-edge technologies.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#ffd700] px-4 text-sm font-medium text-[#1e1e1e] shadow transition-colors hover:bg-[#ffb700] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    View All
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#ffd700] bg-transparent px-4 text-sm font-medium text-[#ffd700] shadow-sm transition-colors hover:bg-[#ffd700] hover:text-[#1e1e1e] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50"
                    href="https://github.com/hone1er"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-lg bg-slate-400 p-6 pt-0">
                  <Image
                    alt="Drippi"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    height="300"
                    src="/images/drippiLaptop.png"
                    style={{
                      aspectRatio: "300/300",
                      objectFit: "contain",
                    }}
                    width="300"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1e1e1e]/80 to-transparent p-4">
                    <div className="text-sm font-medium">Drippi</div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg bg-slate-400 p-6 pt-0">
                  <Image
                    alt="Twali"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    height="300"
                    src="/images/twaliLaptop.png"
                    style={{
                      aspectRatio: "300/300",
                      objectFit: "contain",
                    }}
                    width="300"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1e1e1e]/80 to-transparent p-4">
                    <div className="text-sm font-medium">Twali</div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg bg-slate-400 p-6 pt-0">
                  <Image
                    alt="Nexth"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    height="300"
                    src="/images/twaliLaptop.png"
                    style={{
                      aspectRatio: "300/300",
                      objectFit: "contain",
                    }}
                    width="300"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1e1e1e]/80 to-transparent p-4">
                    <div className="text-sm font-medium">SkateXP</div>
                  </div>
                </div>
                <Link
                  href={"/open-source"}
                  className="relative overflow-hidden rounded-lg bg-slate-400 p-6 pt-0"
                >
                  <Image
                    alt="Alchemix"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    height="300"
                    src="/images/drippiLaptop.png"
                    style={{
                      aspectRatio: "300/300",
                      objectFit: "contain",
                    }}
                    width="300"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1e1e1e]/80 to-transparent p-4">
                    <div className="text-sm font-medium">
                      Open-source Contributions
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
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
