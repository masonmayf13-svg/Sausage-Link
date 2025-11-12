'use client'

import { useState } from 'react'
import { Clock, Users, ChefHat, Thermometer, Timer, Bookmark, Share2, MessageSquare } from 'lucide-react'

const recipeData: any = {
  1: {
    title: 'Simple Roasted Chicken Thighs',
    meat: 'Chicken',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6',
    serves: 4,
    prepTime: 10,
    cookTime: 35,
    difficulty: 'Easy',
    safeTemp: 165,
    ingredients: [
      '8 chicken thighs (bone-in, skin-on)',
      '2 tablespoons olive oil',
      '2 teaspoons salt',
      '1 teaspoon black pepper',
      '1 teaspoon garlic powder',
      '1 teaspoon paprika',
      '1/2 teaspoon dried thyme',
    ],
    steps: [
      {
        number: 1,
        description: 'Preheat your oven to 425°F (220°C). Line a baking sheet with parchment paper or aluminum foil.',
        timer: null,
        temp: null,
      },
      {
        number: 2,
        description: 'Pat the chicken thighs completely dry with paper towels. This is crucial for crispy skin.',
        timer: null,
        temp: null,
      },
      {
        number: 3,
        description: 'In a small bowl, mix together salt, pepper, garlic powder, paprika, and thyme.',
        timer: null,
        temp: null,
      },
      {
        number: 4,
        description: 'Rub the chicken thighs with olive oil, then season generously with the spice mixture on both sides.',
        timer: null,
        temp: null,
      },
      {
        number: 5,
        description: 'Place chicken thighs skin-side up on the prepared baking sheet, leaving space between each piece.',
        timer: null,
        temp: null,
      },
      {
        number: 6,
        description: 'Roast in the preheated oven for 35-40 minutes.',
        timer: 35,
        temp: null,
      },
      {
        number: 7,
        description: 'Check internal temperature with a meat thermometer. It should read 165°F (74°C) in the thickest part.',
        timer: null,
        temp: 165,
      },
      {
        number: 8,
        description: 'Remove from oven and let rest for 5-10 minutes before serving. The skin should be golden and crispy.',
        timer: 5,
        temp: null,
      },
    ],
    nutrition: {
      calories: 320,
      protein: 28,
      fat: 22,
      carbs: 1,
    },
  },
}

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  const [activeStep, setActiveStep] = useState(0)
  const [isSaved, setIsSaved] = useState(false)
  const recipe = recipeData[params.id] || recipeData[1]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <section className="relative h-96 bg-gray-900">
        <img 
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 text-white/90 mb-2">
              <span className="bg-orange-600 px-3 py-1 rounded text-sm font-medium">{recipe.meat}</span>
              <span>{recipe.difficulty}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{recipe.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>{recipe.prepTime + recipe.cookTime} min total</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>Serves {recipe.serves}</span>
              </div>
              <div className="flex items-center gap-2">
                <Thermometer size={20} />
                <span>{recipe.safeTemp}°F safe temp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actions Bar */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-3">
            <button 
              onClick={() => setIsSaved(!isSaved)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                isSaved 
                  ? 'bg-orange-600 text-white border-orange-600' 
                  : 'bg-white text-gray-700 border-gray-300 hover:border-orange-600'
              }`}
            >
              <Bookmark size={18} />
              {isSaved ? 'Saved' : 'Save Recipe'}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-orange-600 transition">
              <Share2 size={18} />
              Share
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Ingredients */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ChefHat className="text-orange-600" />
                Ingredients
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      className="mt-1 w-5 h-5 text-orange-600 rounded"
                    />
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6">Instructions</h2>
              <div className="space-y-6">
                {recipe.steps.map((step: any) => (
                  <div 
                    key={step.number}
                    className={`border-l-4 pl-6 py-4 transition ${
                      activeStep === step.number - 1 
                        ? 'border-orange-600 bg-orange-50' 
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setActiveStep(step.number - 1)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                            activeStep === step.number - 1
                              ? 'bg-orange-600 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          {step.number}
                        </button>
                        <div>
                          <p className="text-gray-800">{step.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timer */}
                    {step.timer && (
                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <Timer size={16} className="text-orange-600" />
                        <span className="font-semibold text-orange-600">{step.timer} minutes</span>
                        <button className="ml-2 px-3 py-1 bg-orange-100 text-orange-600 rounded hover:bg-orange-200 transition">
                          Start Timer
                        </button>
                      </div>
                    )}
                    
                    {/* Temperature Check */}
                    {step.temp && (
                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <Thermometer size={16} className="text-orange-600" />
                        <span className="font-semibold text-orange-600">
                          Check: {step.temp}°F ({Math.round((step.temp - 32) * 5/9)}°C)
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="text-orange-600" />
                Comments
              </h2>
              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <textarea 
                  placeholder="Share your experience with this recipe..."
                  className="w-full border-0 focus:ring-0 resize-none"
                  rows={3}
                />
                <div className="flex justify-end mt-2">
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
                    Post Comment
                  </button>
                </div>
              </div>
              <p className="text-gray-500 text-center py-8">No comments yet. Be the first to share your thoughts!</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Temperature Widget */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Thermometer className="text-orange-600" />
                Temperature Guide
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-600 p-4">
                  <p className="font-semibold text-green-900 mb-1">Safe Temperature</p>
                  <p className="text-2xl font-bold text-green-600">
                    {recipe.safeTemp}°F ({Math.round((recipe.safeTemp - 32) * 5/9)}°C)
                  </p>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>✓ Insert thermometer into thickest part</p>
                  <p>✓ Avoid touching bone</p>
                  <p>✓ Temperature continues to rise 5-10°F while resting</p>
                </div>
              </div>
            </div>

            {/* Nutrition */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4">Nutrition (per serving)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">Calories</p>
                  <p className="text-xl font-bold">{recipe.nutrition.calories}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Protein</p>
                  <p className="text-xl font-bold">{recipe.nutrition.protein}g</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Fat</p>
                  <p className="text-xl font-bold">{recipe.nutrition.fat}g</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Carbs</p>
                  <p className="text-xl font-bold">{recipe.nutrition.carbs}g</p>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-900">Pro Tips</h3>
              <ul className="space-y-2 text-sm text-orange-800">
                <li>• Pat meat completely dry for crispy skin</li>
                <li>• Don't overcrowd the pan</li>
                <li>• Let meat rest before cutting</li>
                <li>• Always use a meat thermometer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
