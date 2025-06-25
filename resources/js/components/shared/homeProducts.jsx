import React, { useState } from 'react'
import { Link } from '@inertiajs/react';
import { HiOutlineChevronRight } from "react-icons/hi";
import { Navigation } from 'swiper/modules';
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { homeCard } from '@/components/shared/lists';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const HomeProducts = ({ data }) => {
    const [starredCards, setStarredCards] = useState({});

    const handleClick = (event, id) => {
        event.preventDefault();
        setStarredCards((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    }
    console.log(data);
    return (
        <div>
            <div className='px-5 xl:px-20'>
                <div className='flex items-center justify-between my-3'>
                    <h3 style={{ fontFamily: 'Oswald' }}
                        className='font-bold text-2xl'
                    >
                        Oyoq kiyimlar
                    </h3>
                    <h4
                        style={{ fontFamily: 'Oswald' }}
                        className='border-b-2 border-black text-xl flex items-center p-1'
                    >
                        <Link href={"/shoes"} className='md:hidden'>Ko'proq</Link>
                        <Link href={"/shoes"} className='hidden md:block'>Ko'proq maxsulot</Link>
                        <HiOutlineChevronRight />
                    </h4>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={2}
                    navigation
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {
                        data.slice(0, 8).map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link href={`/detail`} className='border-2 rounded-lg flex flex-col h-80'>
                                    <div className='flex justify-end h-[75%] relative rounded-t-lg'>
                                        <img
                                            src={`/storage/${item.photo1}?v=${Date.now()}`}
                                            alt={item.product_name}
                                            className="w-full h-full object-cover rounded-t-lg"
                                            onError={(e) => { e.target.src = '/path/to/fallback-image.jpg'; }}
                                        />
                                        <button onClick={(e) => handleClick(e, item.id)}>
                                            {starredCards[item.id] ? (
                                                <ImStarFull className="absolute top-4 right-4 text-2xl text-red-800" />
                                            ) : (
                                                <ImStarEmpty className="absolute top-4 right-4 text-2xl" style={{color: "white"}} />
                                            )}
                                        </button>
                                    </div>
                                    <div className='p-2'>
                                        <p>{item.product_name}</p>
                                        <p>${item.price}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className='px-5 xl:px-20'>
                <div className='flex items-center justify-between my-3'>
                    <h3 style={{ fontFamily: 'Oswald' }}
                        className='font-bold text-2xl'
                    >
                        Kiyimlar
                    </h3>
                    <h4
                        style={{ fontFamily: 'Oswald' }}
                        className='border-b-2 border-black text-xl flex items-center p-1'
                    >
                        <Link href={"/clothes"} className='md:hidden'>Ko'proq</Link>
                        <Link href={"/clothes"} className='hidden md:block'>Ko'proq maxsulot</Link>
                        <HiOutlineChevronRight />
                    </h4>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={2}
                    navigation
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {
                        homeCard.slice(4, 12).map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link href={'/detail'} className='border-2 rounded-lg flex flex-col h-80'>
                                    <div className='bg-green-500 flex justify-end h-[75%] relative rounded-t-lg'>
                                        <button onClick={(e) => handleClick(e, item.id)}>
                                            {starredCards[item.id] ? (
                                                <ImStarFull className="absolute top-4 right-4 text-2xl text-red-800" />
                                            ) : (
                                                <ImStarEmpty className="absolute top-4 right-4 text-2xl" />
                                            )}
                                        </button>
                                    </div>
                                    <div className='p-2'>
                                        <p>{item.title}</p>
                                        <p>{item.price}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className='px-5 xl:px-20'>
                <div className='flex items-center justify-between my-3'>
                    <h3 style={{ fontFamily: 'Oswald' }}
                        className='font-bold text-2xl'
                    >
                        Aksesuarlar
                    </h3>
                    <h4
                        style={{ fontFamily: 'Oswald' }}
                        className='border-b-2 border-black text-xl flex items-center p-1'
                    >
                        <Link href={"/accessory"} className='md:hidden'>Ko'proq</Link>
                        <Link href={"/accessory"} className='hidden md:block'>Ko'proq maxsulot</Link>
                        <HiOutlineChevronRight />
                    </h4>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={2}
                    navigation
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {
                        homeCard.slice(8, 12).map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link href={'/detail'} className='border-2 rounded-lg flex flex-col h-80'>
                                    <div className='bg-green-500 flex justify-end h-[75%] relative rounded-t-lg'>
                                        <button onClick={(e) => handleClick(e, item.id)}>
                                            {starredCards[item.id] ? (
                                                <ImStarFull className="absolute top-4 right-4 text-2xl text-red-800" />
                                            ) : (
                                                <ImStarEmpty className="absolute top-4 right-4 text-2xl" />
                                            )}
                                        </button>
                                    </div>
                                    <div className='p-2'>
                                        <p>{item.title}</p>
                                        <p>{item.price}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </div>
    )
}

export default HomeProducts
