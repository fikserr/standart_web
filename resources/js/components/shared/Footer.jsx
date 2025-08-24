import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import LogoFooter from '@images/LogoFooter.webp'
import telegram from '@images/telegram.webp'
import whatsapp from '@images/whatsapp.webp'
import vk from '@images/vk.webp'
import { Link } from '@inertiajs/react';

const Footer = () => {
    return (
        <div className='bg-[rgb(18,18,20)]'>
            <div className='flex justify-center py-5 md:hidden'>
                <img src={LogoFooter} alt="" />
            </div>
            <div style={{ fontFamily: "Oswald" }} className='md:hidden px-5 space-x-2 sm:space-x-4 flex justify-center '>
                <DropdownMenu>
                    <DropdownMenuTrigger className='lg:hidden px-5 outline-none text-black rounded-md bg-white'>Ma'lumot</DropdownMenuTrigger>
                    <DropdownMenuContent className="space-y-1 pb-3 flex flex-col">
                        <DropdownMenuLabel>Ma'lumot</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link><DropdownMenuItem>Ma'lumot</DropdownMenuItem></Link>
                        <Link><DropdownMenuItem>Blog</DropdownMenuItem></Link>
                        <Link><DropdownMenuItem>Kontaktlar</DropdownMenuItem></Link>
                        <Link><DropdownMenuItem>Yetkazib berish</DropdownMenuItem></Link>
                        <Link><DropdownMenuItem>To'lov</DropdownMenuItem></Link>
                        <Link><DropdownMenuItem>FAQ</DropdownMenuItem></Link>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger className='lg:hidden px-5 outline-none text-black rounded-md bg-white'>Katalog</DropdownMenuTrigger>
                    <DropdownMenuContent className="space-y-1 pb-3 flex flex-col">
                        <DropdownMenuLabel>Katalog</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link><DropdownMenuItem>Katalog</DropdownMenuItem></Link>
                        <Link href={"/category/3"}><DropdownMenuItem>Kiyimlar</DropdownMenuItem></Link>
                        <Link href={"/category/4"}><DropdownMenuItem>Oyoq kiyimlar</DropdownMenuItem></Link>
                        <Link href={"/category/1"}><DropdownMenuItem>Aksessuarlar</DropdownMenuItem></Link>
                        <Link><DropdownMenuItem>Xarajatlarni hisoblash</DropdownMenuItem></Link>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger className='lg:hidden px-5 outline-none text-black rounded-md bg-white'>Kontaktlar</DropdownMenuTrigger>
                    <DropdownMenuContent className="space-y-1 pb-3 flex flex-col">
                        <DropdownMenuLabel>Kontaktlar</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link><DropdownMenuItem>Kontaktlar</DropdownMenuItem></Link>
                        <Link><DropdownMenuItem>info@xwear.info</DropdownMenuItem></Link>
                        <Link><DropdownMenuItem>+7 993 608 38 85</DropdownMenuItem></Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='hidden md:block py-10 '>
                <div className='flex justify-evenly'>
                    <ul className='text-white flex flex-col gap-1 text-lg' style={{ fontFamily: "OswaldLight" }}>
                        <li style={{ fontFamily: "Oswald" }} className='text-2xl'>Katalog</li>
                        <Link href={'/category/3'}><li>Kiyimlar</li></Link>
                        <Link href={'/category/4'}><li>Oyoq kiyimlar</li></Link>
                        <Link href={'/category/1'}><li>Aksessuarlar</li></Link>
                        <img src={LogoFooter} alt="" className='hidden xl:mt-10' />
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
                            <img src={telegram} alt="" className='w-[25px] h-[25px]' />
                            <img src={whatsapp} alt="" className='w-[25px] h-[25px]' />
                        </li>
                        <li>Bizning ijtimoiy tarmoqlarimiz</li>
                        <li>
                            <img src={vk} alt="" className='w-[25px] h-[25px]' />
                        </li>
                    </ul>
                    {/* <div className='hidden xl:block w-1/4'>
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
                    </div> */}
                </div>
            </div>
            <div className='md:hidden pb-20'>
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
        </div>
    )
}

export default Footer
