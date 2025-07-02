import { useState } from 'react'
import { HiOutlineChevronRight } from "react-icons/hi";

const Index = ({ detail = [] }) => {
    const [activeTab, setActiveTab] = useState('Tafsilotlar');
    const tabs = ['Tafsilotlar'];
    console.log(detail, "detail");
    return (
        <div className='my-20 px-5 xl:px-32'>
            <h1 style={{ fontFamily: "Oswald", fontSize: "22px" }} className='sm:hidden'>Product nomi</h1>
            <div className='grid sm:grid-cols-2 gap-5 md:gap-10 xl:grid-cols-2'>
                <div className='border-b-blue-300 grid gap-4 border-b-2'>
                    {detail && detail.photo1 && (
                        <div>
                            <img
                                src={`/storage/${detail.photo1}?v=${Date.now()}`}
                                alt={detail.product_name || 'Product image'}
                                className="w-full h-[400px] rounded-2xl object-cover rounded-t-lg"
                                onError={(e) => {
                                    e.target.src = '/path/to/fallback-image.jpg'; // fallback rasm
                                }}
                            />
                        </div>
                    )}
                    <div className='grid grid-cols-2 gap-3 mb-3'>
                        {[detail.photo2, detail.photo3].map((photo, index) => (
                            photo && (
                                <div key={index}>
                                    <img
                                        src={`/storage/${photo}?v=${Date.now()}`}
                                        alt={`Product image ${index + 2}`} // photo2 = img 2, photo3 = img 3
                                        className="w-full h-[150px] object-cover rounded-lg"
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
                    <h1 style={{ fontFamily: "Oswald", fontSize: "22px" }} className='hidden sm:block'>Product nomi</h1>
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
                        <div>
                            <p style={{ fontFamily: "OswaldLight", fontSize: "20px" }}>Hajmi - 40</p>
                            <p className='text-slate-500'>4 699 ₽</p>
                        </div>
                        <button className='bg-black p-2 text-white rounded-md'>Savatga Qo'shish</button>
                    </div>
                    <div className='sm:hidden xl:block'>
                        <div className='my-5 px-2 pt-2'>
                            <div className='flex justify-between text-slate-500'>
                                {tabs.map((tab) => (
                                    <p
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`cursor-pointer ${activeTab === tab ? 'text-black border-b-blue-700 border-b-2 pb-2' : 'text-slate-500'}`}
                                    >
                                        {tab}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                                <h3 style={{ fontSize: "20px" }}>Kategoriya</h3>
                                <button className='text-slate-600 flex items-center'>Oyoq kiyimlar <HiOutlineChevronRight /></button>
                            </div>
                            <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                                <h3 style={{ fontSize: "20px" }}>Brend</h3>
                                <button className='text-slate-600 flex items-center'>Nike <HiOutlineChevronRight /></button>
                            </div>
                            <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                                <h3 style={{ fontSize: "20px" }}>Rangi</h3>
                                <button className='text-slate-600 flex items-center'>Havorang <HiOutlineChevronRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden sm:block max-w-md xl:hidden'>
                <div className='my-5 px-2 pt-2'>
                    <div className='flex justify-between text-slate-500'>
                        {tabs.map((tab) => (
                            <p
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`cursor-pointer ${activeTab === tab ? 'text-black border-b-blue-700 border-b-2 pb-2' : 'text-slate-500'}`}
                            >
                                {tab}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='space-y-2'>
                    <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                        <h3 style={{ fontSize: "20px" }}>Kategoriya</h3>
                        <button className='text-slate-600 flex items-center'>Oyoq kiyimlar <HiOutlineChevronRight /></button>
                    </div>
                    <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                        <h3 style={{ fontSize: "20px" }}>Brend</h3>
                        <button className='text-slate-600 flex items-center'>Nike <HiOutlineChevronRight /></button>
                    </div>
                    <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                        <h3 style={{ fontSize: "20px" }}>Rangi</h3>
                        <button className='text-slate-600 flex items-center'>Havorang <HiOutlineChevronRight /></button>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '20px' }}>Qiziqarli takliflar</h3>
                {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-5'>
                    {
                        card.map((item, index) => (
                            <button onClick={() => navigate('/shoes/detail')} className='border-2 h-[250px] xl:h-[250px]'>
                                <div key={index} className='bg-green-500 flex justify-end h-[75%] relative'>
                                    <button className='absolute top-4 right-4'>{item.star}</button>
                                </div>
                                <div className='p-2'>
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                </div>
                            </button>
                        ))
                    }
                </div> */}
            </div>
        </div>
    )
}

export default Index
