"use client";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";

export default function Dashboard() {
  const { address, isConnected } = useAccount();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [isConnected, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  if (!isConnected) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Animated background */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,219,226,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,119,198,0.08),transparent_50%)]"></div>
      </div>

      <Header />
      <main className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 px-6 py-8">
            <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
            <div className="space-y-4">
              <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700">
                <h2 className="text-sm font-medium text-gray-300 mb-2">Your Wallet Address</h2>
                <p className="text-lg font-mono text-gray-100 break-all">
                  {address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 