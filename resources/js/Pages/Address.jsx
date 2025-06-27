import { Link } from '@inertiajs/react';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { BiSolidPencil, BiSolidTrash } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@ui/dropdown-menu';
import ProfileSidebar from '@/components/shared/profile-sidebar';
import ProfileDropdown from '@/components/shared/profile-dropdown';




const Address = () => {
    return (
        <div className='my-24 px-5 xl:px-32'>
            <div className='flex items-center gap-2'>
                <HiOutlineChevronLeft className='text-2xl' />
                <Link href={"/profile"}><h1 className='font-bold text-5xl' style={{ fontFamily: "Oswald" }}>Joylashuv</h1></Link>
            </div>
            <div className='grid lg:grid-cols-4 gap-5'>
                <ProfileSidebar />
                <div className='col-span-3 my-3'>
                    <div className='grid grid-cols-2 sm500:grid-cols-3 md:grid-cols-4 items-center'>
                        <h2 className='col-span-1 md:col-span-2 lg:col-span-2 hidden sm500:block' style={{ fontFamily: 'Oswald', fontSize: "32px" }}>Manzil</h2>
                        <ProfileDropdown className='hidden lg:block' />
                        <Link href={'/address-add'} className='bg-slate-100 px-5 py-2 rounded-lg flex items-center justify-center gap-2'>
                            <VscLocation className='text-xl' />
                            <span style={{ fontFamily: 'OswaldLight' }}>Manzil qo'shish</span>
                        </Link>
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
                                <Link href={'/edit-address'} className='flex items-center gap-2'>
                                    <BiSolidPencil />
                                    <p>Tahrirlash</p>
                                </Link>
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
                                <Link href={'/edit-address'} className='flex items-center gap-2'>
                                    <BiSolidPencil />
                                    <p>Tahrirlash</p>
                                </Link>
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
