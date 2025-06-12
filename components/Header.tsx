"use client";

import Link from "next/link"
import { useAccount, useDisconnect } from "wagmi";
import { useRouter } from "next/navigation";
import { Database } from "lucide-react";

export function Header() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const router = useRouter();

  const handleSignOut = () => {
    disconnect();
    router.push("/");
  };

  return (
    <header className="relative border-b border-gray-800 bg-black/90 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
              <Database className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              DataGram
            </span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-300">
            {address && (
              <span className="font-mono">
                {address.slice(0, 6)}...{address.slice(-4)}
              </span>
            )}
          </div>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
} 