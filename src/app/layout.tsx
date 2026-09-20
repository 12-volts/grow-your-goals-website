import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Grow Your Goals - Gamified Virtual Garden & Productivity",
  description: "Transform your habits and personal progress into a thriving virtual garden. Organize life into Health, Finance, and Productivity pillars.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-earth-beige-50 text-earth-brown-900 antialiased min-h-screen flex flex-col selection:bg-earth-moss-200">
        <header className="sticky top-0 z-50 bg-earth-beige-100/80 backdrop-blur-md border-b border-earth-beige-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌱</span>
              <a href="/" className="font-bold text-xl text-earth-moss-600 tracking-tight hover:text-earth-moss-500 transition-colors">
                Grow Your Goals
              </a>
            </div>
            <nav className="flex items-center space-x-6 text-sm font-medium text-earth-brown-600">
              <a href="/#pillars" className="hover:text-earth-moss-500 transition-colors">Pillars</a>
              <a href="/#gamification" className="hover:text-earth-moss-500 transition-colors">Gamification</a>
              <a href="/#shop" className="hover:text-earth-moss-500 transition-colors">Seed Shop</a>
              <a href="/privacy" className="hover:text-earth-moss-500 transition-colors">Privacy Policy</a>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-earth-brown-900 text-earth-beige-100 py-12 mt-20 border-t border-earth-brown-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-bold text-lg text-earth-gold-300">Grow Your Goals</p>
              <p className="text-sm text-earth-brown-300 mt-1">An Earthy, Cozy Gardening Approach to Habits & Productivity.</p>
            </div>
            <div className="flex space-x-6 text-sm text-earth-beige-300">
              <a href="/" className="hover:text-earth-gold-300 transition-colors">Home</a>
              <a href="/privacy" className="hover:text-earth-gold-300 transition-colors">Privacy Policy</a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-earth-brown-400 mt-8 pt-6 border-t border-earth-brown-600/50">
            &copy; {new Date().getFullYear()} Grow Your Goals. All rights reserved. Registered domain: growyourgoals.ie
          </div>
        </footer>
      </body>
    </html>
  );
}
