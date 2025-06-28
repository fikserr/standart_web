import React from 'react'
import { HeroImg, HeroImg2 } from '../images';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const HomeHero = ({ banner}) => {
    console.log(banner, "banners in home hero");
    return (
        <div>
            <div className='p-5 relative w-full mt-20 2xl:px-20'>
                <img className='w-full md:hidden' src={HeroImg} alt="HeroImg" />
                {/* <img className='w-full xl:h-[600px] object-cover rounded-lg hidden md:block' src={HeroImg2} alt="HeroImg" /> */}
                <div className='xl:h-[600px]'>
                    {
                        banner?.map((item, index) => (
                            <img
                                key={index}
                                className='w-full xl:h-[600px] object-cover rounded-lg hidden md992:block'
                                src={`storage/${item.image}`}
                                alt={item.name}
                            />
                        ))
                    }
                </div>
                <div
                    style={{ fontFamily: 'Oswald' }}
                    className='flex flex-col justify-between h-[80%]  lg:h-[90%] md992:p-10 absolute top-10 sm500:top-16 md:top-10 left-10 2xl:left-28 md992:left-14 md992:w-4/5 w-3/5 md:w-4/5'
                >
                    <h2 className='font-bold text-[27px] sm500:text-[40px] sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl'>Kiyimlarning keng assortimenti</h2>
                    <p style={{ fontFamily: 'OswaldLight' }}
                        className='text-[15px] sm500:text-[22px] sm:text-3xl md992:text-4xl md:w-3/4 xl:text-5xl'
                    >
                        Mashhur brendlarning kiyimlari bizning katalogimizda. Faqat sifatli buyumlar
                    </p>
                    <button
                        className='bg-black text-white flex justify-center items-center gap-2 p-4 rounded-lg w-4/5 sm500:w-1/2 xl:text-2xl hover:bg-[rgb(73,208,255)] hover:text-black duration-500'
                        style={{ fontFamily: 'OswaldLight' }}
                    >
                        Katalogga o'ting <HiOutlineChevronRight />
                    </button>
                    <div className='flex gap-3 relative bottom-0 left-0'>
                        <button className='w-[70px] h-[70px] sm500:w-[100px] sm500:h-[100px] flex justify-center items-center rounded-[50%] bg-slate-50 hover:bg-[rgb(73,208,255)] duration-300'><HiOutlineChevronLeft /></button>
                        <button className='w-[70px] h-[70px] sm500:w-[100px] sm500:h-[100px] flex justify-center items-center rounded-[50%] bg-slate-50 hover:bg-[rgb(73,208,255)] duration-300'><HiOutlineChevronRight /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero
