import { http, createConfig } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";
 
export const cbWalletConnector = coinbaseWallet({
  appName: "DataGram",
  preference: "all",
});
 
export const config = createConfig({
  chains: [baseSepolia],
  // turn off injected provider discovery
  multiInjectedProviderDiscovery: false,
  connectors: [cbWalletConnector],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});
 
declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}