'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Clock, ChefHat } from 'lucide-react'

const recipes = [
  {
    id: 1,
    title: 'Simple Roasted Chicken Thighs',
    meat: 'chicken',
    meatLabel: 'Chicken',
    serves: 4,
    prepTime: 10,
    cookTime: 35,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6',
  },
  {
    id: 2,
    title: 'Crispy Pan-Fried Chicken Breast',
    meat: 'chicken',
    meatLabel: 'Chicken',
    serves: 2,
    prepTime: 15,
    cookTime: 20,
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791',
  },
  {
    id: 3,
    title: 'Perfect Pan-Seared Ribeye',
    meat: 'beef',
    meatLabel: 'Beef',
    serves: 2,
    prepTime: 5,
    cookTime: 15,
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d',
  },
  {
    id: 4,
    title: 'Ground Beef Chili',
    meat: 'beef',
    meatLabel: 'Beef',
    serves: 6,
    prepTime: 20,
    cookTime: 60,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975',
  },
  {
    id: 5,
    title: 'Oven-Roasted Pork Tenderloin',
    meat: 'pork',
    meatLabel: 'Pork',
    serves: 4,
    prepTime: 15,
    cookTime: 45,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55',
  },
  {
    id: 6,
    title: 'Slow-Cooked Pulled Pork',
    meat: 'pork',
    meatLabel: 'Pork',
    serves: 8,
    prepTime: 20,
    cookTime: 480,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd',
  },
  {
    id: 7,
    title: 'Grilled Lamb Chops',
    meat: 'lamb',
    meatLabel: 'Lamb',
    serves: 4,
    prepTime: 30,
    cookTime: 10,
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1595777216528-071e0127ccbf',
  },
  {
    id: 8,
    title: 'Braised Lamb Shank',
    meat: 'lamb',
    meatLabel: 'Lamb',
    serves: 4,
    prepTime: 25,
    cookTime: 180,
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1595777216537-f9cef5e790e9',
  },
  {
    id: 9,
    title: 'Roast Turkey Breast',
    meat: 'turkey',
    meatLabel: 'Turkey',
    serves: 6,
    prepTime: 20,
    cookTime: 90,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98',
  },
  {
    id: 10,
    title: 'Turkey Burgers',
    meat: 'turkey',
    meatLabel: 'Turkey',
    serves: 4,
    prepTime: 10,
    cookTime: 15,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  },
]

export default function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMeat, setSelectedMeat] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMeat = selectedMeat === 'all' || recipe.meat === selectedMeat
    const matchesDifficulty = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty
    return matchesSearch && matchesMeat && matchesDifficulty
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Recipes</h1>
          <p className="text-xl text-gray-600">
            Tried and tested recipes with temperature checkpoints and step-by-step instructions
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>

            {/* Meat Filter */}
            <select
              value={selectedMeat}
              onChange={(e) => setSelectedMeat(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            >
              <option value="all">All Meats</option>
              <option value="chicken">Chicken</option>
              <option value="beef">Beef</option>
              <option value="pork">Pork</option>
              <option value="lamb">Lamb</option>
              <option value="turkey">Turkey</option>
            </select>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            >
              <option value="all">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 mb-6">
            Showing {filteredRecipes.length} {filteredRecipes.length === 1 ? 'recipe' : 'recipes'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <Link 
                key={recipe.id} 
                href={`/recipes/${recipe.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img 
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm mb-3">
                      <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded font-medium">
                        {recipe.meatLabel}
                      </span>
                      <span className="text-gray-500">{recipe.difficulty}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-3 group-hover:text-orange-600 transition">
                      {recipe.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{recipe.prepTime + recipe.cookTime} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ChefHat size={16} />
                        <span>Serves {recipe.serves}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No recipes found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
