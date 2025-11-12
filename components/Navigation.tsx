'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChefHat, User } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-orange-600">
            <ChefHat size={28} />
            <span>Sausage Link</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/learn" className="text-gray-700 hover:text-orange-600 font-medium transition">
              Learn
            </Link>
            <Link href="/recipes" className="text-gray-700 hover:text-orange-600 font-medium transition">
              Recipes
            </Link>
            <Link href="/ask-chef" className="text-gray-700 hover:text-orange-600 font-medium transition">
              Ask the Chef
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-orange-600 font-medium transition">
              Community
            </Link>
            <Link href="/my-cookbook" className="text-gray-700 hover:text-orange-600 font-medium transition">
              My Cookbook
            </Link>
            <Link href="/auth/login" className="text-gray-700 hover:text-orange-600 font-medium transition">
              <User size={20} className="inline mr-1" />
              Login
            </Link>
            <Link 
              href="/auth/signup" 
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition font-medium"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/learn" className="text-gray-700 hover:text-orange-600 font-medium">
                Learn
              </Link>
              <Link href="/recipes" className="text-gray-700 hover:text-orange-600 font-medium">
                Recipes
              </Link>
              <Link href="/ask-chef" className="text-gray-700 hover:text-orange-600 font-medium">
                Ask the Chef
              </Link>
              <Link href="/community" className="text-gray-700 hover:text-orange-600 font-medium">
                Community
              </Link>
              <Link href="/my-cookbook" className="text-gray-700 hover:text-orange-600 font-medium">
                My Cookbook
              </Link>
              <Link href="/auth/login" className="text-gray-700 hover:text-orange-600 font-medium">
                Login
              </Link>
              <Link 
                href="/auth/signup" 
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition font-medium text-center"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
