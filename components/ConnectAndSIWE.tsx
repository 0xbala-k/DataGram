"use client";

import { useCallback, useEffect, useState } from "react";
import type { Hex } from "viem";
import { useAccount, useConnect, usePublicClient, useSignMessage } from "wagmi";
import { SiweMessage } from "siwe";
import { cbWalletConnector } from "@/wagmi";
import { useRouter } from "next/navigation";

export function ConnectAndSIWE() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { connect } = useConnect({
    mutation: {
      onSuccess: (data) => {
        const address = data.accounts[0];
        const chainId = data.chainId;
        const m = new SiweMessage({
          domain: document.location.host,
          address,
          chainId,
          uri: document.location.origin,
          version: "1",
          statement: "Smart Wallet SIWE Example",
          nonce: "12345678",
        });
        setMessage(m);
        signMessage({ message: m.prepareMessage() });
      },
    },
  });
  const account = useAccount();
  const client = usePublicClient();
  const [signature, setSignature] = useState<Hex | undefined>(undefined);
  const { signMessage } = useSignMessage({
    mutation: { onSuccess: (sig) => setSignature(sig) },
  });
  const [message, setMessage] = useState<SiweMessage | undefined>(undefined);
  const [valid, setValid] = useState<boolean | undefined>(undefined);
 
  const checkValid = useCallback(async () => {
    if (!signature || !account.address || !client || !message || isRedirecting) return;
 
    try {
      const isValid = await client.verifyMessage({
        address: account.address,
        message: message.prepareMessage(),
        signature,
      });
      
      setValid(isValid);
      
      if (isValid && !isRedirecting) {
        setIsRedirecting(true);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error verifying message:", error);
      setValid(false);
    }
  }, [signature, account, client, message, router, isRedirecting]);
 
  useEffect(() => {
    if (signature && account.address && !isRedirecting) {
      checkValid();
    }
  }, [signature, account.address, checkValid, isRedirecting]);
 
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <button
        onClick={() => connect({ connector: cbWalletConnector })}
        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
      >
        Sign In
      </button>
    </div>
  );
}