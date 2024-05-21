import { LensConfig, production, development } from "@lens-protocol/react-web";
import { bindings } from "@lens-protocol/wagmi";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";

export let lensConfig: LensConfig;
if (process.env.NODE_ENV === "development") {
  lensConfig = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    bindings: wagmiBindings(wagmiConfig),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    environment: development,
  };
} else {
  lensConfig = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    bindings: bindings(wagmiConfig),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    environment: production,
  };
}
