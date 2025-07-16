import React, { useEffect, useState } from 'react';

const FilterModal = ({ onSizeChange = () => {}, onPriceChange = () => {} }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedModels, setSelectedModels] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);

    const categories = ['Krossovkalar', 'Kedlar', 'Loaferlar', 'Sandalilar', 'Shlepka'];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];
    const brands = ['Adidas', 'Asics', 'Nike', 'Puma', 'Reebok', 'New Balance', 'Jordan', 'Under Armour'];
    const models = [
        'Air Force 1 High',
        'Air Force 1 Low',
        'Air Force 1 Mid',
        'Air Huarache',
        'Air Jordan 1 Mid',
        'Air Jordan 1 Low',
    ];
    const colors = [
        'bg-black', 'bg-gray-400', 'bg-yellow-400', 'bg-blue-500', 'bg-purple-500',
        'bg-orange-500', 'bg-green-500', 'bg-pink-500', 'bg-red-500', 'bg-slate-500', 'bg-red-900'
    ];

    useEffect(() => {
        const isAnyModalOpen = isModalOpen || isFilterOpen;
        document.body.style.overflow = isAnyModalOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen, isFilterOpen]);

    const handleApply = () => {
        onPriceChange({ minPrice, maxPrice });
        setIsFilterOpen(false); // ❗ Filter qo‘llangach modal yopiladi
    };

    const handleSizeChange = (size) => {
        const newSize = selectedSizes[0] === size ? [] : [size];
        setSelectedSizes(newSize);
        onSizeChange(newSize);
        setIsFilterOpen(false); // ❗ Filter qo‘llangach modal yopiladi
    };

    const handleReset = () => {
        setMinPrice('');
        setMaxPrice('');
        setSelectedSizes([]);
        setSelectedBrands([]);
        setSelectedModels([]);
        setSelectedColors([]);
        onPriceChange({ minPrice: '', maxPrice: '' });
        onSizeChange([]);
        setIsFilterOpen(false);
    };

    return (
        <div>
            <div className='grid grid-cols-2 gap-5 my-5 xl:hidden'>
                <button onClick={() => setIsModalOpen(true)} className='border border-slate-500 rounded-lg p-3'>
                    Kategoriyalar
                </button>
                <button onClick={() => setIsFilterOpen(true)} className='border border-slate-500 rounded-lg p-3'>
                    Filtr
                </button>
            </div>

            {/* Kategoriya Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center xl:hidden" onClick={() => setIsModalOpen(false)}>
                    <div className="bg-white rounded-lg p-6 w-11/12 max-w-md" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-bold">KATEGORIYALAR</h2>
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

            {/* Filter Modal */}
            {isFilterOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col pt-20 gap-5 justify-center items-center xl:hidden" onClick={() => setIsFilterOpen(false)}>
                    <div className="bg-white rounded-lg p-6 w-11/12 max-w-xl overflow-y-auto max-h-screen" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-bold">Filtr</h2>
                            <button onClick={() => setIsFilterOpen(false)}>✕</button>
                        </div>

                        {/* Narx bo‘yicha */}
                        <div className='my-10 border rounded-md p-5'>
                            <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald" }}>Narx bo‘yicha filtr</h2>
                            <div className="flex items-center space-x-1">
                                <input type="number" className='w-1/2 px-1 outline-none' placeholder="Minimal narx" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
                                <span>-</span>
                                <input type="number" className='w-1/2 px-1 outline-none' placeholder="Maksimal narx" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                            </div>
                            <button className='bg-black text-white w-full rounded py-1 mt-5' onClick={handleApply}>Filtrni qo‘llash</button>
                        </div>

                        {/* O‘lchamlar */}
                        <div className='my-10 border p-5 rounded-md'>
                            <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald", fontSize: "24px" }}>
                                O‘lchamlar (EU)
                            </h2>
                            <div className='grid grid-cols-4 gap-2'>
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => handleSizeChange(size)}
                                        className={`border rounded p-2 text-sm ${selectedSizes.includes(size) ? 'bg-black text-white' : 'bg-white'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Brendlar */}
                        <div className='my-10 border p-5 rounded-md'>
                            <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald" }}>Brendlar</h2>
                            <div className="max-h-96 overflow-y-auto space-y-1">
                                {brands.map((item, index) => (
                                    <label key={index} className="flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Modellar */}
                        <div className='my-10 border p-5 rounded-md'>
                            <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald" }}>Modellar</h2>
                            <div className="max-h-96 overflow-y-auto space-y-1">
                                {models.map((item, index) => (
                                    <label key={index} className="flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Ranglar */}
                        <div className='my-10 border rounded-md p-5'>
                            <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald" }}>Rang</h2>
                            <div className="flex flex-wrap gap-2">
                                {colors.map((item, index) => (
                                    <div key={index} className={`w-6 h-6 rounded-full ${item} border cursor-pointer`} />
                                ))}
                            </div>
                        </div>

                        {/* Tozalash tugmasi */}
                        <button
                            onClick={handleReset}
                            className="w-full max-w-xl text-center py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            Barcha filtrlarni tozalash
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterModal;
