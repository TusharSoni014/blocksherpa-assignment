import React, { useEffect } from "react";
import { toast } from "sonner";
import { useChainModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useSwitchChain } from "wagmi";
import { targetChain } from "../../config/wagmi";

const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 cursor-pointer bg-[#D4755B] text-white font-manrope font-bold px-6 py-2 rounded-lg hover:bg-[#B86851] transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#D4755B] disabled:hover:shadow-none";

const outlineButtonClass =
  "inline-flex items-center justify-center gap-2 cursor-pointer bg-white text-[#D4755B] font-manrope font-bold px-6 py-2 rounded-lg border border-[#D4755B] hover:bg-[#B86851] hover:border-[#B86851] hover:text-white transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#D4755B] disabled:hover:border-[#D4755B] disabled:hover:shadow-none";

function truncateAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function getWalletErrorMessage(error: unknown): string {
  const err = error as {
    code?: number;
    name?: string;
    message?: string;
    shortMessage?: string;
  };
  const message = err?.shortMessage || err?.message || "";

  if (
    err?.code === 4001 ||
    err?.name === "UserRejectedRequestError" ||
    /rejected|denied/i.test(message)
  ) {
    return "Request was rejected in your wallet.";
  }
  if (/provider not found|no injected|connector not found/i.test(message)) {
    return "No wallet found. Install MetaMask or another wallet to continue.";
  }
  return message || "Something went wrong. Please try again.";
}

const ConnectWalletButton: React.FC = () => {
  const { address, isConnected, isConnecting, isReconnecting, chainId } =
    useAccount();
  const { openConnectModal } = useConnectModal();
  const { openChainModal } = useChainModal();
  const { disconnect, isPending: isDisconnecting } = useDisconnect();
  const { switchChain, isPending: isSwitching } = useSwitchChain();

  const isBusy = isConnecting || isReconnecting || isDisconnecting || isSwitching;
  const isOnTargetChain = chainId === targetChain.id;

  useEffect(() => {
    if (isConnected && !isOnTargetChain) {
      openChainModal?.();
    }
  }, [isConnected, isOnTargetChain, openChainModal]);

  const handleConnect = () => {
    if (!openConnectModal) {
      toast.error("Wallet unavailable", {
        description:
          "No wallet found. Install MetaMask or another wallet to continue.",
      });
      return;
    }
    openConnectModal();
  };

  const handleDisconnect = () => {
    disconnect(undefined, {
      onError: (error) => {
        toast.error("Disconnect failed", {
          description: getWalletErrorMessage(error),
        });
      },
    });
  };

  const handleSwitchNetwork = () => {
    switchChain(
      { chainId: targetChain.id },
      {
        onError: (error) => {
          toast.error("Could not switch network", {
            description: getWalletErrorMessage(error),
          });
        },
      },
    );
  };

  if (!isConnected || !address) {
    return (
      <button
        type="button"
        onClick={handleConnect}
        disabled={isBusy}
        className={`${primaryButtonClass} w-full sm:w-auto`}
      >
        {isBusy ? (
          <>
            <span className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Connecting...
          </>
        ) : (
          "Connect Wallet"
        )}
      </button>
    );
  }

  return (
    <div className="w-full sm:w-auto flex flex-col items-end gap-2">
      <p className="font-space-mono text-sm text-[#0F172A]">
        {truncateAddress(address)}
      </p>
      {isOnTargetChain ? (
        <p className="font-manrope text-xs text-[#4A6356]">Polygon Amoy</p>
      ) : (
        <button
          type="button"
          onClick={handleSwitchNetwork}
          disabled={isBusy}
          className={`${primaryButtonClass} w-full sm:w-auto`}
        >
          {isSwitching ? "Switching..." : "Switch to Amoy"}
        </button>
      )}
      <button
        type="button"
        onClick={handleDisconnect}
        disabled={isBusy}
        className={`${outlineButtonClass} w-full sm:w-auto`}
      >
        {isDisconnecting ? "Disconnecting..." : "Disconnect"}
      </button>
    </div>
  );
};

export default ConnectWalletButton;
