import React, { useState } from 'react'
import { Link } from '@inertiajs/react';
import { ImStarEmpty } from "react-icons/im";

const Shoes = () => {
    const card = [
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
        { title: "Product nomi", price: "Product narxi", star: <ImStarEmpty /> },
    ]
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const categories = ['Кроссовки', 'Кеды', 'Лофферы', 'Сандали', 'Шлепки'];
    return (
        <div className='px-5 xl:px-20 mt-20'>
            <h2 style={{ fontFamily: "Oswald" }} className='text-2xl'>Oyoq kiyimlar</h2>
            <div className='grid grid-cols-2 gap-5 my-5 xl:hidden'>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className='border border-slate-500 rounded-lg outline-none p-3'
                >
                    Kategoriyalar
                </button>
                <button
                    onClick={() => setIsFilterOpen(true)}
                    className='border border-slate-500 rounded-lg outline-none p-3'
                >
                    Filter
                </button>
            </div>
            <div className='grid xl:grid-cols-4 xl:gap-5'>
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center xl:hidden">
                        <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-bold">KATEGORIILAR</h2>
                                <button onClick={() => setIsModalOpen(false)}>✕</button>
                            </div>
                            <div className="space-y-3 flex flex-col">
                                {categories.map((cat, index) => (
                                    <button key={index} className="text-gray-800 text-left hover:bg-black hover:text-white p-1 duration-500 rounded-md">{cat}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {isFilterOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col pt-20 gap-5 justify-center items-center xl:hidden">
                        <button className="w-11/12 max-w-xl text-center py-2 mt-4 bg-gray-200 rounded hover:bg-gray-300">
                            Сбросить все фильтры
                        </button>
                        <div className="bg-white rounded-lg p-6 w-11/12 max-w-xl overflow-y-auto max-h-screen">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-bold">Filter</h2>
                                <button onClick={() => setIsFilterOpen(false)}>✕</button>
                            </div>
                            <div className='my-10 border rounded-md p-5'>
                                <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald" }}>Фильтр по цене</h2>
                                <div className="flex items-center space-x-2">
                                    <input type="number" className="w-24 outline-none border rounded p-1 text-base" placeholder="от" />
                                    <span>-</span>
                                    <input type="number" className="w-24 outline-none border rounded p-1 text-base" placeholder="до" />
                                </div>
                                <input type="range" min="0" max="1000" className="w-full mt-2" />
                            </div>
                            <div className='my-10 border p-5 rounded-md'>
                                <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald" }}>Размеры (EU)</h2>
                                <div className="grid grid-cols-4 gap-2">
                                    {['35', '36', '36.5', '37', '38', '39', '40', '40.5', '41', '42', '43', '44', '45'].map(size => (
                                        <button key={size} className="border rounded p-1 text-center text-sm hover:bg-blue-100">
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className='my-10 border p-5 rounded-md'>
                                <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald" }}>Бренды</h2>
                                <div className="max-h-96 overflow-y-auto space-y-1">
                                    {[...new Set(['Adidas', 'Asics', 'Nike', 'Puma', 'Reebok', 'New Balance', 'Jordan', 'Under Armour'])].map(brand => (
                                        <label key={brand} className="flex items-center space-x-2">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span>{brand}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className='my-10 border p-5 rounded-md'>
                                <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald" }}>Модели</h2>
                                <div className="max-h-96 overflow-y-auto space-y-1">
                                    {[...new Set([
                                        'Air Force 1 High',
                                        'Air Force 1 Low',
                                        'Air Force 1 Mid',
                                        'Air Huarache',
                                        'Air Jordan 1 Mid',
                                        'Air Jordan 1 Low',
                                    ])].map(model => (
                                        <label key={model} className="flex items-center space-x-2">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span>{model}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className='my-10 border rounded-md p-5'>
                                <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald" }}>Цвет</h2>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'bg-black', 'bg-gray-400', 'bg-yellow-400', 'bg-blue-500', 'bg-purple-500',
                                        'bg-orange-500', 'bg-green-500', 'bg-pink-500', 'bg-red-500', 'bg-slate-500', 'bg-red-900'
                                    ].map(colorClass => (
                                        <div key={colorClass} className={`w-6 h-6 rounded-full ${colorClass} border cursor-pointer`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className='hidden xl:block px-3 '>
                    <div className='border rounded-md p-5 mt-5'>
                        <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald", fontSize: "24px" }}>Категории</h2>
                        <div className="flex flex-col text-left">
                            <button className='text-left hover:bg-black p-1 rounded-md duration-500 hover:text-white'>Кроссовки</button>
                            <button className='text-left hover:bg-black p-1 rounded-md duration-500 hover:text-white'>Кеды</button>
                            <button className='text-left hover:bg-black p-1 rounded-md duration-500 hover:text-white'>Лоферы</button>
                            <button className='text-left hover:bg-black p-1 rounded-md duration-500 hover:text-white'>Сандалии</button>
                            <button className='text-left hover:bg-black p-1 rounded-md duration-500 hover:text-white'>Шлепки</button>
                        </div>
                    </div>
                    <div className='my-10 border rounded-md p-5'>
                        <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald", fontSize: "24px" }}>Фильтр по цене</h2>
                        <div className="flex items-center space-x-2">
                            <input type="number" className="w-24 outline-none border rounded p-1 text-base" placeholder="от" />
                            <span>-</span>
                            <input type="number" className="w-24 outline-none border rounded p-1 text-base" placeholder="до" />
                        </div>
                        <input type="range" min="0" max="1000" className="w-full mt-2" />
                    </div>
                    <div className='my-10 border p-5 rounded-md'>
                        <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald", fontSize: "24px" }}>Размеры (EU)</h2>
                        <div className="grid grid-cols-4 gap-2">
                            {['35', '36', '36.5', '37', '38', '39', '40', '40.5', '41', '42', '43', '44', '45'].map(size => (
                                <button
                                    key={size}
                                    className="border rounded p-1 text-center text-sm hover:bg-blue-100"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='my-10 border p-5 rounded-md'>
                        <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald", fontSize: "24px" }}>Бренды</h2>
                        <div className="max-h-96 overflow-y-auto space-y-1">
                            {['Adidas', 'Asics', 'Nike', 'Puma', 'Reebok', 'New Balance', 'Jordan', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour',].map(brand => (
                                <label key={brand} className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>{brand}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className='my-10 border p-5 rounded-md'>
                        <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald", fontSize: "24px" }}>Модели</h2>
                        <div className="max-h-96 overflow-y-auto space-y-1">
                            {['Air Force 1 High', 'Air Force 1 Low', 'Air Force 1 Mid', 'Air Huarache', 'Air Jordan 1 Mid', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low',].map(model => (
                                <label key={model} className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>{model}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className='my-10 border rounded-md p-5'>
                        <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald", fontSize: "24px" }}>Цвет</h2>
                        <div className="flex flex-wrap gap-2">
                            {['black', 'gray-400', 'yellow-400', 'blue-500', 'purple-500', 'orange-500', 'green-500', 'brown-500', 'pink-500', 'red-500', 'slate-500', 'red-900', 'black', 'gray-400', 'yellow-400', 'blue-500', 'purple-500', 'orange-500', 'green-500', 'brown-500', 'pink-500', 'red-500', 'slate-500', 'red-900', 'black', 'gray-400', 'yellow-400', 'blue-500', 'purple-500', 'orange-500', 'green-500', 'brown-500', 'pink-500', 'red-500', 'slate-500', 'red-900', 'black', 'gray-400', 'yellow-400', 'blue-500', 'purple-500', 'orange-500', 'green-500', 'brown-500', 'pink-500', 'red-500', 'slate-500', 'red-900',].map(color => (
                                <div
                                    key={color}
                                    className={`w-9 h-9 rounded-full bg-${color} border cursor-pointer`}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button className="w-full text-center py-2 mt-4 bg-gray-200 rounded hover:bg-gray-300">
                            Сбросить все фильтры
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-3 my-5 col-span-3'>
                    {
                        card.map((item, index) => (
                            <Link href={"/detail"} className='border-2 h-[250px] xl:h-[250px]'>
                                <div key={index} className='bg-green-500 flex justify-end h-[75%] relative'>
                                    <button className='absolute top-4 right-4'>{item.star}</button>
                                </div>
                                <div className='p-2'>
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Shoes