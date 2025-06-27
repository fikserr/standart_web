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
import ProfileSidebar from '@/components/shared/profile-sidebar';
import ProfileDropdown from '@/components/shared/profile-dropdown';


const EditProfile = () => {
    return (
        <div className='my-24 px-5 xl:px-32'>
            <div className='flex items-center gap-2'>
                <HiOutlineChevronLeft className='text-2xl' />
                <Link href={"/profile"}><h1 className='font-bold text-5xl' style={{ fontFamily: "Oswald" }}>Profilni tahrirlash</h1></Link>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                <ProfileSidebar/>
                <div className='col-span-3 my-5'>
                    <div className='grid grid-cols-4 items-center'>
                        <h2 className='col-span-3' style={{ fontFamily: 'Oswald', fontSize: '24px' }}>Profilni tahrirlash</h2>
                        <ProfileDropdown/>
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
