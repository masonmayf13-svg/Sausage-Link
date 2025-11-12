import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sausage Link - Master Meat Cooking',
  description: 'Step-by-step guides for cooking every type of meat perfectly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Toaster position="top-right" />
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Sausage Link</h3>
                <p className="text-gray-400">Master the art of cooking meat with confidence.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Learn</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/learn">Meat Guides</a></li>
                  <li><a href="/recipes">Recipes</a></li>
                  <li><a href="/ask-chef">Ask the Chef</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Community</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/community">Forum</a></li>
                  <li><a href="/community/challenges">Challenges</a></li>
                  <li><a href="/my-cookbook">My Cookbook</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">About</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Sausage Link. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
