import Link from 'next/link'
import { ChefHat, BookOpen, MessageSquare, Users, Trophy, Thermometer } from 'lucide-react'

export default function Home() {
  const meatFacts = [
    "Chicken should reach 165°F (74°C) internal temperature",
    "Let steak rest 5-10 minutes after cooking for juicier results",
    "Ground meat should always be cooked to 160°F (71°C)",
  ]

  const todaysFact = meatFacts[new Date().getDate() % meatFacts.length]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Master Every Cut, Every Time
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-50">
              Your step-by-step guide to cooking meat perfectly. Learn safe temperatures, 
              techniques, and get personalized help from our AI chefs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/learn" 
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition"
              >
                Start Learning
              </Link>
              <Link 
                href="/recipes" 
                className="bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition"
              >
                Browse Recipes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Fact */}
      <section className="bg-orange-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <Thermometer className="text-orange-600" size={32} />
            <div>
              <p className="text-sm font-semibold text-orange-600 uppercase">Today's Meat Fact</p>
              <p className="text-lg text-gray-800">{todaysFact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Start</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Meat</h3>
              <p className="text-gray-600">Browse our guides for chicken, beef, pork, lamb, and more</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Follow the Steps</h3>
              <p className="text-gray-600">Get temperature checkpoints, timers, and safety tips</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cook with Confidence</h3>
              <p className="text-gray-600">Achieve perfect results every time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BookOpen size={32} />}
              title="Comprehensive Guides"
              description="Learn prep techniques, safe temperatures, and common mistakes for every type of meat"
            />
            <FeatureCard 
              icon={<ChefHat size={32} />}
              title="AI Chef Assistance"
              description="Chat with Mason and Connely, our funny AI chefs who provide personalized cooking advice"
            />
            <FeatureCard 
              icon={<Thermometer size={32} />}
              title="Temperature Tracking"
              description="Visual widgets and voice guidance to hit perfect internal temperatures"
            />
            <FeatureCard 
              icon={<Users size={32} />}
              title="Community"
              description="Share recipes, photos, and tips with fellow home cooks"
            />
            <FeatureCard 
              icon={<Trophy size={32} />}
              title="Challenges & Badges"
              description="Complete monthly challenges and earn badges as you master new skills"
            />
            <FeatureCard 
              icon={<MessageSquare size={32} />}
              title="Recipe Collection"
              description="Save your favorites, add notes, and build your personal cookbook"
            />
          </div>
        </div>
      </section>

      {/* Featured Recipes Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Recipes</h2>
            <Link href="/recipes" className="text-orange-600 font-semibold hover:text-orange-700">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RecipeCard 
              title="Simple Roasted Chicken Thighs"
              meat="Chicken"
              time="45 min"
              difficulty="Easy"
              image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6"
            />
            <RecipeCard 
              title="Perfect Pan-Seared Ribeye"
              meat="Beef"
              time="20 min"
              difficulty="Medium"
              image="https://images.unsplash.com/photo-1546833999-b9f581a1996d"
            />
            <RecipeCard 
              title="Oven-Roasted Pork Tenderloin"
              meat="Pork"
              time="60 min"
              difficulty="Easy"
              image="https://images.unsplash.com/photo-1432139555190-58524dae6a55"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Cook Like a Pro?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Join thousands of home cooks mastering meat preparation
          </p>
          <Link 
            href="/auth/signup" 
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition inline-block"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
      <div className="text-orange-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function RecipeCard({ title, meat, time, difficulty, image }: any) {
  return (
    <Link href="/recipes" className="group">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden">
        <div className="aspect-video bg-gray-200 relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded">{meat}</span>
            <span>{time}</span>
            <span>•</span>
            <span>{difficulty}</span>
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
      </div>
    </Link>
  )
}
