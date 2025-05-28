import React from 'react'
import { Link } from '@inertiajs/react';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
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


const HistoryOrders = () => {
    return (
        <div className='my-24 px-5 xl:px-32'>
            <div className='flex items-center gap-2'>
                <HiOutlineChevronLeft className='text-2xl' />
                <Link href={"/profile"}><h1 className='font-bold text-5xl' style={{ fontFamily: "Oswald" }}>Profile</h1></Link>
            </div>
            <div className='grid lg:grid-cols-4 gap-5'>
                <div className='border rounded-md max-w-xs p-5 my-5 space-y-3 text-xl hidden lg:block'>
                    <Link href={"/profile"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "bold" }}>
                        <BiUser />
                        <span>Profil</span>
                    </Link>
                    <Link href={"/profile-edit"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RiUserSettingsLine />
                        <span>Profilni tahrirlash</span>
                    </Link>
                    <Link href={"/history-order"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full font-bold' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
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
                <div className='col-span-3 my-3'>
                    <div className='grid grid-cols-4 items-center'>
                        <h2 className='col-span-3' style={{ fontFamily: 'Oswald', fontSize: "32px" }}>Buyurtmalar</h2>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='lg:hidden'>Open</DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white space-y-1 pb-3 flex flex-col">
                                <DropdownMenuLabel>Buyurtmalar</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <Link href={"/profile"}><DropdownMenuItem>Profil</DropdownMenuItem></Link>
                                <Link href={"/edit-profile"}><DropdownMenuItem>Profilni tahrirlash</DropdownMenuItem></Link>
                                <Link href={"/address"}><DropdownMenuItem>Joylashuv</DropdownMenuItem></Link>
                                <Link href={"/edit-password"}><DropdownMenuItem>Parol</DropdownMenuItem></Link>
                                <Link href={"/"}><DropdownMenuItem>Chiqish</DropdownMenuItem></Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className='grid grid-cols-1 sm500:grid-cols-2 md:grid-cols-3 p-5 gap-5'>
                        <div className='border p-3 flex justify-between py-5 rounded-lg'>
                            <div className='space-y-1 font-bold'>
                                <p>T/r</p>
                                <p>Kuni</p>
                                <p>Tasnif</p>
                                <p>Umumiy</p>
                            </div>
                            <div className='space-y-1 text-slate-400'>
                                <p>#3456</p>
                                <p>16/05/2025</p>
                                <p>Yuborilgan</p>
                                <p>2 625 000 so'm</p>
                            </div>
                        </div>
                        <div className='border p-3 flex justify-between py-5 rounded-lg'>
                            <div className='space-y-1 font-bold'>
                                <p>T/r</p>
                                <p>Kuni</p>
                                <p>Tasnif</p>
                                <p>Umumiy</p>
                            </div>
                            <div className='space-y-1 text-slate-400'>
                                <p>#3456</p>
                                <p>16/05/2025</p>
                                <p>Yuborilgan</p>
                                <p>2 625 000 so'm</p>
                            </div>
                        </div>
                        <div className='border p-3 flex justify-between py-5 rounded-lg'>
                            <div className='space-y-1 font-bold'>
                                <p>T/r</p>
                                <p>Kuni</p>
                                <p>Tasnif</p>
                                <p>Umumiy</p>
                            </div>
                            <div className='space-y-1 text-slate-400'>
                                <p>#3456</p>
                                <p>16/05/2025</p>
                                <p>Yuborilgan</p>
                                <p>2 625 000 so'm</p>
                            </div>
                        </div>
                        <div className='border p-3 flex justify-between py-5 rounded-lg'>
                            <div className='space-y-1 font-bold'>
                                <p>T/r</p>
                                <p>Kuni</p>
                                <p>Tasnif</p>
                                <p>Umumiy</p>
                            </div>
                            <div className='space-y-1 text-slate-400'>
                                <p>#3456</p>
                                <p>16/05/2025</p>
                                <p>Yuborilgan</p>
                                <p>2 625 000 so'm</p>
                            </div>
                        </div>
                        <div className='border p-3 flex justify-between py-5 rounded-lg'>
                            <div className='space-y-1 font-bold'>
                                <p>T/r</p>
                                <p>Kuni</p>
                                <p>Tasnif</p>
                                <p>Umumiy</p>
                            </div>
                            <div className='space-y-1 text-slate-400'>
                                <p>#3456</p>
                                <p>16/05/2025</p>
                                <p>Yuborilgan</p>
                                <p>2 625 000 so'm</p>
                            </div>
                        </div>
                        <div className='border p-3 flex justify-between py-5 rounded-lg'>
                            <div className='space-y-1 font-bold'>
                                <p>T/r</p>
                                <p>Kuni</p>
                                <p>Tasnif</p>
                                <p>Umumiy</p>
                            </div>
                            <div className='space-y-1 text-slate-400'>
                                <p>#3456</p>
                                <p>16/05/2025</p>
                                <p>Yuborilgan</p>
                                <p>2 625 000 so'm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryOrders
