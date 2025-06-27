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
import ProfileSidebar from '@/components/shared/profile-sidebar';
import ProfileDropdown from '@/components/shared/profile-dropdown';


const HistoryOrders = () => {
    return (
        <div className='my-24 px-5 xl:px-32'>
            <div className='flex items-center gap-2'>
                <HiOutlineChevronLeft className='text-2xl' />
                <Link href={"/profile"}><h1 className='font-bold text-5xl' style={{ fontFamily: "Oswald" }}>Tarix</h1></Link>
            </div>
            <div className='grid lg:grid-cols-4 gap-5'>
                <ProfileSidebar />
                <div className='col-span-3 my-3'>
                    <div className='grid grid-cols-4 items-center'>
                        <h2 className='col-span-3' style={{ fontFamily: 'Oswald', fontSize: "32px" }}>Buyurtmalar</h2>
                        <ProfileDropdown/>
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
