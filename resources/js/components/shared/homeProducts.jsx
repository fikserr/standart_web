import React, { useState } from 'react';
import axios from 'axios';
import { Link } from '@inertiajs/react';
import { Navigation } from 'swiper/modules';
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useToast } from '@/hooks/use-toast';

const HomeProducts = ({ data, favorites }) => {
    console.log(favorites, "data");
    const [starredCards, setStarredCards] = useState(() => {
        const initialStars = {};
        favorites.forEach((item) => {
            initialStars[item.id] = true;
        });
        return initialStars;
    });
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
                window.location.reload();
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
                        <Link href={`/detail/${item.id}`} className='rounded-lg flex flex-col h-80'>
                            <div className='flex justify-end h-[65%] relative rounded-t-lg'>
                                <img
                                    src={`/storage/${item.photo1}?v=${Date.now()}`}
                                    alt={item.product_name}
                                    className="w-full overflow-hidden object-cover rounded"
                                    onError={(e) => {
                                        e.target.src = '/path/to/fallback-image.jpg';
                                    }}
                                />
                                <button onClick={(e) => handleClick(e, item.id)}>
                                    {starredCards[item.id] ? (
                                        <ImStarFull className="absolute top-4 right-4 text-2xl text-yellow-400" />
                                    ) : (
                                        <ImStarEmpty className="absolute top-4 right-4 text-2xl text-black" />
                                    )}
                                </button>
                            </div>
                            <div className='flex items-end justify-between'>
                                <div className='p-2'>
                                    <p className='text-base font-semibold'>{item.product_name.toUpperCase()}</p>
                                    <p className='text-base'>{item.price} <span className='text-sm text-slate-500'>so'm</span> </p>
                                    {
                                        item.sizes.map((size, index) => (
                                            <span key={index} className='text-sm text-slate-500'>
                                                {size}{index < item.sizes.length - 1 ? ', ' : ''}
                                            </span>
                                        ))
                                    }
                                </div>
                                <Link href={`/detail/${item.id}`} className='hidden sm:block'>
                                    <button className='bg-black text-white w-full p-2 rounded-lg hover:bg-gray-800 transition xl:px-8'>
                                        Ko'proq
                                    </button>
                                </Link>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeProducts;
