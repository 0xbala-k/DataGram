"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import Link from "next/link";

type Bug = {
  id: string;
  title: string;
  description: string;
  tags: {
    language: string;
    difficulty: string;
    custom: string[];
  };
};

const mockBugs: Bug[] = [
  {
    id: "1",
    title: "React crashes when using forwardRef in modal",
    description: "The app crashes when opening a modal with forwardRef on older Chrome versions.",
    tags: {
      language: "JavaScript",
      difficulty: "Medium",
      custom: ["React", "Modal", "forwardRef"],
    },
  },
  {
    id: "2",
    title: "Next.js route not refreshing after navigation",
    description: "Using useRouter().push doesn't trigger a full refresh, causing stale state.",
    tags: {
      language: "TypeScript",
      difficulty: "Hard",
      custom: ["Next.js", "Router", "State"],
    },
  },
  {
    id: "3",
    title: "CSS variables not applying in Tailwind with dark mode",
    description: "Tailwind custom properties are ignored when using dark mode toggle.",
    tags: {
      language: "CSS",
      difficulty: "Easy",
      custom: ["TailwindCSS", "Dark Mode", "Theming"],
    },
  },
];

export default function SolveBugPage() {
  const [bugs] = useState<Bug[]>(mockBugs);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 px-6 py-8">
            <h1 className="text-2xl font-bold text-white mb-6">🛠️ Open Bugs (Solve & Discuss)</h1>

            <ul className="divide-y divide-gray-800">
              {bugs.map((bug) => (
                <li key={bug.id} className="py-4">
                  <Link href={`/solve-bug/${bug.id}`}>
                    <div className="cursor-pointer hover:bg-gray-800/60 p-4 rounded-lg transition">
                      <h2 className="text-lg font-semibold text-white">{bug.title}</h2>
                      <p className="text-gray-400 text-sm mb-2">{bug.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 text-xs bg-blue-700 text-white rounded-md">
                          {bug.tags.language}
                        </span>
                        <span className="px-2 py-1 text-xs bg-purple-700 text-white rounded-md">
                          {bug.tags.difficulty}
                        </span>
                        {bug.tags.custom.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs bg-gray-700 text-gray-200 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
