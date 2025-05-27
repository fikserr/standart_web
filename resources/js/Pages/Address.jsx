import React from 'react'
import { BiUser, BiSolidPencil, BiSolidTrash } from "react-icons/bi";
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


const Address = () => {
    const navigate = useNavigate()
    return (
        <div className='my-24 px-5 xl:px-32'>
            <h1 className='font-bold text-5xl' onClick={() => navigate('/profile')} style={{ fontFamily: "Oswald" }}>Profile</h1>
            <div className='grid lg:grid-cols-4 gap-5'>
                <div className='border rounded-md max-w-xs p-5 my-5 space-y-3 text-xl hidden lg:block'>
                    <button onClick={() => navigate('/profile')} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "bold" }}>
                        <BiUser />
                        <span>Profil</span>
                    </button>
                    <button onClick={() => navigate('/edit-profile')} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RiUserSettingsLine />
                        <span>Profilni tahrirlash</span>
                    </button>
                    <button onClick={()=> navigate('/history-orders')} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RxHamburgerMenu />
                        <span>Tarix</span>
                    </button>
                    <button className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full font-extrabold' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <VscLocation />
                        <span>Joylashuv</span>
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
                <div className='col-span-3 my-3'>
                    <div className='grid grid-cols-4 items-center'>
                        <h2 className='col-span-3' style={{ fontFamily: 'Oswald', fontSize: "32px" }}>Manzil</h2>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='lg:hidden'>Open</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Manzil</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => navigate('/profile')}>Profil</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => navigate('/edit-profile')}>Profilni tahrirlash</DropdownMenuItem>
                                <DropdownMenuItem onClick={()=> navigate('/history-orders')}>Buyurtmalar</DropdownMenuItem>
                                <DropdownMenuItem onClick={()=> navigate('/edit-password')}>Parol</DropdownMenuItem>
                                <DropdownMenuItem>Chiqish</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className='grid sm:grid-cols-2 gap-5 my-5'>
                        <div className='border p-5 relative rounded-lg'>
                            <div className='absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-slate-50 p-3 border'>
                                <h3 style={{ fontFamily: 'OswaldLight' }}>Yetkazish Manzili #1</h3>
                            </div>
                            <h2 style={{ fontFamily: 'Oswald' }} className='mt-3 text-2xl'>Vasiliy Ivanov</h2>
                            <p className='xl:text-xl'>056734, Mосква, Poccия, улица Варшавская, 37/5, кв.574</p>
                            <div className='my-3'>
                                <p className='text-slate-500 text-md' style={{ fontFamily: 'OswaldLight' }}>Telefon</p>
                                <p className='xl:text-xl'>+7 (956) 373-46-33</p>
                            </div>
                            <div className='mb-10'>
                                <p className='text-slate-500 text-md' style={{ fontFamily: 'OswaldLight' }}>Email</p>
                                <p className='xl:text-xl'>yavasyaivanov@gmail.com</p>
                            </div>
                            <div className='flex items-center absolute bottom-0 left-0 bg-slate-50 rounded-tr-lg rounded-bl-lg gap-5 p-3 border'>
                                <button onClick={()=> navigate('/edit-address')} className='flex items-center gap-2'>
                                    <BiSolidPencil />
                                    <p>Tahrirlash</p>
                                </button>
                                <button className='flex items-center gap-2'>
                                    <BiSolidTrash />
                                    <p>O'chirish</p>
                                </button>
                            </div>
                        </div>
                        <div className='border p-5 relative rounded-lg'>
                            <div className='absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-slate-50 p-3 border'>
                                <h3 style={{ fontFamily: 'OswaldLight' }}>Yetkazish Manzili #2</h3>
                            </div>
                            <h2 style={{ fontFamily: 'Oswald' }} className='mt-3 text-2xl'>Vasiliy Ivanov</h2>
                            <p className='xl:text-xl'>056734, Mосква, Poccия, улица Варшавская, 37/5, кв.574</p>
                            <div className='my-3'>
                                <p className='text-slate-500 text-md' style={{ fontFamily: 'OswaldLight' }}>Telefon</p>
                                <p className='xl:text-xl'>+7 (956) 373-46-33</p>
                            </div>
                            <div className='mb-10'>
                                <p className='text-slate-500 text-md' style={{ fontFamily: 'OswaldLight' }}>Email</p>
                                <p className='xl:text-xl'>yavasyaivanov@gmail.com</p>
                            </div>
                            <div className='flex items-center absolute bottom-0 left-0 bg-slate-50 rounded-tr-lg rounded-bl-lg gap-5 p-3 border'>
                                <button onClick={()=> navigate('/edit-address')} className='flex items-center gap-2'>
                                    <BiSolidPencil />
                                    <p>Tahrirlash</p>
                                </button>
                                <button className='flex items-center gap-2'>
                                    <BiSolidTrash />
                                    <p>O'chirish</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address
