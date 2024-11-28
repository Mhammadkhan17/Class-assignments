// components/card.js
import Image from 'next/image';

const Card = ({ title, price, imageUrl }) => {
  return (
    <div className="border p-4 rounded shadow-xl">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          width={500} 
          height={300}
        />
      )}
      <div className='bg-gray-200 p-5 rounded-lg'>
        <h2 className="text-xl font-bold text-center text-blue-950">{title}</h2>
      <p className='text-center font-semibold pt-3 text-green-600'>{price}</p>
      <p className='text-red-600 text-center'>★★★★★ 354 review</p>
      </div>
    </div>
  );
};

export default Card;