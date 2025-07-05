import React, { useState } from 'react';
import axios from 'axios';
import { Link } from '@inertiajs/react';
import { HiOutlineChevronRight } from "react-icons/hi";
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
                                        <ImStarFull className="absolute top-4 right-4 text-2xl text-yellow-400" />
                                    ) : (
                                        <ImStarEmpty className="absolute top-4 right-4 text-2xl text-black" />
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
    );
};

export default HomeProducts;
