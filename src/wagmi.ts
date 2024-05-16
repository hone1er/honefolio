import { http, createConfig } from "wagmi";
import { arbitrum, baseSepolia, mainnet } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";

export const config = createConfig({
  chains: [baseSepolia, arbitrum, mainnet],
  connectors: [
    coinbaseWallet({
      appName: "Honefolio",
      chainId: baseSepolia.id,
    }),
  ],
  transports: {
    [baseSepolia.id]: http(),
    [arbitrum.id]: http(),
    [mainnet.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
