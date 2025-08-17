import React, { useState } from 'react';

const FilterSidebar = ({
    brands = [],
    categories = [],
    variantsColors = [],
    variantsSizes = [],
    onPriceChange = () => { },
    onSizeChange = () => { },
    onCategoryChange = () => { },
    onBrandChange = () => { },
    onColorChange = () => { },
    onClearFilters = () => { }
}) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const toggleArrayItem = (arr, setArr, val, callback) => {
        const updated = arr.includes(val) ? arr.filter(i => i !== val) : [...arr, val];
        setArr(updated);
        callback && callback(updated);
    };

    return (
        <div>
            {/* Kategoriyalar */}
            <div className="border rounded-md p-5 mt-5">
                <h2 style={{ fontFamily: 'Oswald', fontSize: 24 }} className="mb-2 font-semibold">Kategoriyalar</h2>
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`p-1 rounded-md w-full text-left mb-1
                            ${selectedCategory === cat ? 'bg-black text-white' : 'bg-white text-black'}`}
                        onClick={() => {
                            setSelectedCategory(selectedCategory === cat ? null : cat);
                            onCategoryChange(cat);
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Narx filteri */}
            <div className="border rounded-md p-5 my-10">
                <h2 style={{ fontFamily: 'Oswald', fontSize: 24 }} className="mb-2 font-semibold">Narx bo‘yicha filter</h2>
                <div className="flex items-center space-x-1">
                    <input
                        type="number"
                        className="w-1/2 px-1 outline-none"
                        placeholder="Minimal narx"
                        value={minPrice}
                        onChange={e => setMinPrice(e.target.value)}
                    />
                    <span>-</span>
                    <input
                        type="number"
                        className="w-1/2 px-1 outline-none"
                        placeholder="Maksimal narx"
                        value={maxPrice}
                        onChange={e => setMaxPrice(e.target.value)}
                    />
                </div>
                <button
                    className="bg-black text-white w-full rounded py-1 mt-5"
                    onClick={() => onPriceChange({ minPrice, maxPrice })}
                >
                    Filter qo‘llash
                </button>
            </div>

            {/* O‘lchamlar */}
            <div className="border p-5 rounded-md my-10">
                <h2 style={{ fontFamily: 'Oswald', fontSize: 24 }} className="mb-2 font-semibold">O‘lchamlar</h2>
                <div className="grid grid-cols-4 gap-2">
                    {variantsSizes.map(size => (
                        <button
                            key={size}
                            className={`border rounded p-2 text-sm cursor-pointer
                                ${selectedSizes.includes(size) ? 'bg-black text-white' : 'bg-white text-black'}`}
                            onClick={() => toggleArrayItem(selectedSizes, setSelectedSizes, size, onSizeChange)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Ranglar */}
            <div className="border rounded-md p-5 my-10">
                <h2 style={{ fontFamily: 'Oswald', fontSize: 24 }} className="font-semibold mb-2">Rang</h2>
                <div className="grid grid-cols-4 gap-2">
                    {variantsColors.map(color => (
                        <button
                            key={color}
                            className={`border rounded p-2 text-sm cursor-pointer capitalize
                    ${selectedColors.includes(color) ? 'bg-black text-white' : 'bg-white text-black'}`}
                            onClick={() => toggleArrayItem(selectedColors, setSelectedColors, color, onColorChange)}
                        >
                            {color}
                        </button>
                    ))}
                </div>
            </div>

            {/* Brendlar */}
            <div className="border rounded-md p-5 mt-5">
                <h2 style={{ fontFamily: 'Oswald', fontSize: 24 }} className="mb-2 font-semibold">Brendlar</h2>
                {brands.map(brand => (
                    <button
                        key={brand}
                        className={`p-1 rounded-md w-full text-left mb-1
                ${selectedBrands === brand ? 'bg-black text-white' : 'bg-white text-black'}`}
                        onClick={() => {
                            setSelectedBrands(selectedBrands === brand ? null : brand);
                            onBrandChange(brand);
                        }}
                    >
                        {brand}
                    </button>
                ))}
            </div>

            {/* Tozalash */}
            <button
                className="w-full text-center py-2 mb-5 bg-gray-200 rounded hover:bg-gray-300"
                onClick={onClearFilters}
            >
                Barcha filtrlarni tozalash
            </button>
        </div>
    );
};

export default FilterSidebar;
