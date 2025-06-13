
import { useState } from 'react'
import { Link } from '@inertiajs/react';
import React, { useState } from 'react'
import { Link, usePage, router } from '@inertiajs/react';
import { HiOutlineMenuAlt4, HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { ImStarEmpty } from "react-icons/im";
import { RiCloseLargeFill } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import Logo from '@images/Logo1.webp'
import { Button } from '../ui/button';


const UserNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { auth } = usePage().props
    const handleLogout = () => {
        router.post('/logout')
    }

    return (
        <div className='py-5 md:px-16 xl:px-20 fixed z-10 top-0 w-full bg-[rgb(18,18,20)]'>
            <div className='flex items-center justify-around md:justify-between'>
                <div className='flex items-center gap-5 md:hidden'>
                    <HiOutlineMenuAlt4
                        style={{ color: 'white', fontSize: '32px', cursor: 'pointer' }}
                        onClick={() => setIsSidebarOpen(true)}
                    />
                    <HiOutlineSearch style={{ color: "white", fontSize: "25px" }} />
                </div>
                <div
                    className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 p-4 transform transition-transform duration-1000 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className='flex justify-between items-center'>
                        <button onClick={() => setIsSidebarOpen(false)}>
                            <img src={Logo} alt="" />
                        </button>
                        <button
                            className="text-white text-xl"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <RiCloseLargeFill />
                        </button>
                    </div>
                    <div className='space-y-2'>
                        <button className='w-full text-left hover:bg-slate-500 p-2 rounded-md duration-500 mt-10'>Kiyimlar</button>
                        <button className='w-full text-left hover:bg-slate-500 p-2 rounded-md duration-500'>Oyoq kiyimlar</button>
                        <button className='w-full text-left hover:bg-slate-500 p-2 rounded-md duration-500'>Aksesuarlar</button>
                        <button className='w-full text-left hover:bg-slate-500 p-2 rounded-md duration-500'>Brendlar</button>
                        <button className='w-full text-left hover:bg-slate-500 p-2 rounded-md duration-500'>Xarajatlarni hisoblash</button>
                        <button className='w-full text-left hover:bg-slate-500 p-2 rounded-md duration-500'>Ma'lumot</button>
                    </div>
                </div>

                <div className='flex items-center gap-10'>
                    <Link href={"/"}><img src={Logo} alt="CompanyLogo" /></Link>
                    <HiOutlineMenuAlt4
                        style={{ color: 'white', fontSize: '32px', cursor: 'pointer' }}
                        className='hidden md:block xl:hidden'
                        onClick={() => setIsSidebarOpen(true)}
                    />
                </div>
                <div className='w-4/6 hidden xl:flex justify-around'>
                    <select className='bg-[rgb(18,18,20)] text-white outline-none'>
                        <option value="kiyimlar">Kiyimlar</option>
                    </select>
                    <select className='bg-[rgb(18,18,20)] text-white outline-none'>
                        <option value="oyoq kiyimlar">Oyoq kiyimlar</option>
                    </select>
                    <select className='bg-[rgb(18,18,20)] text-white outline-none'>
                        <option value="aksessuarlar">Aksessuarlar</option>
                    </select>
                    <select className='bg-[rgb(18,18,20)] text-white outline-none'>
                        <option value="brendlar">Brendlar</option>
                    </select>
                    <select className='bg-[rgb(18,18,20)] text-white outline-none'>
                        <option value="xarajatlarni hisoblash">Xarajatlarni hisoblash</option>
                    </select>
                    <select className='bg-[rgb(18,18,20)] text-white outline-none'>
                        <option value="ma'lumot">Ma'lumot</option>
                    </select>
                </div>
                <div className='flex items-center gap-5 md:gap-6'>
                    <HiOutlineSearch style={{ color: "white", fontSize: "25px" }} className='hidden md:block' />
                    <ImStarEmpty style={{ color: "white", fontSize: "25px" }} />
                    <Link href={"/profile"}><BiUser style={{ color: "white", fontSize: "25px" }} /></Link>
                    <div className='text-white flex items-end'>
                        <HiOutlineShoppingBag style={{ color: "white", fontSize: "25px" }} />
                        <span className='text-slate-400 text-sm hidden md:block'>11 899 ₽</span>
                    </div>
                    {auth.user ? (<Button onClick={handleLogout} className='text-white'>Logout</Button>) :(<Link href={"/login"} className='text-white'>Login</Link>)}
                </div>
            </div>
        </div>
    )
}

export default UserNavbar
