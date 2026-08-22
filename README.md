# 🧹 Kiki's Delivery Service: Becarios Committee Sorting Test 📦

An interactive, storybook-crafted Ghibli & *Kiki's Delivery Service* themed MBTI-style committee sorting test created for **Becarios de Santo Tomas**.

Built with **React + TypeScript + Vite + Tailwind CSS**, designed mobile-first for **phone portrait screens**, and fully optimized for 1-click **Vercel deployment**.

---

## ✨ Features

- 🎀 **Ghibli / Kiki's Delivery Service Aesthetic**:
  - Warm bakery parchment tones, Gütiokipänja Bakery signboard, Kiki's iconic red ribbon and flying broom, Jiji the cat artwork, and seaside Koriko pastel skies with drifting clouds.
- 📱 **Mobile Portrait First (Required & Optimized)**:
  - Big thumb-friendly touch targets ($\ge 56\text{px}$) for YES/NO choices.
  - Safe-area support for iOS home bars and mobile browser address bars.
  - Zero horizontal overflow on narrow screens (360px–430px+).
- 🎯 **Accurate Scoring Engine**:
  - Exact 11-question mathematical matrix mapping to all 8 organization committees.
  - **Tie-Breaker / Multiple Match Support**: When 2 or more committees share the highest score, both winning cards are rendered with a styled **"— OR —"** divider.
- 🏆 **Ranked Committee Leaderboard**:
  - Full ranking of all 8 committees from highest to lowest score with score breakdown and expandable cards to explore 2nd, 3rd, and next best options.
- 🔔 **Charming Audio Chimes & Confetti**:
  - Synthesized Web Audio API bell chimes and fanfare without external audio assets.
  - Confetti burst on delivery completion.
- 📋 **Share & Review**:
  - One-tap formatted summary copy to clipboard for Discord / Messenger / Social media.
  - Collapsible 11-question answer review drawer.

---

## 🏛️ 8 Organization Committees

1. **MEMBERSHIP & COMMUNICATIONS** — *The Connector*
2. **OPERATIONS** — *The Engine Room*
3. **CREATIVES** — *The Visionary*
4. **DOCUMENTATIONS** — *The Archivist*
5. **RESEARCH & EVALUATIONS** — *The Analyst & Voice*
6. **WAYS & MEANS** — *The Catalyst*
7. **ALUMNI AFFAIRS** — *The Bridge Builder*
8. **COMMUNITY SERVICE** — *The Changemaker*

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Run automated scoring verification tests
npm run test (or npx tsx src/utils/scoring.test.ts)

# Build for production
npm run build
```

---

## 🌐 Deploying to Vercel

### Option 1: Vercel Web Dashboard (Recommended)
1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel will automatically detect **Vite** with the following preset settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**. Your app will be live within seconds!

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```
*(When prompted for production deployment, run `vercel --prod`)*
