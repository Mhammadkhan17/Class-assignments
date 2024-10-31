export default function PromoSection() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center items-center mb-10">
          <hr className="absolute w-full border-t border-gray-300" />
          <h1 className="relative z-10 bg-white px-4 text-3xl font-bold text-gray-700">Sell Your Car with PakWheels</h1>
        </div>
        <div className="p-6 rounded shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Side: Post your Ad */}
            <div className="md:w-1/2 mb-8 md:mb-0 pr-4">
              <h2 className="text-xl font-bold mb-2">Post your Ad on PakWheels</h2>
              <ul className="list-none pl-5 mb-4">
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">&#10003;</span> Post your Ad for Free in 3 Easy Steps
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">&#10003;</span> Get Genuine offers from Verified Buyers
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">&#10003;</span> Sell your car Fast at the Best Price
                </li>
              </ul>
              <button className="bg-red-700 text-white py-2 px-4 mx-0 md:mx-20 my-5 rounded hover:bg-red-600 transition">Post Your Ad</button>
            </div>

            {/* Center: Vertical OR text */}
            <div className="relative flex flex-col items-center justify-center mx-4 mb-8 md:mb-0">
              <div className="absolute inset-y-0 flex items-center">
                <hr className="h-full border-l border-gray-300" />
              </div>
              <span className="relative z-10 bg-white px-10 md:px-20 text-xl font-bold text-gray-700">OR</span>
            </div>

            {/* Right Side: Try PakWheels Sell It For Me */}
            <div className="md:w-1/2 pl-4">
              <h2 className="text-xl font-bold mb-2">Try PakWheels Sell It For Me</h2>
              <ul className="list-none pl-5 mb-4">
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">&#10003;</span> Dedicated Sales Expert to Sell your Car
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">&#10003;</span> We Bargain for you and share the Best Offer
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">&#10003;</span> We ensure Safe & Secure Transaction
                </li>
              </ul>
              <button className="bg-blue-700 text-white py-2 px-4 mx-0 md:mx-20 my-5 rounded hover:bg-blue-600 transition">Register Your Car</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
