import React from 'react'
import { BiUser } from "react-icons/bi";
import { RiUserSettingsLine, RiLogoutBoxRLine } from "react-icons/ri";
import { RxHamburgerMenu, RxLockOpen2 } from "react-icons/rx";
import { VscChecklist, VscLocation } from "react-icons/vsc";
import { GrMapLocation } from "react-icons/gr";
import { ImStarEmpty } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const EditAddress = () => {
    const navigate = useNavigate()
    return (
        <div className='my-24 px-5 xl:px-32'>
            <h1 className='font-bold text-5xl' onClick={() => navigate('/profile')} style={{ fontFamily: "Oswald" }}>Profile</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                <div className='border rounded-md max-w-xs p-5 my-5 space-y-3 text-xl hidden lg:block'>
                    <button onClick={() => navigate('/profile')} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "bold" }}>
                        <BiUser />
                        <span>Profil</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RiUserSettingsLine />
                        <span>Profilni tahrirlash</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RxHamburgerMenu />
                        <span>Tarix</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <VscLocation />
                        <span>Joylashuv</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full font-extrabold' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <GrMapLocation />
                        <span>Joylashuvni tahrirlash</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RxLockOpen2 />
                        <span>Parol</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RiLogoutBoxRLine />
                        <span>Chiqish</span>
                    </button>
                </div>
                <div className='col-span-3 my-5'>
                    <div className='grid grid-cols-4 items-center'>
                        <h2 className='col-span-3' style={{ fontFamily: 'Oswald', fontSize: '24px' }}>Profilni tahrirlash</h2>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='lg:hidden'>Open</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Buyurtmalar</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => navigate('/profile')}>Profil</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => navigate('/history-orders')}>Buyurtmalar</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => navigate('/address')}>Joylashuv</DropdownMenuItem>
                                <DropdownMenuItem>Parol</DropdownMenuItem>
                                <DropdownMenuItem>Chiqish</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className='grid p-5 gap-5'>
                        <div className='bg-slate-100 p-3 rounded-lg space-y-2'>
                            <h3 style={{ fontFamily: 'Oswald' }}>Ismingiz:</h3>
                            <input type="text" placeholder='Ismingizni kiriting' className='bg-transparent w-full outline-none' />
                        </div>
                        <div className='bg-slate-100 p-3 rounded-lg space-y-2'>
                            <h3 style={{ fontFamily: 'Oswald' }}>Familiyangiz:</h3>
                            <input type="text" placeholder='Familiyangizni kiriting' className='bg-transparent w-full outline-none' />
                        </div>
                        <div className='bg-slate-100 p-3 rounded-lg space-y-2 sm:col-span-2'>
                            <h3 style={{ fontFamily: 'Oswald' }}>Ko'changiz:</h3>
                            <input type="text" placeholder="Ko'cha nomini kiriting" className='bg-transparent w-full outline-none' />
                        </div>
                        <div className='bg-slate-100 p-3 rounded-lg space-y-2'>
                            <h3 style={{ fontFamily: 'Oswald' }}>Shahar:</h3>
                            <input type="number" placeholder='Shaharni kiriting' className='bg-transparent w-full outline-none' />
                        </div>
                        <div className='bg-slate-100 p-3 rounded-lg space-y-2'>
                            <h3 style={{ fontFamily: 'Oswald' }}>Uy raqami / xonadon:</h3>
                            <input type="text" placeholder='Uy raqani yoki xonadonni kiriting' className='bg-transparent w-full outline-none' />
                        </div>
                        <div className='bg-slate-100 p-3 rounded-lg space-y-2'>
                            <h3 style={{ fontFamily: 'Oswald' }}>Viloyat / tuman:</h3>
                            <input type="text" placeholder='Viloyat yoki tumanni kiriting' className='bg-transparent w-full outline-none' />
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

export default EditAddress
