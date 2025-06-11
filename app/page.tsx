import { ArrowRight, BarChart3, Brain, DollarSign, Globe, Shield, TrendingUp, Users, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LandingPage() {
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
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              MarketRAG
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
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
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-900">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <Badge className="mb-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 border-cyan-500/20 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionizing Market Research
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Decentralized Market Research for{" "}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Agents
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Transform market research from expensive, slow, and biased to instant, affordable, and comprehensive.
            Contributors earn from their insights while AI agents access real-time consumer data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg shadow-cyan-500/25"
            >
              Start Contributing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-600"
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
              <div className="text-gray-400">Per data access</div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900/60 backdrop-blur-sm border border-gray-800">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                10x
              </div>
              <div className="text-gray-400">Faster than traditional research</div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900/60 backdrop-blur-sm border border-gray-800">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-400">Transparent earnings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="relative py-24 bg-gray-950/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white mb-8">Traditional Market Research is Broken</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-400 text-sm">✕</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">Expensive</h3>
                    <p className="text-gray-300">Analyst-driven studies cost $10K+ per research project</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-400 text-sm">✕</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">Slow</h3>
                    <p className="text-gray-300">Takes weeks to collect and analyze meaningful data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-400 text-sm">✕</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">Biased</h3>
                    <p className="text-gray-300">Limited samples, often B2B-focused with narrow demographics</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white mb-8">Our Decentralized Solution</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">Affordable</h3>
                    <p className="text-gray-300">Micro-payments per data access, starting at $0.005</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">Real-time</h3>
                    <p className="text-gray-300">Instant access to fresh consumer insights and trends</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">Diverse</h3>
                    <p className="text-gray-300">Global contributor network with varied demographics</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">Platform Architecture</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            See how our decentralized platform connects data contributors with AI agents through secure, transparent
            micro-transactions.
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-gray-900/40 backdrop-blur-sm border border-gray-800">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gkX4QgomMFSDcyvJLkBSFDbg7VRnjB.png"
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
              A simple three-step process that benefits both data contributors and AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/25">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-white text-xl">1. Contribute Data</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base mb-6">
                  Fill micro-surveys, submit product reviews, or share feedback. Data is automatically tagged and
                  indexed for easy discovery.
                </CardDescription>
                <div className="p-4 bg-gray-800/60 rounded-xl text-sm border border-gray-700">
                  <div className="text-cyan-400 font-semibold mb-2">Example:</div>
                  <div className="text-gray-300 space-y-1">
                    <div>Product: iPhone 15</div>
                    <div>Likes: Camera quality</div>
                    <div>Dislikes: Battery life</div>
                    <div>Rating: 4/5</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-white text-xl">2. AI Agents Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base mb-6">
                  AI agents query specific data sets using our API. They pay per record accessed, ensuring fair
                  compensation for contributors.
                </CardDescription>
                <div className="p-4 bg-gray-800/60 rounded-xl text-sm border border-gray-700">
                  <div className="text-green-400 font-semibold mb-2">Query:</div>
                  <div className="text-gray-300">
                    "Top complaints about Apple products from Gen Z in California, last 30 days"
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25">
                  <DollarSign className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-white text-xl">3. Earn & Analyze</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base mb-6">
                  Contributors receive micro-payments for each data access. AI agents generate insights, reports, and
                  recommendations from the data.
                </CardDescription>
                <div className="p-4 bg-gray-800/60 rounded-xl text-sm border border-gray-700">
                  <div className="text-purple-400 font-semibold mb-2">Output:</div>
                  <div className="text-gray-300">"Battery performance is the #1 issue in West Coast markets"</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">Who Uses MarketRAG</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From consumer brands to VCs, our platform serves diverse AI-powered use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Consumer Brands</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Improve product messaging and advertising campaigns with real consumer sentiment data
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Product Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Get raw, unfiltered customer feedback to guide product development decisions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">Trend Trackers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Summarize market mood and emerging trends with weekly automated reports
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">VCs & Analysts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Evaluate product-market fit signals and investment opportunities with real data
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-cyan-600/10 via-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-8">Ready to Transform Market Research?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of contributors earning from their insights and AI agents accessing real-time market data.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="text-lg px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg shadow-cyan-500/25"
            >
              Start Contributing Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-4 border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-600"
            >
              Explore API Access
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
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  MarketRAG
                </span>
              </div>
              <p className="text-gray-400">
                Decentralized market research platform connecting contributors with AI agents.
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
            <p>&copy; 2024 MarketRAG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
