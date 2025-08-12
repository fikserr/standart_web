import React, { useState } from "react";
import favoriteImg from '../../../storage/app/private/assets/favorite.png';
import { HomeProducts } from "../components/shared/homeProducts";


const EmptyFavorites = ({ favorites, products }) => {
    const favoriteProducts = products?.data?.filter(product =>
        favorites.some(fav => fav.id === product.id)
    );
    console.log("Favorites:", favorites, "Products:", products);
    
    console.log("Favorite Products:", favoriteProducts);

    if (favorites && favorites.length > 0 && favoriteProducts.length > 0) {
        return (
            <div className="w-10/12 mx-auto min-h-screen p-4 bg-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">SEVIMLILAR</h1>
                <div className="grid grid-cols-1 gap-6">
                    <HomeProducts data={favoriteProducts} favorites={favorites} />
                </div>
            </div>
        );
    }
    return (
        <div className="mt-24 px-5 md:px-10 xl:px-20 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold">SEVIMLILAR</h1>
            <div className="flex flex-col items-center justify-center w-full h-screen mb-32 px-4 text-center">
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
                        onClick={() => window.location.href = '/'}
                    >
                        KATALOGGA O‘TISH
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmptyFavorites;
