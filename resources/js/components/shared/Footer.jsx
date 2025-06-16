import React from 'react'
import { HiOutlineChevronRight } from "react-icons/hi";
import LogoFooter from '@images/LogoFooter.webp'
import telegram from '@images/telegram.webp'
import whatsapp from '@images/whatsapp.webp'
import vk from '@images/vk.webp'

const Footer = () => {
    return (
        <div className='bg-[rgb(18,18,20)]'>
            <div className='flex justify-center py-5 md:hidden'>
                <img src={LogoFooter} alt="" />
            </div>
            <div style={{ fontFamily: "Oswald" }} className='md:hidden'>
                <select className='bg-[rgb(18,18,20)] text-white border-b w-full text-lg'>
                    <option value="Ma'lumot">Ma'lumot</option>
                    <option value="Blog">Blog</option>
                    <option value="Kontaktlar">Kontaktlar</option>
                    <option value="Yetkazib berish">Yetkazib berish</option>
                    <option value="To'lov">To'lov</option>
                    <option value="FAQ">FAQ</option>
                </select>
                <select className='bg-[rgb(18,18,20)] text-white border-b w-full text-lg'>
                    <option value="Katalog">Katalog</option>
                    <option value="Kiyimlar">Kiyimlar</option>
                    <option value="Oyoq kiyimlar">Oyoq kiyimlar</option>
                    <option value="Aksessuarlar">Aksessuarlar</option>
                    <option value="Xarajatlarni hisoblash">Xarajatlarni hisoblash</option>
                </select>
                <select className='bg-[rgb(18,18,20)] text-white border-b w-full text-lg'>
                    <option value="Kontaktlar">Kontaktlar</option>
                    <option value="info@xwear.info">info@xwear.info</option>
                    <option value="+7 993 608 38 85">+7 993 608 38 85</option>
                </select>
            </div>
            <div className='hidden md:block py-10 '>
                <div className='flex justify-evenly'>
                    <ul className='text-white flex flex-col gap-1 text-lg' style={{ fontFamily: "OswaldLight" }}>
                        <li style={{ fontFamily: "Oswald" }} className='text-2xl'>Katalog</li>
                        <li>Kiyimlar</li>
                        <li>Oyoq kiyimlar</li>
                        <li>Aksessuarlar</li>
                        <li>Xarajatlarni hisoblash</li>
                        <img src={LogoFooter} alt="" className='hidden xl:mt-10'/>
                    </ul>
                    <ul className='text-white flex flex-col gap-1 text-lg' style={{ fontFamily: "OswaldLight" }}>
                        <li style={{ fontFamily: "Oswald" }} className='text-2xl'>Ma'lumot</li>
                        <li>Blog</li>
                        <li>Kontaktlar</li>
                        <li>Yetkazib berish</li>
                        <li>To'lov</li>
                        <li>FAQ</li>
                    </ul>
                    <ul className='text-white flex flex-col gap-1 text-lg' style={{ fontFamily: "OswaldLight" }}>
                        <li style={{ fontFamily: "Oswald" }} className='text-2xl'>Kontaktlar</li>
                        <li>info@xwear.info</li>
                        <li>+7 993 608 38 85</li>
                        <li>Messengerlar</li>
                        <li className='flex gap-1'>
                            <img src={telegram} alt=""  className='w-[25px] h-[25px]' />
                            <img src={whatsapp} alt=""  className='w-[25px] h-[25px]'/>
                        </li>
                        <li>Bizning ijtimoiy tarmoqlarimiz</li>
                        <li>
                            <img src={vk} alt=""  className='w-[25px] h-[25px]'/>
                        </li>
                    </ul>
                    <div className='hidden xl:block w-1/4'>
                        <div className='text-white hidden md:block'>
                            <p style={{ fontFamily: "Oswald" }} className='text-2xl'>Yangiliklarga obuna bo'ling</p>
                            <p className='text-xs xl:text-base'>Chegirmalar va yangiliklardan xabardor bo'ling</p>
                        </div>
                        <div className='flex justify-between items-center border-b-2 my-5'>
                            <input type="text" placeholder='Email pochtangiz' className='bg-[rgb(18,18,20)] w-full outline-none text-white my-3' />
                            <p className='xl:w-[33px] xl:h-[30px] w-[40px] rounded-[50%] flex justify-center items-center bg-slate-100'>
                                <HiOutlineChevronRight />
                            </p>
                        </div>
                        <div>
                            <p className='text-slate-700 text-sm'>Axborot byulleteniga obuna bo'lish orqali siz shaxsiy ma'lumotlarni qayta ishlashga rozilik bildirasiz</p>
                            <p className='text-slate-700 text-sm mt-5'>Foydalanuvchi shartnomasi</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:hidden'>
                <div className='flex gap-2 justify-center py-5'>
                    <img src={telegram} alt="" />
                    <img src={whatsapp} alt="" />
                    <img src={vk} alt="" />
                </div>
                <div className='text-white text-center'>
                    <p style={{ fontFamily: "Oswald" }}>Yangiliklarga obuna bo'ling</p>
                    <p className='text-xs'>Chegirmalar va yangiliklardan xabardor bo'ling</p>
                </div>
            </div>
            <div className='grid md:grid-cols-2 px-10 pb-5 items-center xl:hidden'>
                <div className='text-white hidden md:block'>
                    <p style={{ fontFamily: "Oswald" }}>Yangiliklarga obuna bo'ling</p>
                    <p className='text-xs'>Chegirmalar va yangiliklardan xabardor bo'ling</p>
                </div>
                <div className='flex justify-between items-center px-3 border-b-2'>
                    <input type="text" placeholder='Email pochtangiz' className='bg-[rgb(18,18,20)] w-full outline-none p-2 text-white my-3' />
                    <p className='w-[40px] sm500:w-[45px] h-[35px] sm:h-[40px] md992:w-[45px] rounded-[50%] flex justify-center items-center bg-slate-100'>
                        <HiOutlineChevronRight />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
