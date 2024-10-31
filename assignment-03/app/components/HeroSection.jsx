export default function HeroSection() {
    return (
      <section className="relative flex flex-col items-center justify-center h-80 text-white font-light z-10">
        <div className="relative text-center">
          <h1 className="text-3xl font-semibold sm:text-6xl drop-shadow-lg">
            Find used cars in pakistan
          </h1>
          <p className="mt-4 text-lg sm:text-xl drop-shadow-md"> 
          With thousands of cars, we have just the right one for you
          </p>
          <div className="mt-8 w-full max-w-3xl">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 text-black">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="border border-gray-300 rounded-md px-4 py-2 bg-white text-black">
                <option value="">Select City</option>
                <option value="karachi">Karachi</option>
                <option value="lahore">Lahore</option>
                <option value="islamabad">Islamabad</option>
              </select>
              <select className="border border-gray-300 rounded-md px-4 py-2 bg-white text-black">
                <option value="">Price Range</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                <span className="mr-2"><i className="fas fa-search"></i></span>
                <span>Search</span>
              </button>
            </div>
          </div>
          <button className="m-2 bg-blue-500 rounded text p-2"> advanced filter </button>
        </div>
      </section>
    );
  }
  