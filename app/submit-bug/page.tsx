"use client";

import Link from "next/link";
import { useState } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";

export default function SubmitBug() {
  const { isConnected, address } = useAccount();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    environment: "",
    steps: "",
    logs: "",
    fix: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) return;
    
    const response = await fetch("/api/submit-bug", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, submittedBy: address }),
    });

    if (response.ok) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 px-6 py-8">
            <h1 className="text-2xl font-bold text-white mb-6">Submit a Bug Report</h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {["title", "environment", "steps", "logs", "fix"].map((field) => (
                <div key={field}>
                  <label className="block text-sm text-gray-300 capitalize">{field}</label>
                  <input
                    type="text"
                    name={field}
                    onChange={handleChange}
                    value={formData[field as keyof typeof formData]}
                    className="mt-1 w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-3 py-2"
                    required={field !== "fix"}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm text-gray-300">Description</label>
                <textarea
                  name="description"
                  rows={4}
                  onChange={handleChange}
                  value={formData.description}
                  className="mt-1 w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-3 py-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-2 rounded-xl font-semibold"
              >
                Submit Bug
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
