import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import favoriteImg from '../../../storage/app/private/assets/favorite.png';
import HomeProducts from "@/components/shared/homeProducts";


const EmptyFavorites = ({ favorites,products }) => {
    const [starredCards, setStarredCards] = useState(
        favorites.reduce((acc, id) => {
            acc[id] = true;
            return acc;
        }, {})
    );
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
    
    if (favorites && favorites.length > 0) {
        return (
            <div className="min-h-screen p-4 bg-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">SEVIMLILAR</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* {favorites.map((item) => (
                        <div key={item.id}>
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
                                            <ImStarEmpty className="absolute top-4 right-4 text-2xl text-white" />
                                        )}
                                    </button>
                                </div>
                                <div className='p-2'>
                                    <p>{item.product_name}</p>
                                    <p>${item.price}</p>
                                </div>
                            </Link>
                        </div>
                    ))} */}
                    <HomeProducts data={products.data} favorites={favorites}/>
                </div>
            </div>
        );
    }
    return (
        <div className="mt-24 px-20">
            <h1 className="text-3xl md:text-4xl font-bold">SEVIMLILAR</h1>
            <div className="flex flex-col items-center justify-center w-full h-96 mb-32 px-4 text-center">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 mb-6">
                        <img
                            src={favoriteImg}
                            alt="Bo'sh sevimlilar ikonkasi"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold mb-2">
                        SEVIMLI MAHSULOTLARINGIZ HALI YO‘Q.
                    </h2>
                    <p className="max-w-md text-gray-600 mb-6">
                        Yoqtirgan mahsulotlaringizni yo‘qotmaslik uchun ularni sevimlilarga qo‘shing. "Katalog" sahifasida siz ko‘plab qiziqarli mahsulotlarni topishingiz mumkin.
                    </p>
                    <button
                        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
                        onClick={() => window.location.href = '/catalog'}
                    >
                        KATALOGGA O‘TISH
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmptyFavorites;
