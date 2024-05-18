"use client";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { State, WagmiProvider, createConfig, http } from "wagmi";
import { arbitrum, base, baseSepolia, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { coinbaseWallet } from "wagmi/connectors";
interface Props extends PropsWithChildren {
  initialState?: State;
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

const chains = [baseSepolia, base, mainnet, arbitrum] as const;
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
    }),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
    [base.id]: http(),
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
  },
});

// 3. Create modal
createWeb3Modal({
  metadata,
  projectId,
  wagmiConfig: config,
  enableAnalytics: false, // Optional - defaults to your Cloud configuration
  enableOnramp: true,
});

export function Web3Provider(props: Props) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
