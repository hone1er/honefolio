import { mainnet, baseSepolia, base, arbitrum } from "viem/chains";

export const scanners: Record<number, string> = {
  [mainnet.id]: "https://etherscan.org",
  [baseSepolia.id]: "https://sepolia.basescan.org",
  [base.id]: "https://basescan.org",
  [arbitrum.id]: "https://arbiscan.io",
};
