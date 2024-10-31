"use client";

import { useParams, useRouter } from 'next/navigation';

const carData = {
  'toyota-corolla': {
    name: 'Toyota Corolla',
    price: 'PKR 59.7 - 75.5 lacs',
    reviews: 622,
    rating: 3.5,
    image: 'https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674',
    description: 'A reliable and fuel-efficient sedan.',
    mileage: '28 km/l',
    engine: '1.8L',
    transmission: 'Automatic',
    fuelType: 'Petrol'
  },
  'suzuki-alto': {
    name: 'Suzuki Alto',
    price: 'PKR 23.3 - 30.5 lacs',
    reviews: 199,
    rating: 3,
    image: 'https://cache4.pakwheels.com/system/car_generation_pictures/6013/medium/Suzuki_Alto_-_PNG.png?1635945100',
    description: 'A compact and economical hatchback.',
    mileage: '25 km/l',
    engine: '0.6L',
    transmission: 'Manual',
    fuelType: 'Petrol'
  },
  'honda-city': {
    name: 'Honda City',
    price: 'PKR 46.5 - 58.5 lacs',
    reviews: 456,
    rating: 3.5,
    image: 'https://cache1.pakwheels.com/system/car_generation_pictures/6425/medium/Honda_City_Front.jpg?1651424945',
    description: 'The Honda City is a line of subcompact cars manufactured by Honda.',
    mileage: '20 km/l',
    engine: '1.5L',
    transmission: 'Automatic',
    fuelType: 'Petrol'
  },
  'honda-civic': {
    name: 'Honda Civic',
    price: 'PKR 86.6 - 99.0 lacs',
    reviews: 359,
    rating: 3.5,
    image: 'https://cache4.pakwheels.com/system/car_generation_pictures/7370/medium/Cover.jpg?1677570254',
    description: 'The Honda Civic is a line of cars manufactured by Honda.',
    mileage: '18 km/l',
    engine: '2.0L',
    transmission: 'Automatic',
    fuelType: 'Petrol'
  }
};

const CarDetails = () => {
  const { carId } = useParams();
  const car = carData[carId];
  const router = useRouter();

  if (!car) {
    return <div>Car not found</div>;
  }

  const handlePlaceOrder = () => {
    router.push(`/details/${carId}/order`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">{car.name}</h1>
      <img src={car.image} alt={`${car.name} image`} className="h-96 max-w-screen-sm mx-auto my-4" />
      <p className="text-lg text-center">{car.price}</p>
      <div className="flex justify-center my-4 space-x-4">
        <button className="bg-white text-blue-500 py-2 px-4 rounded border border-blue-500 hover:bg-blue-500 hover:text-white transition">Contact Seller</button>
        <button className="bg-white text-blue-500 py-2 px-4 rounded border border-blue-500 hover:bg-blue-500 hover:text-white transition">Book Test Drive</button>
        <button className="bg-white text-blue-500 py-2 px-4 rounded border border-blue-500 hover:bg-blue-500 hover:text-white transition">View on Map</button>
        <button className="bg-white text-blue-500 py-2 px-4 rounded border border-blue-500 hover:bg-blue-500 hover:text-white transition">Share</button>
      </div>
      <div className="text-center">
        <p>{car.reviews} Reviews</p>
        <p>{'★'.repeat(Math.floor(car.rating))}{car.rating % 1 ? '☆' : ''}</p>
      </div>
      <p className="mt-4 text-center">{car.description}</p>
      <div className='text-center'>
        <p>Mileage: {car.mileage}</p>
        <p>Engine: {car.engine}</p>
        <p>Transmission: {car.transmission}</p>
        <p>Fuel Type: {car.fuelType}</p>
      </div>
      <div className="flex justify-center mt-8">
        <button onClick={handlePlaceOrder} className="bg-white text-blue-500 py-2 px-4 rounded border border-blue-500 hover:bg-blue-500 hover:text-white transition">Place Order</button>
      </div>
    </div>
  );
};

export default CarDetails;
