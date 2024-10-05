"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { Menu } from "lucide-react";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-base-content">
             project
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-base-content hover:text-base-300 transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="/"
              className="text-base-content hover:text-base-300 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="text-base-content hover:text-base-300 transition-colors"
            >
              Affiliate
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-ghost btn-circle"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-base-200 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
            <Link
              href="/"
              className="block text-base-content hover:text-base-300 transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="/"
              className="block text-base-content hover:text-base-300 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="block text-base-content hover:text-base-300 transition-colors"
            >
              Affiliate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header