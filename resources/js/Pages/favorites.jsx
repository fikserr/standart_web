import React from "react";

const EmptyFavorites = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">SEVIMLILAR</h1>

            <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-6">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3916/3916583.png"
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
    );
};

export default EmptyFavorites;