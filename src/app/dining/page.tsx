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
          <h2 id="dining-halls-heading" className="text-2xl font-semibold text-gray-800">Campus Dining Halls</h2>
        </div>
        <div className="text-center mb-4">
          <p className="text-gray-900 font-medium"><strong className="text-red-700">Menu for all campus dining options:</strong> <a href="https://dish.avifoodsystems.com/oberlincollege" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://dish.avifoodsystems.com/oberlincollege</a></p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3 text-gray-800">Stevenson Dining Hall</h3>
            <p className="text-gray-700 mb-3">Oberlin&apos;s main dining hall featuring a variety of food stations with diverse options.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Hours:</strong> Breakfast: 7:30am - 10:30am, Lunch: 11:30am - 1:30pm, Dinner: 5:00pm - 8:00pm, Weekend Brunch: 10:30am - 1:30pm</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Features:</strong> Vegetarian/Vegan Options, Allergen-Free Station, International Cuisine</p>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3 text-gray-800">Heritage Dining Hall</h3>
            <p className="text-gray-700 mb-3">Smaller dining hall with a cozy atmosphere and specialized menu items.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Hours:</strong> Breakfast: 8:00am - 10:00am, Lunch: 11:30am - 1:30pm, Dinner: 5:30pm - 7:30pm, Weekend: Closed</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Features:</strong> Rotating Global Cuisine, Themed Nights</p>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3 text-gray-800">Lord-Saunders Dining Hall</h3>
            <p className="text-gray-700 mb-3">Modern dining facility with fresh, locally-sourced ingredients.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Hours:</strong> Breakfast: 7:30am - 10:30am, Lunch: 11:00am - 2:00pm, Dinner: 5:00pm - 8:00pm, Weekend Brunch: 10:30am - 1:30pm</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Features:</strong> Farm-to-Table Options, Sustainable Practices, Build-Your-Own Stations</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Campus Cafes & Grab-and-Go */}
      <section className="bg-white p-8 rounded-lg shadow-md" aria-labelledby="cafes-heading">
        <div className="flex items-center mb-6">
          <FaCoffee className="text-red-700 mr-4 h-7 w-7" aria-hidden="true" />
          <h2 id="cafes-heading" className="text-2xl font-semibold text-gray-800">Campus Cafes & Grab-and-Go</h2>
        </div>
        <div className="text-center mb-4">
          <p className="text-gray-900 font-medium"><strong className="text-red-700">Menu for all campus dining options:</strong> <a href="https://dish.avifoodsystems.com/oberlincollege" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://dish.avifoodsystems.com/oberlincollege</a></p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3 text-gray-800">Azariah&apos;s Café</h3>
            <p className="text-gray-700 mb-3">Located in Mudd Library, offering coffee, tea, and light snacks.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Hours:</strong> Mon-Fri 8:00am - 11:00pm, Sat-Sun 10:00am - 11:00pm</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Features:</strong> Fair Trade Coffee, Study Space, Comfortable Seating</p>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3 text-gray-800">DeCafé</h3>
            <p className="text-gray-700 mb-3">Convenience store and café in Wilder Hall with a variety of grab-and-go options.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Hours:</strong> Mon-Fri 7:30am - 12:00am, Sat-Sun 10:00am - 12:00am</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Features:</strong> Sandwiches, Salads, Snacks, Beverages, Grocery Items</p>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3 text-gray-800">Skybar Cafe</h3>
            <p className="text-gray-700 mb-3">Café serving the Conservatory of Music community.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Hours:</strong> Mon-Fri 8:30am - 5:00pm, Sat-Sun Closed</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Features:</strong> Coffee, Tea, Light Snacks, Seating Area</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Downtown Restaurants */}
      <section className="bg-white p-8 rounded-lg shadow-md" aria-labelledby="restaurants-heading">
        <div className="flex items-center mb-6">
          <FaStore className="text-red-700 mr-4 h-7 w-7" aria-hidden="true" />
          <h2 id="restaurants-heading" className="text-2xl font-semibold text-gray-800">Downtown Restaurants</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3 text-gray-800">The Feve</h3>
            <p className="text-gray-700 mb-3">Popular gastropub with creative burgers, craft beers, and brunch.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Address:</strong> 30 S Main St, Oberlin, OH 44074</p>
            </div>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Cuisine:</strong> American, Gastropub</p>
            </div>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Features:</strong> Student Favorite, Weekend Brunch, Bar</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Link:</strong> <a href="https://www.thefeve.com/" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.thefeve.com/</a></p>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3 text-gray-800">Black River Wine Shop and Bar</h3>
            <p className="text-gray-700 mb-3">Wine shop and bar with a selection of wines, beers, and light fare.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Address:</strong> 15 S Main St, Oberlin, OH 44074</p>
            </div>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Cuisine:</strong> Wine Bar, Small Plates</p>
            </div>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Features:</strong> Wine Selection, Cozy Atmosphere, Evening Spot</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Link:</strong> <a href="https://www.blackriveroberlin.com/" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.blackriveroberlin.com/</a></p>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3 text-gray-800">Aladdin&apos;s Eatery</h3>
            <p className="text-gray-700 mb-3">Lebanese-American restaurant with healthy, flavorful options.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Address:</strong> 5 W College St, Oberlin, OH 44074</p>
            </div>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Cuisine:</strong> Lebanese, Mediterranean</p>
            </div>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Features:</strong> Vegetarian/Vegan Options, Fresh Ingredients</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Link:</strong> <a href="https://aladdins.com/" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://aladdins.com/</a></p>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-5 hover:border-red-300 transition-colors shadow-sm">
            <h3 className="font-medium text-xl mb-3 text-gray-800">Kim&apos;s</h3>
            <p className="text-gray-700 mb-3">Korean restaurant with authentic dishes and comfort food.</p>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Address:</strong> 23 Eric Nord Way Suite #1, Oberlin, OH 44074</p>
            </div>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Cuisine:</strong> Korean</p>
            </div>
            <div className="bg-gray-50 p-3 rounded mb-2">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Features:</strong> Bibimbap, Bulgogi, Cozy Atmosphere</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-gray-900 font-medium"><strong className="text-red-700">Link:</strong> <a href="https://www.facebook.com/kimsgrocerytakeout/" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.facebook.com/kimsgrocerytakeout/</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 