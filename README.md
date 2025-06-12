# 📊 DataGram

**Market Research Data Platform for AI Agents**

---

## 🎯 Problem

Traditional market research is:

- 💸 **Expensive** — Analyst-driven studies can cost $10,000+
- 🐢 **Slow** — Takes weeks to gather and analyze data
- 🎯 **Biased** — Often relies on small, B2B-centric samples

---

## 💡 Solution

**DataGram** is a decentralized data platform enabling individuals to upload micro-surveys or product feedback and earn per access.  
AI agents use this real-time data to:

- Detect emerging consumer trends
- Summarize market sentiment
- Suggest product improvements

---

## 🧪 How It Works

### 1. **Data Contributor**

Users can:
- Fill in-app surveys (e.g., product review forms)
- Submit feedback from platforms like Reddit or Amazon
- Tag entries by product, usage, and demographics

**Example:**
```json
{
  "product": "iPhone 15",
  "likes": ["Camera", "Fast Charging"],
  "dislikes": ["Battery life"],
  "rating": 4,
  "age": 28,
  "region": "California",
  "tags": ["electronics", "apple"]
}
```

---

### 2. **Data Pool**

- Normalized & encrypted feedback
- Indexed by tags (e.g., location, brand, device type)

---

### 3. **AI Agent Queries**

Agents use GraphQL or API to query:

> "Top complaints about Apple products from Gen Z females in California (last 30 days)?"

- Pays per-record in **x402 tokens**
- Returns analysis, reports, design insights

---

### 4. **Earnings Dashboard**

- Contributors receive micro-payouts (e.g., $0.005/read)
- Transparent dashboard for:
  - Total reads
  - Rating impact
  - Earnings history

---

## 👩‍💼 Users & Use Cases

| AI Agent Type        | Use Case                                  |
|----------------------|--------------------------------------------|
| Consumer LLM         | Tailor ad messaging                        |
| Product Teams        | Access unfiltered customer sentiment       |
| Trend Analysis Bots  | Track product perceptions weekly           |
| VCs / Analysts       | Scan for product-market fit signals        |

---

## 🧱 Architecture

<img width="1607" alt="image" src="https://github.com/user-attachments/assets/e1a9ccae-ed24-44b3-ae6a-15f10bd6adfb" />


---

## 🪙 Token Model

- Currency: `USDC`
- Earn: Contributors get paid per record access
- Spend: AI agents pay to access structured feedback data

---

# DataGram

A Next.js project with TypeScript and Tailwind CSS.

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (Latest version recommended)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd DataGram
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```
> Note: We use `--legacy-peer-deps` flag to resolve dependency conflicts between `date-fns` and `react-day-picker`.

## Running the Project

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
- Local: http://localhost:3000
- Network: http://192.168.1.138:3000 (or your local network IP)

The development server includes hot-reloading, so any changes you make to the code will be automatically reflected in the browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## Tech Stack

- Next.js 15.2.4
- React 19
- TypeScript
- Tailwind CSS
- Radix UI Components
- Various UI utilities and components

---
