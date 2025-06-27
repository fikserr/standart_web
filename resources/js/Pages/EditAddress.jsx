import React from 'react'
import { Link } from '@inertiajs/react';
import { HiOutlineChevronLeft } from "react-icons/hi";




const EditAddress = () => {
    return (
        <div className='my-24 px-5 xl:px-32'>
            <div className='flex items-center gap-2'>
                <HiOutlineChevronLeft className='text-2xl' />
                <Link href={"/address"}><h1 className='font-bold text-5xl' style={{ fontFamily: "Oswald" }}>Joylashuv</h1></Link>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                <div className='col-span-4 my-5 px-10'>
                    <div className='grid grid-cols-4 items-center'>
                        <h2 className='col-span-3' style={{ fontFamily: 'Oswald', fontSize: '24px' }}>Joylashuvni tahrirlash</h2>
                        
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
