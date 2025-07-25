import React, { useEffect, useState, useRef } from 'react';
import { ImStarFull, ImStarEmpty } from "react-icons/im";
import { Link } from '@inertiajs/react';

const ProductCard = ({ item, handleClick, isStarred, delay = 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [item.photo1, item.photo2, item.photo3]
    .filter(Boolean)
    .map(photo => `/storage/${photo}`);

  useEffect(() => {
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 5000); // har 3 sekundda
      return () => clearInterval(interval);
    }, delay); // har bir kartaga alohida delay

    return () => clearTimeout(start);
  }, [delay, images.length]);

  return (
    <Link href={`/detail/${item.id}`} className='rounded-lg flex flex-col h-80'>
      <div className='relative h-[65%] overflow-hidden rounded-t-lg'>
        <div
          className="flex transition-transform duration-700 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={`${src}?v=${Date.now()}`}
              alt={item.product_name}
              className="w-full flex-shrink-0 object-cover h-full"
              onError={(e) => {
                e.target.src = '/path/to/fallback-image.jpg';
              }}
            />
          ))}
        </div>

        <button onClick={(e) => handleClick(e, item.id)} className='absolute top-4 right-4 z-10'>
          {isStarred ? (
            <ImStarFull className="text-2xl text-yellow-400" />
          ) : (
            <ImStarEmpty className="text-2xl text-black" />
          )}
        </button>
      </div>

      <div className='flex items-end justify-between'>
        <div className='p-2'>
          <p className='text-base font-semibold'>{item.product_name.toUpperCase()}</p>
          <p className='text-base'>{item.price} <span className='text-sm text-slate-500'>so'm</span></p>
          {item.sizes.map((size, idx) => (
            <span key={idx} className='text-sm text-slate-500'>
              {size}{idx < item.sizes.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
        <Link href={`/detail/${item.id}`} className='hidden sm:block'>
          <button className='bg-black text-white w-full p-2 rounded-lg hover:bg-gray-800 transition xl:px-8'>
            Ko'proq
          </button>
        </Link>
      </div>
    </Link>
  );
};

export default ProductCard;
