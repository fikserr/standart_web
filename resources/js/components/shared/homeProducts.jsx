import React, { useState } from 'react';
import axios from 'axios';
import { Link, router } from '@inertiajs/react';
import { HiOutlineChevronRight } from "react-icons/hi";
import { Navigation } from 'swiper/modules';
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { homeCard } from '@/components/shared/lists';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useToast } from '@/hooks/use-toast';

const HomeProducts = ({ data }) => {
    console.log(data, "data");
    const [starredCards, setStarredCards] = useState(
        data.reduce((acc, id) => {
            acc[id] = true;
            return acc;
        }, {})
    );
    const { toast } = useToast();
    const handleClick = async (event, id) => {
        event.preventDefault();
        if (starredCards[id]) {
            // 👇 O'chirish
            try {
                await axios.delete(`/favorites/${id}`);
                setStarredCards((prev) => ({ ...prev, [id]: false }));
    
                toast({
                    title: "Sevimlilardan o'chirildi",
                    description: "✅ Mahsulot o'chirildi",
                });
            } catch (error) {
                console.error(error);
                alert("Sevimlilardan o'chirishda xatolik ❌");
            }
        } else {
            // 👇 Qo'shish
            try {
                await axios.post("/favorites", {
                    product_id: id,
                });
                setStarredCards((prev) => ({ ...prev, [id]: true }));
    
                toast({
                    title: "Sevimlilarga qo'shildi",
                    description: "✅ Mahsulot qo'shildi",
                });
            } catch (error) {
                console.error(error);
                alert("Sevimlilarga qo'shishda xatolik ❌");
            }
        }
    };
    
    
    return (
        <div>
            {/* Oyoq kiyimlar */}
            <div className='px-5 xl:px-20'>
                <div className='flex items-center justify-between my-3'>
                    <h3 style={{ fontFamily: 'Oswald' }} className='font-bold text-2xl'>
                        Oyoq kiyimlar
                    </h3>
                    <h4 style={{ fontFamily: 'Oswald' }} className='border-b-2 border-black text-xl flex items-center p-1'>
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
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                    }}
                >
                    {data.slice(0, 8).map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link href={`/detail/${item.id}`} className='border-2 rounded-lg flex flex-col h-80'>
                                <div className='flex justify-end h-[75%] relative rounded-t-lg'>
                                    <img
                                        src={`/storage/${item.photo1}?v=${Date.now()}`}
                                        alt={item.product_name}
                                        className="w-full h-full object-cover rounded-t-lg"
                                        onError={(e) => {
                                            e.target.src = '/path/to/fallback-image.jpg';
                                        }}
                                    />
                                    <button onClick={(e) => handleClick(e, item.id)}>
                                        {starredCards[item.id] ? (
                                            <ImStarFull className="absolute top-4 right-4 text-2xl text-white" />
                                        ) : (
                                            <ImStarEmpty className="absolute top-4 right-4 text-2xl text-white" />
                                        )}
                                    </button>
                                </div>
                                <div className='p-2'>
                                    <p>{item.product_name}</p>
                                    <p>${item.price}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Kiyimlar */}
            <div className='px-5 xl:px-20'>
                <div className='flex items-center justify-between my-3'>
                    <h3 style={{ fontFamily: 'Oswald' }} className='font-bold text-2xl'>
                        Kiyimlar
                    </h3>
                    <h4 style={{ fontFamily: 'Oswald' }} className='border-b-2 border-black text-xl flex items-center p-1'>
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
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                    }}
                >
                    {homeCard.slice(4, 12).map((item) => (
                        <SwiperSlide key={item.id}>
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
                    ))}
                </Swiper>
            </div>

            {/* Aksesuarlar */}
            <div className='px-5 xl:px-20'>
                <div className='flex items-center justify-between my-3'>
                    <h3 style={{ fontFamily: 'Oswald' }} className='font-bold text-2xl'>
                        Aksesuarlar
                    </h3>
                    <h4 style={{ fontFamily: 'Oswald' }} className='border-b-2 border-black text-xl flex items-center p-1'>
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
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                    }}
                >
                    {homeCard.slice(8, 12).map((item) => (
                        <SwiperSlide key={item.id}>
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
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeProducts;
