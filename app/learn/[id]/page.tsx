'use client'

import { useState } from 'react'
import { Thermometer, Utensils, AlertTriangle, BookOpen } from 'lucide-react'

const meatData: any = {
  chicken: {
    name: 'Chicken',
    safeTemp: 165,
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6',
    preparation: [
      'Pat chicken dry with paper towels before cooking',
      'Remove chicken from refrigerator 15-20 minutes before cooking',
      'Trim excess fat and skin if desired',
      'Season generously with salt and pepper',
      'For whole chickens, truss legs for even cooking',
    ],
    temps: [
      { doneness: 'Safe Minimum', temp: 165, color: 'text-green-600' },
      { doneness: 'Breast (juicy)', temp: 165, color: 'text-green-600' },
      { doneness: 'Thighs/Dark meat', temp: 175, color: 'text-orange-600' },
    ],
    tools: [
      'Instant-read thermometer (essential)',
      'Heavy skillet or roasting pan',
      'Tongs or spatula',
      'Basting brush (optional)',
    ],
    mistakes: [
      'Not using a thermometer - visual cues are unreliable',
      'Overcooking breast meat - cook to exactly 165°F',
      'Cooking straight from the fridge - brings uneven results',
      'Cutting into meat immediately - let it rest 5-10 minutes',
      'Using high heat throughout - start high, then reduce',
    ],
  },
  beef: {
    name: 'Beef',
    safeTemp: 145,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d',
    preparation: [
      'Bring steak to room temperature (20-30 minutes)',
      'Pat completely dry for better searing',
      'Season heavily with salt and pepper',
      'For thick cuts, consider reverse searing method',
      'Oil the meat, not the pan, for steaks',
    ],
    temps: [
      { doneness: 'Rare', temp: 125, color: 'text-red-600' },
      { doneness: 'Medium Rare', temp: 135, color: 'text-red-500' },
      { doneness: 'Medium', temp: 145, color: 'text-orange-600' },
      { doneness: 'Medium Well', temp: 150, color: 'text-orange-700' },
      { doneness: 'Well Done', temp: 160, color: 'text-gray-600' },
      { doneness: 'Ground Beef', temp: 160, color: 'text-green-600' },
    ],
    tools: [
      'Cast iron skillet or grill',
      'Instant-read thermometer',
      'Tongs (never pierce meat)',
      'Wire rack for resting',
    ],
    mistakes: [
      'Flipping too often - flip once for steaks',
      'Moving meat around in pan - let it sear undisturbed',
      'Skipping the rest - always rest 5-10 minutes',
      'Using a fork to flip - use tongs to avoid losing juices',
      'Cooking ground beef to less than 160°F - unsafe',
    ],
  },
  pork: {
    name: 'Pork',
    safeTemp: 145,
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55',
    preparation: [
      'Modern pork is safe at 145°F (medium)',
      'Brine for extra juiciness (especially chops)',
      'Score fat cap on larger roasts',
      'Remove from fridge 20 minutes before cooking',
      'Pat dry before searing',
    ],
    temps: [
      { doneness: 'Medium (USDA Safe)', temp: 145, color: 'text-orange-600' },
      { doneness: 'Medium Well', temp: 150, color: 'text-orange-700' },
      { doneness: 'Well Done', temp: 160, color: 'text-gray-600' },
      { doneness: 'Ground Pork', temp: 160, color: 'text-green-600' },
      { doneness: 'Pulled Pork', temp: 195, color: 'text-red-600' },
    ],
    tools: [
      'Meat thermometer',
      'Heavy oven-safe skillet',
      'Basting brush',
      'Sharp knife for scoring',
    ],
    mistakes: [
      'Overcooking - 145°F is perfectly safe for whole cuts',
      'High heat throughout - use medium heat for chops',
      'Not resting meat - essential for juiciness',
      'Cooking ground pork to less than 160°F',
      'Ignoring carryover cooking - remove 5° before target',
    ],
  },
  lamb: {
    name: 'Lamb',
    safeTemp: 145,
    image: 'https://images.unsplash.com/photo-1595777216528-071e0127ccbf',
    preparation: [
      'Trim silver skin but leave some fat for flavor',
      'Marinate or dry rub for enhanced flavor',
      'Bring to room temperature before cooking',
      'Score fat cap in crosshatch pattern',
      'Season generously - lamb can handle bold flavors',
    ],
    temps: [
      { doneness: 'Rare', temp: 125, color: 'text-red-600' },
      { doneness: 'Medium Rare', temp: 135, color: 'text-red-500' },
      { doneness: 'Medium', temp: 145, color: 'text-orange-600' },
      { doneness: 'Medium Well', temp: 150, color: 'text-orange-700' },
      { doneness: 'Ground Lamb', temp: 160, color: 'text-green-600' },
    ],
    tools: [
      'Instant-read thermometer',
      'Grill or cast iron pan',
      'Sharp knife',
      'Meat tenderizer (optional)',
    ],
    mistakes: [
      'Cooking beyond medium - lamb gets tough',
      'Not trimming silver skin - causes curling',
      'Skipping marinade - lamb benefits from flavor',
      'Inadequate resting - rest 10+ minutes for larger cuts',
      'Cooking straight from fridge',
    ],
  },
  turkey: {
    name: 'Turkey',
    safeTemp: 165,
    image: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98',
    preparation: [
      'Thaw completely in refrigerator (24 hours per 5 lbs)',
      'Brine for juicier meat (wet or dry)',
      'Pat dry inside and out',
      'Tuck wing tips under for even cooking',
      'Use a roasting rack',
    ],
    temps: [
      { doneness: 'Breast', temp: 165, color: 'text-green-600' },
      { doneness: 'Thigh', temp: 175, color: 'text-orange-600' },
      { doneness: 'Ground Turkey', temp: 165, color: 'text-green-600' },
    ],
    tools: [
      'Roasting pan with rack',
      'Meat thermometer',
      'Baster or brush',
      'Kitchen twine for trussing',
    ],
    mistakes: [
      'Not thawing completely - food safety risk',
      'Stuffing the cavity - slows cooking, risk of bacteria',
      'Cooking at too high temperature - dries out breast',
      'Not letting rest - wait 20-30 minutes before carving',
      'Only checking one spot - test multiple locations',
    ],
  },
  fish: {
    name: 'Fish & Seafood',
    safeTemp: 145,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2',
    preparation: [
      'Buy fresh fish the day you plan to cook it',
      'Pat fish completely dry',
      'Remove pin bones with tweezers',
      'Season lightly - fish flavors are delicate',
      'Oil the fish, not the pan',
    ],
    temps: [
      { doneness: 'Fish (USDA)', temp: 145, color: 'text-green-600' },
      { doneness: 'Fish (chef preference)', temp: 125, color: 'text-orange-600' },
      { doneness: 'Shrimp/Lobster', temp: 145, color: 'text-green-600' },
      { doneness: 'Scallops', temp: 125, color: 'text-orange-600' },
    ],
    tools: [
      'Thin flexible spatula',
      'Instant-read thermometer',
      'Non-stick or well-seasoned pan',
      'Fish tweezers',
    ],
    mistakes: [
      'Overcooking - fish continues cooking after removal',
      'Moving fish too soon - let it release naturally',
      'High heat - medium-high is usually sufficient',
      'Not drying fish - moisture prevents browning',
      'Cooking straight from fridge - brings uneven results',
    ],
  },
}

export default function MeatDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('preparation')
  const meat = meatData[params.id]

  if (!meat) {
    return <div className="container mx-auto px-4 py-12">Meat not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">{meat.name} Cooking Guide</h1>
              <p className="text-xl text-gray-600 mb-6">
                Master the art of cooking {meat.name.toLowerCase()} with proper techniques, 
                safe temperatures, and expert tips.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-600 p-4">
                <div className="flex items-center gap-2">
                  <Thermometer className="text-orange-600" size={24} />
                  <div>
                    <p className="font-semibold text-orange-900">Safe Internal Temperature</p>
                    <p className="text-2xl font-bold text-orange-600">{meat.safeTemp}°F ({Math.round((meat.safeTemp - 32) * 5/9)}°C)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img 
                src={meat.image}
                alt={meat.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto">
            <TabButton 
              active={activeTab === 'preparation'} 
              onClick={() => setActiveTab('preparation')}
              icon={<Utensils size={20} />}
            >
              Preparation
            </TabButton>
            <TabButton 
              active={activeTab === 'temperatures'} 
              onClick={() => setActiveTab('temperatures')}
              icon={<Thermometer size={20} />}
            >
              Temperatures
            </TabButton>
            <TabButton 
              active={activeTab === 'tools'} 
              onClick={() => setActiveTab('tools')}
              icon={<BookOpen size={20} />}
            >
              Tools
            </TabButton>
            <TabButton 
              active={activeTab === 'mistakes'} 
              onClick={() => setActiveTab('mistakes')}
              icon={<AlertTriangle size={20} />}
            >
              Common Mistakes
            </TabButton>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {activeTab === 'preparation' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Preparation Steps</h2>
                <ul className="space-y-4">
                  {meat.preparation.map((step: string, index: number) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 pt-1">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'temperatures' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Temperature Guide</h2>
                <div className="space-y-4">
                  {meat.temps.map((temp: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-semibold text-lg">{temp.doneness}</span>
                      <span className={`text-2xl font-bold ${temp.color}`}>
                        {temp.temp}°F ({Math.round((temp.temp - 32) * 5/9)}°C)
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600">
                  <p className="text-blue-900 font-semibold mb-2">💡 Pro Tip: Carryover Cooking</p>
                  <p className="text-blue-800">
                    Remove meat from heat 5°F below target temperature. It will continue 
                    cooking while resting, reaching the perfect final temperature.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'tools' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Essential Tools</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {meat.tools.map((tool: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span className="text-gray-700">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'mistakes' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Common Mistakes to Avoid</h2>
                <ul className="space-y-4">
                  {meat.mistakes.map((mistake: string, index: number) => (
                    <li key={index} className="flex gap-4 p-4 bg-red-50 border-l-4 border-red-600">
                      <AlertTriangle className="flex-shrink-0 text-red-600" size={24} />
                      <span className="text-gray-700">{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function TabButton({ active, onClick, icon, children }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium whitespace-nowrap transition ${
        active 
          ? 'border-orange-600 text-orange-600' 
          : 'border-transparent text-gray-600 hover:text-gray-900'
      }`}
    >
      {icon}
      {children}
    </button>
  )
}
