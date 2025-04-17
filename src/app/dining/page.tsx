import { FaUtensils, FaCoffee, FaStore } from 'react-icons/fa';

export default function DiningPage() {
  return (
    <div className="space-y-10">
      <header className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-5">Dining Options</h1>
        <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">
          Explore dining halls, cafes, and restaurants on campus and in downtown Oberlin.
        </p>
      </header>
      
      {/* Campus Dining Halls */}
      <section className="bg-white p-8 rounded-lg shadow-md" aria-labelledby="dining-halls-heading">
        <div className="flex items-center mb-6">
          <FaUtensils className="text-red-700 mr-4 h-7 w-7" aria-hidden="true" />
          <h2 id="dining-halls-heading" className="text-2xl font-semibold">Campus Dining Halls</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3">Stevenson Dining Hall</h3>
            <p className="text-gray-700 mb-3">Oberlin&apos;s main dining hall featuring a variety of food stations with diverse options.</p>
            <p className="text-lg mb-2"><strong>Hours:</strong></p>
            <ul className="text-base text-gray-700 list-disc pl-6 mb-3">
              <li>Breakfast: 7:30am - 10:30am</li>
              <li>Lunch: 11:30am - 1:30pm</li>
              <li>Dinner: 5:00pm - 8:00pm</li>
              <li>Weekend Brunch: 10:30am - 1:30pm</li>
            </ul>
            <p className="text-base"><strong>Features:</strong> Vegetarian/Vegan Options, Allergen-Free Station, International Cuisine</p>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3">Dascomb Dining Hall</h3>
            <p className="text-gray-700 mb-3">Comfortable dining hall with a home-style atmosphere and varied menu options.</p>
            <p className="text-lg mb-2"><strong>Hours:</strong></p>
            <ul className="text-base text-gray-700 list-disc pl-6 mb-3">
              <li>Breakfast: 8:00am - 10:00am</li>
              <li>Lunch: 11:30am - 1:30pm</li>
              <li>Dinner: 5:30pm - 7:30pm</li>
              <li>Weekend: Limited Hours</li>
            </ul>
            <p className="text-base"><strong>Features:</strong> Comfort Food, Salad Bar, Dessert Station</p>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3">Talcott Dining Hall</h3>
            <p className="text-gray-700 mb-3">Smaller dining hall with a cozy atmosphere and specialized menu items.</p>
            <p className="text-lg mb-2"><strong>Hours:</strong></p>
            <ul className="text-base text-gray-700 list-disc pl-6 mb-3">
              <li>Breakfast: 8:00am - 10:00am</li>
              <li>Lunch: 11:30am - 1:30pm</li>
              <li>Dinner: 5:30pm - 7:30pm</li>
              <li>Weekend: Closed</li>
            </ul>
            <p className="text-base"><strong>Features:</strong> Rotating Global Cuisine, Themed Nights</p>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3">Lord-Saunders Dining Hall</h3>
            <p className="text-gray-700 mb-3">Modern dining facility with fresh, locally-sourced ingredients.</p>
            <p className="text-lg mb-2"><strong>Hours:</strong></p>
            <ul className="text-base text-gray-700 list-disc pl-6 mb-3">
              <li>Breakfast: 7:30am - 10:30am</li>
              <li>Lunch: 11:00am - 2:00pm</li>
              <li>Dinner: 5:00pm - 8:00pm</li>
              <li>Weekend Brunch: 10:30am - 1:30pm</li>
            </ul>
            <p className="text-base"><strong>Features:</strong> Farm-to-Table Options, Sustainable Practices, Build-Your-Own Stations</p>
          </div>
        </div>
      </section>
      
      {/* Campus Cafes & Grab-and-Go */}
      <section className="bg-white p-8 rounded-lg shadow-md" aria-labelledby="cafes-heading">
        <div className="flex items-center mb-6">
          <FaCoffee className="text-red-700 mr-4 h-7 w-7" aria-hidden="true" />
          <h2 id="cafes-heading" className="text-2xl font-semibold">Campus Cafes & Grab-and-Go</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3">Azariah&apos;s Café</h3>
            <p className="text-gray-700 mb-3">Located in Mudd Library, offering coffee, tea, and light snacks.</p>
            <p className="text-base mb-2"><strong>Hours:</strong> Mon-Fri 8:00am - 11:00pm, Sat-Sun 10:00am - 11:00pm</p>
            <p className="text-base"><strong>Features:</strong> Fair Trade Coffee, Study Space, Comfortable Seating</p>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3">DeCafé</h3>
            <p className="text-gray-700 mb-3">Convenience store and café in Wilder Hall with a variety of grab-and-go options.</p>
            <p className="text-base mb-2"><strong>Hours:</strong> Mon-Fri 7:30am - 12:00am, Sat-Sun 10:00am - 12:00am</p>
            <p className="text-base"><strong>Features:</strong> Sandwiches, Salads, Snacks, Beverages, Grocery Items</p>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3">Science Center Café</h3>
            <p className="text-gray-700 mb-3">Quick service café in the Science Center.</p>
            <p className="text-base mb-2"><strong>Hours:</strong> Mon-Fri 8:00am - 4:00pm, Sat-Sun Closed</p>
            <p className="text-base"><strong>Features:</strong> Coffee, Tea, Pastries, Sandwiches</p>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3">Conservatory Café</h3>
            <p className="text-gray-700 mb-3">Café serving the Conservatory of Music community.</p>
            <p className="text-base mb-2"><strong>Hours:</strong> Mon-Fri 8:30am - 5:00pm, Sat-Sun Closed</p>
            <p className="text-base"><strong>Features:</strong> Coffee, Tea, Light Snacks, Seating Area</p>
          </div>
        </div>
      </section>
      
      {/* Downtown Restaurants */}
      <section className="bg-white p-8 rounded-lg shadow-md" aria-labelledby="restaurants-heading">
        <div className="flex items-center mb-6">
          <FaStore className="text-red-700 mr-4 h-7 w-7" aria-hidden="true" />
          <h2 id="restaurants-heading" className="text-2xl font-semibold">Downtown Restaurants</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3">The Feve</h3>
            <p className="text-gray-700 mb-3">Popular gastropub with creative burgers, craft beers, and brunch.</p>
            <p className="text-base mb-2"><strong>Cuisine:</strong> American, Gastropub</p>
            <p className="text-base"><strong>Features:</strong> Student Favorite, Weekend Brunch, Bar</p>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3">Black River Café</h3>
            <p className="text-gray-700 mb-3">Casual café serving breakfast and lunch with vegan and vegetarian options.</p>
            <p className="text-base mb-2"><strong>Cuisine:</strong> American, Café</p>
            <p className="text-base"><strong>Features:</strong> Vegetarian-Friendly, Good Coffee, Morning Favorite</p>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3">Aladdin&apos;s Eatery</h3>
            <p className="text-gray-700 mb-3">Lebanese-American restaurant with healthy, flavorful options.</p>
            <p className="text-base mb-2"><strong>Cuisine:</strong> Lebanese, Mediterranean</p>
            <p className="text-base"><strong>Features:</strong> Vegetarian/Vegan Options, Fresh Ingredients</p>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3">Agave Burrito Bar & Tequilería</h3>
            <p className="text-gray-700 mb-3">Mexican restaurant with burritos, tacos, and margaritas.</p>
            <p className="text-base mb-2"><strong>Cuisine:</strong> Mexican</p>
            <p className="text-base"><strong>Features:</strong> Build-Your-Own Burritos, Bar, Casual</p>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3">Kim&apos;s</h3>
            <p className="text-gray-700 mb-3">Korean restaurant with authentic dishes and comfort food.</p>
            <p className="text-base mb-2"><strong>Cuisine:</strong> Korean</p>
            <p className="text-base"><strong>Features:</strong> Bibimbap, Bulgogi, Cozy Atmosphere</p>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3">Blue Rooster Bakehouse</h3>
            <p className="text-gray-700 mb-3">Artisan bakery with fresh breads, pastries, and coffee.</p>
            <p className="text-base mb-2"><strong>Cuisine:</strong> Bakery, Café</p>
            <p className="text-base"><strong>Features:</strong> Homemade Pastries, Specialty Coffee, Breakfast</p>
          </div>
        </div>
      </section>
      
      {/* Meal Plan Information */}
      <section className="bg-white p-8 rounded-lg shadow-md" aria-labelledby="meal-plan-heading">
        <h2 id="meal-plan-heading" className="text-2xl font-semibold mb-5">Meal Plan Information</h2>
        <div className="space-y-5">
          <p className="text-lg text-gray-700">
            Oberlin offers various meal plans to fit different student needs and lifestyles.
            All meal plans include a combination of meal swipes and Flex Points that can be used 
            at campus dining halls and retail locations.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-300 rounded-lg p-5 shadow-sm">
              <h3 className="font-medium text-xl mb-2">Traditional Plan</h3>
              <p className="text-gray-700 text-base">21 meals per week + $150 Flex Points</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-5 shadow-sm">
              <h3 className="font-medium text-xl mb-2">Block Plan</h3>
              <p className="text-gray-700 text-base">200 meals per semester + $250 Flex Points</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-5 shadow-sm">
              <h3 className="font-medium text-xl mb-2">Flex Plan</h3>
              <p className="text-gray-700 text-base">14 meals per week + $300 Flex Points</p>
            </div>
          </div>
          <p className="text-lg text-gray-700">
            For more information about meal plans, visit the Campus Dining Services office in Wilder Hall 
            or check the Oberlin Dining website.
          </p>
        </div>
      </section>
    </div>
  );
} 