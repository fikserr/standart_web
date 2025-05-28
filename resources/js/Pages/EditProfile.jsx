import React from 'react'
import { BiUser } from "react-icons/bi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link } from '@inertiajs/react';
import { RiUserSettingsLine, RiLogoutBoxRLine } from "react-icons/ri";
import { RxHamburgerMenu, RxLockOpen2 } from "react-icons/rx";
import { VscLocation } from "react-icons/vsc";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const EditProfile = () => {
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
                    <Link href={"/profile-edit"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full font-bold' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
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
                    <Link href={"/edit-password"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RxLockOpen2 />
                        <span>Parol</span>
                    </Link>
                    <Link href={"/"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RiLogoutBoxRLine />
                        <span>Chiqish</span>
                    </Link>
                </div>
                <div className='col-span-3 my-5'>
                    <div className='grid grid-cols-4 items-center'>
                        <h2 className='col-span-3' style={{ fontFamily: 'Oswald', fontSize: '24px' }}>Profilni tahrirlash</h2>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='lg:hidden'>Open</DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white space-y-1 pb-3 flex flex-col">
                                <DropdownMenuLabel>Profilni tahrirlash</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <Link href={"/profile"}><DropdownMenuItem>Profil</DropdownMenuItem></Link>
                                <Link href={"/history-order"}><DropdownMenuItem>Buyurtmalar</DropdownMenuItem></Link>
                                <Link href={"/address"}><DropdownMenuItem>Joylashuv</DropdownMenuItem></Link>
                                <Link href={"/edit-password"}><DropdownMenuItem>Parol</DropdownMenuItem></Link>
                                <Link href={"/"}><DropdownMenuItem>Chiqish</DropdownMenuItem></Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 p-5 gap-5'>
                        <div className='bg-slate-100 p-3 rounded-lg space-y-2'>
                            <h3 style={{ fontFamily: 'Oswald' }}>Ismingiz:</h3>
                            <input type="text" placeholder='Ismingizni kiriting' className='bg-transparent w-full outline-none' />
                        </div>
                        <div className='bg-slate-100 p-3 rounded-lg space-y-2'>
                            <h3 style={{ fontFamily: 'Oswald' }}>Familiyangiz:</h3>
                            <input type="text" placeholder='Familiyangizni kiriting' className='bg-transparent w-full outline-none' />
                        </div>
                        <div className='bg-slate-100 p-3 rounded-lg space-y-2'>
                            <h3 style={{ fontFamily: 'Oswald' }}>Elektron pochtangiz:</h3>
                            <input type="email" placeholder='Elektron pochtangizni kiriting' className='bg-transparent w-full outline-none' />
                        </div>
                        <div className='bg-slate-100 p-3 rounded-lg space-y-2'>
                            <h3 style={{ fontFamily: 'Oswald' }}>Telefon raqamingiz:</h3>
                            <input type="number" placeholder='Telefon raqamingizni kiriting' className='bg-transparent w-full outline-none' />
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

export default EditProfile
