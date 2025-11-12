import Link from 'next/link'
import { Thermometer } from 'lucide-react'

const meats = [
  {
    id: 'chicken',
    name: 'Chicken',
    description: 'Master safe cooking temps and juicy results',
    safeTemp: 165,
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6',
  },
  {
    id: 'beef',
    name: 'Beef',
    description: 'From rare to well-done, cook it perfectly',
    safeTemp: 145,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d',
  },
  {
    id: 'pork',
    name: 'Pork',
    description: 'Tender, flavorful pork every time',
    safeTemp: 145,
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55',
  },
  {
    id: 'lamb',
    name: 'Lamb',
    description: 'Learn the art of cooking lamb',
    safeTemp: 145,
    image: 'https://images.unsplash.com/photo-1595777216528-071e0127ccbf',
  },
  {
    id: 'turkey',
    name: 'Turkey',
    description: 'Perfect holiday turkey and everyday meals',
    safeTemp: 165,
    image: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98',
  },
  {
    id: 'fish',
    name: 'Fish & Seafood',
    description: 'Delicate seafood cooking techniques',
    safeTemp: 145,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2',
  },
]

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Learn to Cook Meat</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Comprehensive guides for every type of meat. Learn preparation techniques, 
            safe temperatures, and pro tips to avoid common mistakes.
          </p>
        </div>
      </section>

      {/* Meat Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meats.map((meat) => (
              <Link 
                key={meat.id} 
                href={`/learn/${meat.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden">
                  <div className="aspect-video relative overflow-hidden bg-gray-200">
                    <img 
                      src={meat.image}
                      alt={meat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{meat.name}</h2>
                    <p className="text-gray-600 mb-4">{meat.description}</p>
                    <div className="flex items-center gap-2 text-sm text-orange-600">
                      <Thermometer size={16} />
                      <span className="font-semibold">Safe temp: {meat.safeTemp}°F</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Essential Meat Cooking Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TipCard 
              title="Always Use a Thermometer"
              description="The only reliable way to ensure meat is cooked safely is to check internal temperature with a food thermometer."
            />
            <TipCard 
              title="Let Meat Rest"
              description="Allow cooked meat to rest 5-10 minutes before cutting. This redistributes juices for better flavor and texture."
            />
            <TipCard 
              title="Pat Meat Dry"
              description="Dry meat before cooking to achieve better browning and crispy exteriors."
            />
            <TipCard 
              title="Room Temperature Matters"
              description="Take meat out of the fridge 15-30 minutes before cooking for more even results."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function TipCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
