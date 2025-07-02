import { Link } from '@inertiajs/react';
import { useState } from 'react'
import { HiOutlineChevronRight } from "react-icons/hi";

const Index = ({ detail }) => {
    const [mainPhoto, setMainPhoto] = useState(detail?.photo1);
    console.log(detail);
    return (
        <div className='my-20 px-5 xl:px-32'>
            <div className='grid sm:grid-cols-2 gap-5 md:gap-10 xl:grid-cols-2'>
                <div className='border-b-blue-300 grid gap-4 border-b-2'>
                    {mainPhoto && (
                        <div>
                            <img
                                src={`/storage/${mainPhoto}?v=${Date.now()}`}
                                alt={detail.product_name || 'Product image'}
                                className="w-full h-[350px] rounded-2xl object-cover rounded-t-lg"
                                onError={(e) => {
                                    e.target.src = '/path/to/fallback-image.jpg';
                                }}
                            />
                        </div>
                    )}

                    <div className='grid grid-cols-3 gap-3 mb-3'>
                        {[detail.photo1, detail.photo2, detail.photo3].map((photo, index) => (
                            photo && (
                                <div key={index}>
                                    <img
                                        src={`/storage/${photo}?v=${Date.now()}`}
                                        alt={`Product image ${index + 1}`}
                                        className={`w-full h-[130px] object-cover rounded-lg cursor-pointer ${mainPhoto === photo ? 'ring-2 ring-blue-400' : ''
                                            }`}
                                        onClick={() => setMainPhoto(photo)}
                                        onError={(e) => {
                                            e.target.src = '/path/to/fallback-image.jpg';
                                        }}
                                    />
                                </div>
                            )
                        ))}
                    </div>
                </div>
                <div className='my-5'>
                    <div className='sm:hidden'>
                        <h1 style={{ fontFamily: "Oswald", fontSize: "22px" }}>Product nomi</h1>
                        {
                            detail && detail.product_name && (
                                <h1 className='text-2xl font-bold mb-5' style={{ fontFamily: "Oswald" }}>{detail.product_name}</h1>
                            )
                        }
                    </div>
                    <div className='hidden sm:block'>
                        <h1 style={{ fontFamily: "Oswald", fontSize: "24px" }} >Product nomi</h1>
                        {
                            detail && detail.product_name && (
                                <h1 className='text-2xl font-bold mb-5' style={{ fontFamily: "OswaldLight" }}>{detail.product_name}</h1>
                            )
                        }
                    </div>
                    <h2 className="font-semibold mb-2" style={{ fontFamily: "OswaldLight", fontSize: "20px" }}>EU o'lchamlar:</h2>
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-2">
                        {Array.isArray(detail.sizes) && detail.sizes.map((size, index) => (
                            <div
                                key={index}
                                className="border rounded-lg px-4 py-2 text-center bg-gray-100 hover:bg-gray-200 cursor-pointer"
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center justify-between'>
                        <button className='bg-black p-2 text-white rounded-md my-3'>Savatga Qo'shish</button>
                    </div>
                    <div className='max-w-md'>
                        <div className='my-5 px-2 pt-2'>
                            <div className='flex justify-between text-slate-500'>
                                <h3 style={{ fontFamily: "Oswald", fontSize: "22px" }} className='text-black border-b-blue-700 border-b-2 pb-2'>
                                    Tavfsilotlar
                                </h3>
                            </div>
                        </div>
                        <div className='space-y-2 hidden sm:block cursor-default'>
                            <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                                <h3 style={{ fontSize: "20px" }}>Kategoriya</h3>
                                {[detail.category].map((category) => (
                                    category && (
                                        <div key={category.id}>
                                            {category.name}
                                        </div>
                                    )
                                ))}
                            </div>
                            <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                                <h3 style={{ fontSize: "20px" }}>Brend</h3>
                                {[detail.brend].map((item, index) => (
                                    item && (
                                        <div key={index}>
                                            {item}
                                        </div>
                                    )
                                ))}
                            </div>
                            <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                                <h3 style={{ fontSize: "20px" }}>Rangi</h3>
                                {[detail.colors].map((color, index) => (
                                    color && (
                                        <div key={index}>
                                            {color}
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2 sm:hidden'>
                <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                    <h3 style={{ fontSize: "20px" }}>Kategoriya</h3>
                    {[detail.category].map((category) => (
                        category && (
                            <div key={category.id}>
                                {category.name}
                            </div>
                        )
                    ))}
                </div>
                <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                    <h3 style={{ fontSize: "20px" }}>Brend</h3>
                    {[detail.brend].map((item, index) => (
                        item && (
                            <div key={index}>
                                {item}
                            </div>
                        )
                    ))}
                </div>
                <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                    <h3 style={{ fontSize: "20px" }}>Rangi</h3>
                    {[detail.colors].map((color, index) => (
                        color && (
                            <div key={index}>
                                {color}
                            </div>
                        )
                    ))}
                </div>
            </div>
            <div className='my-10'>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '20px' }}>Qiziqarli takliflar</h3>
                {/* Top tovarlar bu yerga <-  Abdumalik tomonidan yozildi ChatGPT emas 😂 */}
            </div>
        </div>
    )
}

export default Index
