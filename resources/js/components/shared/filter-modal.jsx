import React, { useEffect, useState } from 'react';

const FilterModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const categories = ['Кроссовки', 'Кеды', 'Лофферы', 'Сандали', 'Шлепки'];

    useEffect(() => {
        const isAnyModalOpen = isModalOpen || isFilterOpen;

        if (isAnyModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen, isFilterOpen]);

    return (
        <div>
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
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center xl:hidden" onClick={() => setIsModalOpen(false)}>
                    <div className="bg-white rounded-lg p-6 w-11/12 max-w-md" onClick={(e) => e.stopPropagation()}>
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
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col pt-20 gap-5 justify-center items-center xl:hidden" onClick={() => setIsFilterOpen(false)}>
                    <div className="bg-white rounded-lg p-6 w-11/12 max-w-xl overflow-y-auto max-h-screen" onClick={(e) => e.stopPropagation()}>
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
                                {['35', '36', '36.5', '37', '38', '39', '40', '40.5', '41', '42', '43', '44', '45'].map((item, index) => (
                                    <button key={index} className="border rounded p-1 text-center text-sm hover:bg-blue-100">
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='my-10 border p-5 rounded-md'>
                            <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald" }}>Бренды</h2>
                            <div className="max-h-96 overflow-y-auto space-y-1">
                                {[...new Set(['Adidas', 'Asics', 'Nike', 'Puma', 'Reebok', 'New Balance', 'Jordan', 'Under Armour'])].map((item, index) => (
                                    <label key={index} className="flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>{item}</span>
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
                                ])].map((item, index) => (
                                    <label key={index} className="flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>{item}</span>
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
                                ].map((item, index) => (
                                    <div key={index} className={`w-6 h-6 rounded-full ${item} border cursor-pointer`} />
                                ))}
                            </div>
                        </div>
                        <button className="w-full max-w-xl text-center py-2 bg-gray-200 rounded hover:bg-gray-300">
                            Сбросить все фильтры
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterModal;
