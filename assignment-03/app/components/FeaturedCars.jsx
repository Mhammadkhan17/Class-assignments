"use client";

import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';

// Custom Next Arrow Component
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      →
    </div>
  );
}

// Custom Prev Arrow Component
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      ←
    </div>
  );
}

export default function FeaturedNewCars() {
  const [activeTab, setActiveTab] = useState('Popular');

  const cars = {
    Popular: [
      { name: 'Toyota Corolla', price: 'PKR 59.7 - 75.5 lacs', reviews: 622, rating: 3.5, image: '/Corolla.png', link: '/details/toyota-corolla' },
      { name: 'Suzuki Alto', price: 'PKR 23.3 - 30.5 lacs', reviews: 199, rating: 3, image: '/Suzuki_Alto.png', link: '/details/suzuki-alto' },
      { name: 'Honda City', price: 'PKR 46.5 - 58.5 lacs', reviews: 456, rating: 3.5, image: '/Honda_City.png', link: '/details/honda-city' },
      { name: 'Honda Civic', price: 'PKR 86.6 - 99.0 lacs', reviews: 359, rating: 3.5, image: '/Honda_Civic.png', link: '/details/honda-civic' },
    ],
    Upcoming: [
      { name: 'Upcoming Car 1', price: 'PKR XX.X - XX.X lacs', reviews: 0, rating: 0, image: 'https://cdn.pixabay.com/photo/2020/08/14/14/56/electric-car-5489966_960_720.png', link: '/details/upcoming-car1' },
      { name: 'Upcoming Car 2', price: 'PKR XX.X - XX.X lacs', reviews: 0, rating: 0, image: 'https://cdn.pixabay.com/photo/2020/08/13/15/54/car-5486212_960_720.png', link: '/details/upcoming-car2' },
    ],
    NewlyLaunched: [
      { name: 'Newly Launched Car 1', price: 'PKR XX.X - XX.X lacs', reviews: 0, rating: 0, image: 'https://cdn.pixabay.com/photo/2020/07/12/17/59/tesla-5397965_960_720.png', link: '/details/newly-launched-car1' },
      { name: 'Newly Launched Car 2', price: 'PKR XX.X - XX.X lacs', reviews: 0, rating: 0, image: 'https://cdn.pixabay.com/photo/2020/08/05/00/55/car-5464761_960_720.png', link: '/details/newly-launched-car2' },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Featured New Cars</h2>
          <a href="#" className="text-blue-500 hover:underline">View All New Cars</a>
        </div>
        <div className="flex space-x-4 mb-4">
          {['Popular', 'Upcoming', 'Newly Launched'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 border-b-2 hover:bg-gray-200 transition-colors ${activeTab === tab ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <Slider {...settings}>
          {cars[activeTab] && cars[activeTab].map((car, index) => (
            <div key={index} className="p-4">
              <Link href={car.link}>
                <div className="flex flex-col items-center bg-white p-4 shadow rounded cursor-pointer">
                  <Image src={car.image} alt={`${car.name} image`} width={'1000'} height={'1000'} className="h-40 w-96 object-contain mb-4" />
                  <div>
                    <h3 className="text-lg font-bold">{car.name}</h3>
                    <p className="text-gray-500">{car.price}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span>{car.reviews} Reviews</span>
                      <span>{'★'.repeat(Math.floor(car.rating))}{car.rating % 1 ? '☆' : ''}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
