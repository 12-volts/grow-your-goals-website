"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-earth-beige-100/80 backdrop-blur-md border-b border-earth-beige-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🌱</span>
          <a href="/" className="font-bold text-xl text-earth-moss-600 tracking-tight hover:text-earth-moss-500 transition-colors">
            Grow Your Goals
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-earth-brown-600">
          <a href="/#pillars" className="hover:text-earth-moss-500 transition-colors">Pillars</a>
          <a href="/#gamification" className="hover:text-earth-moss-500 transition-colors">Gamification</a>
          <a href="/#shop" className="hover:text-earth-moss-500 transition-colors">Seed Shop</a>
          <a href="/privacy" className="hover:text-earth-moss-500 transition-colors">Privacy Policy</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-earth-brown-600 hover:text-earth-moss-500 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-earth-beige-100 border-b border-earth-beige-200 py-4 px-4 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <a
            href="/#pillars"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-earth-brown-600 hover:text-earth-moss-500 transition-colors"
          >
            Pillars
          </a>
          <a
            href="/#gamification"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-earth-brown-600 hover:text-earth-moss-500 transition-colors"
          >
            Gamification
          </a>
          <a
            href="/#shop"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-earth-brown-600 hover:text-earth-moss-500 transition-colors"
          >
            Seed Shop
          </a>
          <a
            href="/privacy"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-earth-brown-600 hover:text-earth-moss-500 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      )}
    </header>
  );
}
