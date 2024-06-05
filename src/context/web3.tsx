"use client";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { State, WagmiProvider, createConfig, http } from "wagmi";
import {
  arbitrum,
  base,
  baseSepolia,
  mainnet,
  polygon,
  polygonAmoy,
} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { coinbaseWallet, injected, metaMask } from "wagmi/connectors";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { LensProvider } from "@lens-protocol/react-web";
import { LensConfig, production, development } from "@lens-protocol/react-web";
import { bindings } from "@lens-protocol/wagmi";

interface Props extends PropsWithChildren {
  initialState?: State;
  session?: Session;
}
// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "";

// 2. Create wagmiConfig
const metadata = {
  name: "Honefolio",
  description: "Joe Villavicensio's portfolio",
  url: "https://honefolio.vercel.app", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [
  baseSepolia,
  base,
  polygon,
  polygonAmoy,
  mainnet,
  arbitrum,
] as const;
// const config = defaultWagmiConfig({
//   chains,
//   projectId: projectId,
//   metadata,
//   ssr: true,
// });
const config = createConfig({
  chains,

  connectors: [
    coinbaseWallet({
      appName: "Honefolio",
      chainId: baseSepolia.id,
      preference: "smartWalletOnly",
    }),
    injected(),
    metaMask(),
  ],
  ssr: true,
  transports: {
    [polygon.id]: http(),
    [polygonAmoy.id]: http(),
    [baseSepolia.id]: http(),
    [base.id]: http(),
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
  },
});

let lensConfig: LensConfig;
if (process.env.NODE_ENV === "development") {
  lensConfig = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment , @typescript-eslint/no-unsafe-call
    bindings: bindings(config),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    environment: production,
  };
} else {
  lensConfig = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment , @typescript-eslint/no-unsafe-call
    bindings: bindings(config),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    environment: production,
  };
}

// 3. Create modal
createWeb3Modal({
  metadata,
  projectId,
  wagmiConfig: config,
  enableAnalytics: false, // Optional - defaults to your Cloud configuration
  enableOnramp: true,
});

export function Web3Provider({ initialState, session, children }: Props) {
  return (
    <SessionProvider session={session}>
      <WagmiProvider initialState={initialState} config={config}>
        <QueryClientProvider client={queryClient}>
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment  */}
          <LensProvider config={lensConfig}>{children}</LensProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </SessionProvider>
  );
}
