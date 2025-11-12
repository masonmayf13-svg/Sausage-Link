'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookMarked, Award, Settings, Upload, Edit } from 'lucide-react'

const savedRecipes = [
  {
    id: 1,
    title: 'Simple Roasted Chicken Thighs',
    meat: 'Chicken',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6',
    notes: 'Added extra garlic - delicious!',
  },
  {
    id: 3,
    title: 'Perfect Pan-Seared Ribeye',
    meat: 'Beef',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d',
    notes: '',
  },
]

const badges = [
  {
    id: 1,
    name: 'First Recipe',
    description: 'Cooked your first recipe',
    icon: '🎯',
    earned: true,
    earnedDate: '2024-01-15',
  },
  {
    id: 2,
    name: 'Chicken Master',
    description: 'Cook 5 chicken recipes',
    icon: '🐔',
    earned: false,
    progress: 2,
    total: 5,
  },
  {
    id: 3,
    name: 'Temperature Pro',
    description: 'Complete 10 recipes with temperature checkpoints',
    icon: '🌡️',
    earned: false,
    progress: 3,
    total: 10,
  },
  {
    id: 4,
    name: 'Community Helper',
    description: '50 helpful comments/upvotes',
    icon: '❤️',
    earned: false,
    progress: 12,
    total: 50,
  },
  {
    id: 5,
    name: 'Safety Star',
    description: 'Passed safety quiz',
    icon: '⭐',
    earned: true,
    earnedDate: '2024-01-20',
  },
]

export default function MyCookbookPage() {
  const [activeTab, setActiveTab] = useState('saved')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-3xl">
                👤
              </div>
              <div>
                <h1 className="text-3xl font-bold">My Cookbook</h1>
                <p className="text-gray-600">Your personal recipe collection and achievements</p>
              </div>
            </div>
            <Link 
              href="/my-cookbook/settings"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-orange-600 transition"
            >
              <Settings size={20} />
              Settings
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-orange-600 font-semibold text-2xl">{savedRecipes.length}</p>
              <p className="text-gray-600 text-sm">Saved Recipes</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-600 font-semibold text-2xl">{badges.filter(b => b.earned).length}</p>
              <p className="text-gray-600 text-sm">Badges Earned</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-600 font-semibold text-2xl">0</p>
              <p className="text-gray-600 text-sm">Recipes Uploaded</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-purple-600 font-semibold text-2xl">12</p>
              <p className="text-gray-600 text-sm">Comments Posted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex items-center gap-2 py-4 border-b-2 font-medium transition ${
                activeTab === 'saved'
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <BookMarked size={20} />
              Saved Recipes
            </button>
            <button
              onClick={() => setActiveTab('badges')}
              className={`flex items-center gap-2 py-4 border-b-2 font-medium transition ${
                activeTab === 'badges'
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Award size={20} />
              Badges
            </button>
            <button
              onClick={() => setActiveTab('uploads')}
              className={`flex items-center gap-2 py-4 border-b-2 font-medium transition ${
                activeTab === 'uploads'
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Upload size={20} />
              My Uploads
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {activeTab === 'saved' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Saved Recipes</h2>
                <Link
                  href="/recipes"
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  Browse More →
                </Link>
              </div>

              {savedRecipes.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg">
                  <BookMarked size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 text-lg mb-4">No saved recipes yet</p>
                  <Link
                    href="/recipes"
                    className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
                  >
                    Explore Recipes
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedRecipes.map(recipe => (
                    <div key={recipe.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="aspect-video bg-gray-200">
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">
                          {recipe.meat}
                        </span>
                        <h3 className="font-semibold text-lg mt-2 mb-2">{recipe.title}</h3>
                        {recipe.notes && (
                          <div className="bg-yellow-50 border-l-2 border-yellow-400 p-2 mb-3">
                            <p className="text-sm text-gray-700">
                              <Edit size={12} className="inline mr-1" />
                              {recipe.notes}
                            </p>
                          </div>
                        )}
                        <Link
                          href={`/recipes/${recipe.id}`}
                          className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                        >
                          View Recipe →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'badges' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {badges.map(badge => (
                  <div
                    key={badge.id}
                    className={`bg-white rounded-lg shadow-sm p-6 ${
                      badge.earned ? 'border-2 border-orange-200' : 'opacity-75'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`text-4xl ${badge.earned ? '' : 'grayscale'}`}>
                        {badge.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{badge.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{badge.description}</p>
                        {badge.earned ? (
                          <p className="text-xs text-green-600 font-medium">
                            ✓ Earned on {badge.earnedDate}
                          </p>
                        ) : (
                          <div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                              <div
                                className="bg-orange-600 h-2 rounded-full"
                                style={{ width: `${(badge.progress! / badge.total!) * 100}%` }}
                              />
                            </div>
                            <p className="text-xs text-gray-600">
                              {badge.progress} / {badge.total}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'uploads' && (
            <div className="text-center py-12 bg-white rounded-lg">
              <Upload size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 text-lg mb-4">No uploads yet</p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition">
                Upload Your First Recipe
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
