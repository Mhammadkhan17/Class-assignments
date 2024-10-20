// components/ImageCardsSection.jsx
'use client';

import ImageCard from './imageCard';

const ImageCardsSection = () => {
  const cardsData = [
    {
      imgSrc: '/images/Card1.png',
      title: 'AI for Community: Building a Better Tomorrow"',
      description: '"Explore how Artificial Intelligence is enhancing services, fostering innovation, and driving social good within our communities',
    },
    {
      imgSrc: '/images/Card2.png',
      title: 'AI Adventures: Exploring the Future Today!',
      description: 'Join us on a fun journey to create, innovate, and shape the world with Artificial Intelligence!',
    },
    {
      imgSrc: '/images/Card3.jpg',
      title: 'GIAIC: Empowering Minds with Free AI Education',
      description: 'Join GIAIC to access cutting-edge AI courses for free and shape the future of technology',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <ImageCard
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCardsSection;