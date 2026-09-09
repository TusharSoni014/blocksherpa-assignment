import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { mainnet, polygonAmoy } from 'wagmi/chains';

export const targetChain = polygonAmoy;

export const wagmiConfig = getDefaultConfig({
  appName: 'REChain',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID?.trim() ?? '',
  chains: [polygonAmoy, mainnet],
  transports: {
    [polygonAmoy.id]: http(),
    [mainnet.id]: http(),
  },
  ssr: false,
});

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig;
  }
}
