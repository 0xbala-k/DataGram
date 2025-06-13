"use client";

import Link from "next/link";
import { ArrowRight, Brain, DollarSign, Globe, Shield, TrendingUp, Users, Zap, Sparkles, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConnectAndSIWE } from '../components/ConnectAndSIWE'
import { useRouter } from "next/navigation"

export default function LandingPage() {
  const router = useRouter();

  const handleStartContributing = () => {
    const connectButton = document.querySelector('[data-connect-button]');
    if (connectButton instanceof HTMLElement) {
      connectButton.click();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated background */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,219,226,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,119,198,0.08),transparent_50%)]"></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-gray-800 bg-black/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
              <Database className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              DataGram
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
          <Link href="/submit-bug" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Submit Bug
          </Link>
          <Link href="/solve-bug" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Solve Bug
          </Link>
          <Link href="/ask" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Ask AI
          </Link>
            <a href="#how-it-works" className="text-gray-300 hover:text-cyan-400 transition-colors">
              How it Works
            </a>
            <a href="#use-cases" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Use Cases
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Pricing
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <ConnectAndSIWE />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <Badge className="mb-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 border-cyan-500/20 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Composable Data Infrastructure for LLM Agents
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Monetized RAG Platform for{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Agents
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Instantly access and monetize high-quality, user-contributed datasets. Pay-per-query RAGs, transparent revenue sharing, and agent-native APIs for the next generation of LLM-powered applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={handleStartContributing}
              className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg shadow-cyan-500/25"
            >
              Start Contributing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-gray-700 text-white bg-gray-900/50 hover:bg-gray-800/90 hover:border-gray-600 hover:text-white transition-colors"
            >
              Access Data API
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gray-900/60 backdrop-blur-sm border border-gray-800">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                $0.005
              </div>
              <div className="text-gray-400">Per data access (pay-per-query)</div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900/60 backdrop-blur-sm border border-gray-800">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                Revenue
              </div>
              <div className="text-gray-400">Contributors earn per data usage</div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900/60 backdrop-blur-sm border border-gray-800">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-400">Transparent earnings & dashboards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="relative py-24 bg-gray-950/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white mb-8">The Data Bottleneck for AI Agents</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-400 text-sm">✕</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">High-Quality Data is Locked</h3>
                    <p className="text-gray-300">Specialized, up-to-date datasets are not openly available for LLM agents.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-400 text-sm">✕</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">No Incentive to Share</h3>
                    <p className="text-gray-300">Data creators lack a native, transparent way to earn from their contributions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-400 text-sm">✕</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">Static or Overpriced APIs</h3>
                    <p className="text-gray-300">Current data APIs are inflexible, expensive, and not built for agent-native workflows.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-400 text-sm">✕</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">No Revenue Sharing Loop</h3>
                    <p className="text-gray-300">No automatic, transparent revenue split between data creators and consumers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white mb-8">Our Composable RAG Solution</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">Composable Data Infrastructure</h3>
                    <p className="text-gray-300">Upload, tag, and index structured datasets for agent-native retrieval and plug-and-play RAG workflows.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">Pay-per-Query, Transparent Revenue</h3>
                    <p className="text-gray-300">AI agents pay per query; revenue is automatically split among contributors whose data is used.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">Agent-Native APIs</h3>
                    <p className="text-gray-300">Built for LLMs and AI agents to access, pay, and analyze data autonomously.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">Real-Time Dashboards</h3>
                    <p className="text-gray-300">Contributors see usage, earnings, and can withdraw funds instantly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Monetized RAG Platform: Pay-per-Query, Revenue-Sharing, and Composable Data for AI Agents</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            See how our composable, decentralized platform connects data contributors with AI agents through secure, transparent micro-transactions and a plug-and-play RAG interface.
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-gray-900/40 backdrop-blur-sm border border-gray-800">
              <img
                src="https://ik.imagekit.io/j3ek4z0iqu/Screenshot%202025-06-12%20at%206.24.16%E2%80%AFPM.png?updatedAt=1749777866301"
                alt="Platform Architecture Diagram showing the flow between Market Research Agents, RAGs processing system, Product Reviews, Tagging & Indexing, Dashboard, and Users with payment flows"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-24 bg-gray-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A simple four-step process that benefits both data contributors and AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/25">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-white text-xl">1. Contribute Data</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base mb-6">
                  Upload structured or semi-structured datasets (CSV, JSON, logs, etc.). Tag your data for discoverability and revenue attribution.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
                  <Database className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-white text-xl">2. Tag & Index</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base mb-6">
                  Data is normalized, tagged, and indexed for high-quality retrieval. Supports both semantic (vector) and keyword search.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-white text-xl">3. Query & Pay</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base mb-6">
                  AI agents query the platform via RAG APIs. Each query incurs a micro-payment, split among contributors whose data is used.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/25">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-white text-xl">4. Earn & Analyze</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base mb-6">
                  Contributors receive real-time stats and payouts based on data usage. Dashboards show reads, earnings, and top tags.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">Who Uses DataGram</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From legal research to fintech, our platform powers agent-native data access for a wide range of LLM applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Legal LLM</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Retrieve jurisdiction-specific case records for legal research and compliance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Fintech AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Access up-to-date token metrics and financial data from user-contributed sources.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Academic Research Bots</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Query climate data, user experiments, and scientific datasets for research.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">HR Tech AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Summarize anonymized employee surveys and workplace feedback.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Product UX LLM</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Analyze issue logs and support tickets to improve product experience.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="relative py-24 bg-gray-950/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Why This Works</h2>
          <div className="grid md:grid-cols-4 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-cyan-400 mb-2">Composable</h3>
              <p className="text-gray-300">Plug-and-play RAG APIs and open data architecture.</p>
            </div>
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Sustainable</h3>
              <p className="text-gray-300">Contributors earn directly from data usage—no ads or subscriptions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-400 mb-2">Agent-Native</h3>
              <p className="text-gray-300">Built for LLMs and AI agents to query and pay autonomously.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Transparent</h3>
              <p className="text-gray-300">Real-time dashboards show contributors their data's impact and earnings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-cyan-600/10 via-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-8">Ready to Join the Agent-Native Data Marketplace?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Earn from your data or empower your AI agents with real-time, composable datasets. Join a transparent, sustainable ecosystem for LLM-powered applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              onClick={handleStartContributing}
              className="text-lg px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg shadow-cyan-500/25"
            >
              Start Earning from Your Data
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-4 border-2 border-gray-700 text-white bg-gray-900/50 hover:bg-gray-800/90 hover:border-gray-600 hover:text-white transition-colors"
            >
              Access Agent Data API
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                  <Database className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  DataGram
                </span>
              </div>
              <p className="text-gray-400">
                Monetized RAG platform connecting contributors with AI agents.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Platform</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DataGram. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
