import React, { useState } from 'react'
import { Link } from '@inertiajs/react';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { RiUserSettingsLine, RiLogoutBoxRLine } from "react-icons/ri";
import { RxHamburgerMenu, RxLockOpen2 } from "react-icons/rx";
import { VscLocation } from "react-icons/vsc";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';



const EditPass = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    return (
        <div className='my-24 px-5 xl:px-32'>
            <div className='flex items-center gap-2'>
                <HiOutlineChevronLeft className='text-2xl' />
                <Link href={"/profile"}><h1 className='font-bold text-5xl' style={{ fontFamily: "Oswald" }}>Profile</h1></Link>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                <div className='border rounded-md max-w-xs p-5 my-5 space-y-3 text-xl hidden lg:block'>
                    <Link href={"/profile"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "bold" }}>
                        <BiUser />
                        <span>Profil</span>
                    </Link>
                    <Link href={"/profile-edit"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RiUserSettingsLine />
                        <span>Profilni tahrirlash</span>
                    </Link>
                    <Link href={"/history-order"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RxHamburgerMenu />
                        <span>Tarix</span>
                    </Link>
                    <Link href={"/address"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <VscLocation />
                        <span>Joylashuv</span>
                    </Link>
                    <Link href={"/edit-password"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full font-bold' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RxLockOpen2 />
                        <span>Parol</span>
                    </Link>
                    <Link href={"/"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RiLogoutBoxRLine />
                        <span>Chiqish</span>
                    </Link>
                </div>
                <div className='col-span-3 my-3'>
                    <div className='grid grid-cols-4 items-center'>
                        <h2 className='col-span-3' style={{ fontFamily: 'Oswald', fontSize: '28px' }}>Parolni tahrirlash</h2>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='lg:hidden'>Open</DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white space-y-1 pb-3 flex flex-col">
                                <DropdownMenuLabel>Parol</DropdownMenuLabel>
                                <DropdownMenuSeparator/>
                                <Link href={"/profile"}><DropdownMenuItem>Profil</DropdownMenuItem></Link>
                                <Link href={"/edit-profile"}><DropdownMenuItem>Profilni tahrirlash</DropdownMenuItem></Link>
                                <Link href={"/history-orders"}><DropdownMenuItem>Buyurtmalar</DropdownMenuItem></Link>
                                <Link href={"/address"}><DropdownMenuItem>Joylashuv</DropdownMenuItem></Link>
                                <Link href={"/"}><DropdownMenuItem>Chiqish</DropdownMenuItem></Link>
                                <DropdownMenuItem></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className='grid grid-cols-1 max-w-md p-5 gap-5'>
                        <div className='bg-slate-100 p-3 rounded-lg space-y-2 relative'>
                            <h3 style={{ fontFamily: 'Oswald' }}>Joriy parol:</h3>
                            <input
                                type={showCurrentPassword ? 'text' : 'password'}
                                placeholder='Joriy parolni kiriting'
                                className='bg-transparent w-full outline-none pr-8'
                            />
                            <span
                                onClick={() => setShowCurrentPassword(prev => !prev)}
                                className="absolute right-2 top-6 cursor-pointer text-2xl p-3"
                            >
                                {showCurrentPassword ? <PiEye /> : <PiEyeClosed />}
                            </span>
                        </div>
                        <div className='bg-slate-100 p-3 rounded-lg space-y-2 relative'>
                            <h3 style={{ fontFamily: 'Oswald' }}>Yangi parol:</h3>
                            <input type={showNewPassword ? 'text' : 'password'} placeholder='Yangi parolni kiriting' className='bg-transparent w-full outline-none' />
                            <span
                                onClick={() => setShowNewPassword(prev => !prev)}
                                className="absolute right-2 top-6 cursor-pointer text-2xl p-3"
                            >
                                {showNewPassword ? <PiEye /> : <PiEyeClosed />}
                            </span>
                        </div>
                        <div className='bg-slate-100 p-3 rounded-lg space-y-2 relative'>
                            <h3 style={{ fontFamily: 'Oswald' }}>Yangi parolni takrorlang:</h3>
                            <input type={showRepeatPassword ? "text" : "password"} placeholder='Yangi parolni takrorlangni kiriting' className='bg-transparent w-full outline-none' />
                            <span
                                onClick={() => setShowRepeatPassword(prev => !prev)}
                                className='absolute right-2 top-6 cursor-pointer text-2xl p-3'
                            >
                                {showRepeatPassword ? <PiEye /> : <PiEyeClosed />}
                            </span>
                        </div>
                    </div>
                    <div className='px-5'>
                        <button className='p-3 bg-black text-white w-[40%] sm:w-[20%] rounded-lg text-center'>
                            Saqlash
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditPass
