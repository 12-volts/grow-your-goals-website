import React from 'react';

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-b from-earth-beige-100 to-earth-beige-50 pt-20 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center rounded-full bg-earth-moss-100 px-4 py-1.5 text-sm font-medium text-earth-moss-600 mb-6 border border-earth-moss-200">
            🌻 Version 1.0 Live Tracker
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-earth-brown-600 mb-6">
            Cultivate Habits. <br />
            <span className="text-earth-moss-500 font-serif italic">Grow Your Goals.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-earth-brown-500 mb-10 leading-relaxed">
            Ditch the sterile, stark modern dashboards. Welcome to a cozy, gamified farming world where your personal growth feeds a thriving virtual garden. Transform your daily routines into a bountiful harvest.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#pillars" className="inline-flex items-center justify-center bg-earth-moss-500 text-white font-semibold px-8 py-3 rounded-2xl shadow-md hover:bg-earth-moss-600 hover:shadow-lg transition-all">
              Explore the Pillars
            </a>
            <a href="#gamification" className="inline-flex items-center justify-center bg-white text-earth-brown-500 border-2 border-earth-beige-300 font-semibold px-8 py-3 rounded-2xl shadow-sm hover:bg-earth-beige-100 transition-all">
              How it Works
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-earth-moss-100/40 to-transparent rounded-full blur-3xl -z-10" />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-earth-beige-100 border border-earth-beige-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-earth-brown-600">The Virtual Garden Concept</h2>
              <p className="text-earth-brown-500 leading-relaxed">
                In <strong>Grow Your Goals</strong>, each high-level life objective you create is assigned a unique plant seed. Completing related actions or locking dedicated focus hours acts as nourishing fertilizer for that plant.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-xl mt-0.5">🌱</span>
                  <div>
                    <h4 className="font-semibold text-earth-brown-600">Auto-Seeding</h4>
                    <p className="text-sm text-earth-brown-500">When your plant reaches full maturity, a new seed is immediately planted so you never lose momentum.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl mt-0.5">🧺</span>
                  <div>
                    <h4 className="font-semibold text-earth-brown-600">Manual Batch Harvests</h4>
                    <p className="text-sm text-earth-brown-500">Visit your Garden Scene anytime to harvest all mature crops simultaneously, obtaining Gold and Category EXP in a rewarding burst.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-earth-beige-200 shadow-inner grid grid-cols-2 gap-4">
              <div className="bg-earth-beige-50 p-4 rounded-xl border border-earth-beige-200 text-center">
                <div className="text-3xl mb-1">🌻</div>
                <div className="font-bold text-lg text-earth-brown-600">Sprout Sunflower</div>
                <p className="text-xs text-earth-moss-500 font-semibold mt-1">Health Category</p>
              </div>
              <div className="bg-earth-beige-50 p-4 rounded-xl border border-earth-beige-200 text-center">
                <div className="text-3xl mb-1">💰</div>
                <div className="font-bold text-lg text-earth-brown-600">Coin Sprout</div>
                <p className="text-xs text-earth-gold-600 font-semibold mt-1">Finance Category</p>
              </div>
              <div className="bg-earth-beige-50 p-4 rounded-xl border border-earth-beige-200 text-center">
                <div className="text-3xl mb-1">🪻</div>
                <div className="font-bold text-lg text-earth-brown-600">Focus Lavender</div>
                <p className="text-xs text-indigo-500 font-semibold mt-1">Productivity</p>
              </div>
              <div className="bg-earth-beige-50 p-4 rounded-xl border border-earth-beige-200 text-center">
                <div className="text-3xl mb-1">🌳</div>
                <div className="font-bold text-lg text-earth-brown-600">Golden Tree</div>
                <p className="text-xs text-earth-gold-600 font-semibold mt-1">Finance Premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pillars" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-earth-brown-600">Three Life Pillars</h2>
          <p className="text-earth-brown-500 mt-4">Every habit, routine, and milestone maps directly to one of three core tracks, each possessing its own independent progression level.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border-t-4 border-emerald-500 rounded-2xl p-6 shadow-sm border border-earth-beige-200 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-2xl mb-4 border border-emerald-100">🟢</div>
            <h3 className="text-xl font-bold text-earth-brown-600 mb-2">Health</h3>
            <p className="text-sm text-earth-brown-500 mb-4">Focuses on fitness, workout routines, sleep hygiene, hydration, nutrition, and mental stress management.</p>
            <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">Theme: #2ECC71</span>
          </div>
          <div className="bg-white border-t-4 border-amber-500 rounded-2xl p-6 shadow-sm border border-earth-beige-200 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-2xl mb-4 border border-amber-100">🟡</div>
            <h3 className="text-xl font-bold text-earth-brown-600 mb-2">Finance</h3>
            <p className="text-sm text-earth-brown-500 mb-4">Tracks savings milestones, budget checks, investment habits, debt reduction, and strict expense limits.</p>
            <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-100 text-amber-800">Theme: #F1C40F</span>
          </div>
          <div className="bg-white border-t-4 border-blue-500 rounded-2xl p-6 shadow-sm border border-earth-beige-200 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-4 border border-blue-100">🔵</div>
            <h3 className="text-xl font-bold text-earth-brown-600 mb-2">Productivity</h3>
            <p className="text-sm text-earth-brown-500 mb-4">Encompasses work assignments, intensive studying, coding projects, skill development, and reading.</p>
            <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">Theme: #3498DB</span>
          </div>
        </div>
      </section>

      <section id="gamification" className="bg-earth-moss-100/50 border-y border-earth-moss-200/60 py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-earth-moss-600">Core Loop Architecture</span>
              <h2 className="text-3xl font-bold text-earth-brown-600 mt-2 mb-6">Gamification & Economy</h2>
              <div className="space-y-6 text-earth-brown-500">
                <p>
                  Completing your tasks yields immediate rewards. Your profile keeps track of <strong>four distinct progression tracks</strong> simultaneously: individual levels for Health, Finance, and Productivity, alongside a master Profile Level.
                </p>
                <div className="bg-white p-4 rounded-xl border border-earth-beige-200">
                  <span className="block font-semibold text-sm text-earth-brown-600 mb-1">EXP Scaling Formula:</span>
                  <code className="text-sm text-earth-moss-600 block bg-earth-beige-50 p-2 rounded font-mono">Required EXP(L) = 100 × L^1.5</code>
                  <span className="block text-xs text-earth-brown-400 mt-2">Required EXP scales smoothly with level progression, ensuring long-term engagement.</span>
                </div>
                <p>
                  Gold accumulated from harvesting mature plants can be taken straight to the <strong>Seed Shop</strong> to buy higher-tier seeds with larger payout yields.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-earth-beige-200 shadow-sm flex items-center space-x-4">
                <div className="text-3xl">👑</div>
                <div>
                  <h4 className="font-bold text-earth-brown-600 text-lg">Overall Profile Level</h4>
                  <p className="text-sm text-earth-brown-400">Calculated from cumulative EXP across all three foundational life pillars.</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-earth-beige-200 shadow-sm flex items-center space-x-4">
                <div className="text-3xl">🪙</div>
                <div>
                  <h4 className="font-bold text-earth-brown-600 text-lg">Gold Currency & Shop</h4>
                  <p className="text-sm text-earth-brown-400">Earned via task logs and fully-mature plant crops. Used to unlock rare flora.</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-earth-beige-200 shadow-sm flex items-center space-x-4">
                <div className="text-3xl">⏱️</div>
                <div>
                  <h4 className="font-bold text-earth-brown-600 text-lg">Dual Task Mechanics</h4>
                  <p className="text-sm text-earth-brown-400">Supports Action-based (count reps) and Time-based (focus timers) repeatable workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-earth-brown-600">The Seed Shop</h2>
          <p className="text-earth-brown-500 mt-2">Unlock unique seeds using your hard-earned Gold to expand your agricultural empire.</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-earth-beige-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-earth-beige-100 text-earth-brown-600 border-b border-earth-beige-200 font-semibold">
                <th className="p-4">Plant Name</th>
                <th className="p-4">Pillar Category</th>
                <th className="p-4">Requirement Type</th>
                <th className="p-4">Target Requirement</th>
                <th className="p-4 text-amber-600">Harvest Gold</th>
                <th className="p-4 text-emerald-600">Harvest EXP</th>
                <th className="p-4">Unlock Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-earth-beige-200 text-earth-brown-500">
              <tr>
                <td className="p-4 font-bold text-earth-brown-600">🌻 Sprout Sunflower</td>
                <td className="p-4">Health</td>
                <td className="p-4">Action</td>
                <td className="p-4">5 Actions</td>
                <td className="p-4 font-semibold text-amber-600">25 Gold</td>
                <td className="p-4 font-semibold text-emerald-600">50 EXP</td>
                <td className="p-4"><span className="text-xs font-semibold px-2 py-0.5 rounded bg-earth-moss-100 text-earth-moss-600">Free (Starter)</span></td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-earth-brown-600">🍀 Vitality Clover</td>
                <td className="p-4">Health</td>
                <td className="p-4">Time</td>
                <td className="p-4">30 Mins</td>
                <td className="p-4 font-semibold text-amber-600">40 Gold</td>
                <td className="p-4 font-semibold text-emerald-600">80 EXP</td>
                <td className="p-4">100 Gold</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-earth-brown-600">🌱 Coin Sprout</td>
                <td className="p-4">Finance</td>
                <td className="p-4">Action</td>
                <td className="p-4">3 Actions</td>
                <td className="p-4 font-semibold text-amber-600">50 Gold</td>
                <td className="p-4 font-semibold text-emerald-600">60 EXP</td>
                <td className="p-4"><span className="text-xs font-semibold px-2 py-0.5 rounded bg-earth-moss-100 text-earth-moss-600">Free (Starter)</span></td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-earth-brown-600">🌳 Golden Tree</td>
                <td className="p-4">Finance</td>
                <td className="p-4">Time</td>
                <td className="p-4">60 Mins</td>
                <td className="p-4 font-semibold text-amber-600">120 Gold</td>
                <td className="p-4 font-semibold text-emerald-600">150 EXP</td>
                <td className="p-4">250 Gold</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-earth-brown-600">🪻 Focus Lavender</td>
                <td className="p-4">Productivity</td>
                <td className="p-4">Time</td>
                <td className="p-4">45 Mins</td>
                <td className="p-4 font-semibold text-amber-600">60 Gold</td>
                <td className="p-4 font-semibold text-emerald-600">100 EXP</td>
                <td className="p-4"><span className="text-xs font-semibold px-2 py-0.5 rounded bg-earth-moss-100 text-earth-moss-600">Free (Starter)</span></td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-earth-brown-600">☕ Coffee Bush</td>
                <td className="p-4">Productivity</td>
                <td className="p-4">Action</td>
                <td className="p-4">8 Actions</td>
                <td className="p-4 font-semibold text-amber-600">90 Gold</td>
                <td className="p-4 font-semibold text-emerald-600">140 EXP</td>
                <td className="p-4">200 Gold</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
