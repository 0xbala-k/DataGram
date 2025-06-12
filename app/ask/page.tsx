"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function AskBugQuestion() {
  const { isConnected } = useAccount();
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || !isConnected) return;

    setLoading(true);
    setResponse(null);

    const res = await fetch("/api/ask-bug", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setResponse(data.answer);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 px-6 py-8">
            <h1 className="text-2xl font-bold text-white mb-6">Ask About a Bug</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300">Describe your issue or question</label>
                <textarea
                  rows={4}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-3 py-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold"
              >
                Ask AI
              </button>
            </form>

            {loading && (
              <p className="text-sm text-gray-400 mt-4">Thinking... 🔍</p>
            )}

            {response && (
              <div className="mt-6 p-4 bg-gray-800 border border-gray-700 rounded-lg text-white">
                <h2 className="text-sm text-teal-400 font-medium mb-2">AI Response</h2>
                <p className="whitespace-pre-line text-gray-100">{response}</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
