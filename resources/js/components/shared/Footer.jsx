import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import LogoFooter from '@images/LogoFooter.WebP'
import telegram from '@images/telegram.WebP'
import whatsapp from '@images/whatsapp.WebP'
import vk from '@images/vk.WebP'
import { Link } from '@inertiajs/react';

const Footer = () => {
    return (
        <div className='bg-[rgb(18,18,20)]'>
            <div className='flex justify-center py-5 md:hidden'>
                <img src={LogoFooter} alt="" loading="lazy" className="razmer150" />
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
                            <img src={telegram} alt="" className='razmer40 cursor-pointer' loading="lazy" />
                            <img src={whatsapp} alt="" className='razmer40 cursor-pointer' loading="lazy" />
                        </li>
                        <li>Bizning ijtimoiy tarmoqlarimiz</li>
                        <li>
                            <img src={vk} alt="" className='razmer40 cursor-pointer' loading="lazy" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className=''>
                <div className='flex gap-2 justify-center py-5'>
                    <img src={telegram} alt="" loading="lazy" className="razmer30 cursor-pointer"/>
                    <img src={whatsapp} alt="" loading="lazy" className="razmer30 cursor-pointer"/>
                    <img src={vk} alt="" loading="lazy" className="razmer30 cursor-pointer"/>
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
