import React from 'react'
import { iphone12, iphone13, inbox, user, check, Blog1, Blog2, Blog3 } from '../../images';
import { HiOutlineChevronRight } from "react-icons/hi";

const PriceSection = () => {
    return (
        <div className='px-5 xl:px-20 my-14 text-white'>
            <div className='w-full p-5 sm:p-8 xl:p-16 bg-[rgb(22,156,248)] rounded-lg flex flex-col gap-3 relative'>
                <div className='grid lg:grid-cols-5 md:grid-cols-4'>

                    {/* Text Section */}
                    <div className='col-span-3'>
                        <div className='grid sm:grid-cols-3 gap-10'>

                            {/* Title and Description */}
                            <div className='flex flex-col sm:mb-2 lg:mb-10 gap-10 col-span-3'>
                                <h2
                                    style={{ fontFamily: "Roboto" }}
                                    className="text-center text-5xl lg:text-7xl min-h-[60px]"
                                >
                                    Narxni hisoblash
                                </h2>
                                <p
                                    style={{ fontFamily: "Roboto" }}
                                    className='text-center sm:text-xl lg:text-2xl'
                                >
                                    Agar siz qidirayotgan narsangizni topa olmasangiz, har doim Poizon bozorida buyurtma narxini avtomatik hisoblash, shu jumladan xizmat komissiyasi va yetkazib berishdan foydalanishingiz mumkin
                                </p>
                            </div>

                            {/* iPhone 12 - for Tablet Only */}
                            <div className='hidden md:block absolute md:bottom-32 right-5 lg:hidden'>
                                <img
                                    src={iphone12}
                                    alt="iPhone"
                                    width={150}
                                    height={300} // asl proporsiyasiga mos keladigan balandlik
                                    className="w-[150px] h-[300px] object-contain"
                                />
                            </div>
                        </div>

                        {/* Steps */}
                        <div>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <span className='razmer40 rounded-full flex justify-center items-center border'>
                                        1
                                    </span>
                                </div>
                                <span
                                    style={{ fontFamily: "Roboto" }}
                                    className='sm:text-xl'
                                >
                                    Poizon ilovasini qanday o'rnatish haqida batafsil, bosqichma-bosqich maqola
                                </span>
                            </div>

                            <div className='flex items-center gap-4 my-4'>
                                <div>
                                    <span className='razmer40 rounded-full flex justify-center items-center border'>
                                        2
                                    </span>
                                </div>
                                <p
                                    style={{ fontFamily: "Roboto" }}
                                    className='sm:text-xl'
                                >
                                    Qaysi mahsulotni sotib olishni xohlayotganingizni bizga Telegram yoki WhatsApp orqali yozing
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <div className='flex justify-center lg:justify-start my-5 lg:my-0'>
                            <button
                                className='bg-black flex items-center justify-center rounded-xl px-8 lg:px-16 py-5 hover:bg-slate-700 duration-500'
                            >
                                Narxni hisoblash
                                <HiOutlineChevronRight className="ml-2" />
                            </button>
                        </div>
                    </div>

                    {/* iPhone 13 - for Desktop Only */}
                    <div className='absolute bottom-0 right-0 xl:right-10 hidden lg:block'>
                        <img
                            src={iphone13}
                            alt="iPhone 13"
                            width={200}
                            height={400} // taxminiy original aspect ratio
                            className="w-[200px] h-[400px] object-contain"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceSection
