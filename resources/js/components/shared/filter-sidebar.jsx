import React, { useState } from 'react'

const FilterSidebar = ({ onSizeChange = () => { }, onPriceChange = () => { } }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedSizes, setSelectedSizes] = useState([]);
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];

    const toggleSize = (size) => {
        let updatedSizes;
        if (selectedSizes.includes(size)) {
            updatedSizes = selectedSizes.filter(s => s !== size);
        } else {
            updatedSizes = [...selectedSizes, size];
        }
        setSelectedSizes(updatedSizes);
        onSizeChange(updatedSizes);
    };

    const handleApply = () => {
        onPriceChange({ minPrice, maxPrice });
    };
    return (
        <div>
            <div className='border rounded-md p-5 mt-5'>
                <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald", fontSize: "24px" }}>Kategoriyalar</h2>
                <div className="flex flex-col text-left">
                    <button className='text-left hover:bg-black p-1 rounded-md duration-500 hover:text-white'>Krossovkalar</button>
                    <button className='text-left hover:bg-black p-1 rounded-md duration-500 hover:text-white'>Kedlar</button>
                    <button className='text-left hover:bg-black p-1 rounded-md duration-500 hover:text-white'>Loferlar</button>
                    <button className='text-left hover:bg-black p-1 rounded-md duration-500 hover:text-white'>Sandalilar</button>
                    <button className='text-left hover:bg-black p-1 rounded-md duration-500 hover:text-white'>Shlepka</button>
                </div>
            </div>
            <div className='my-10 border rounded-md p-5'>
                <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald", fontSize: "24px" }}>Narx bo‘yicha filter</h2>
                <div className="flex items-center space-x-1">
                    <input type="number" className='w-1/2 px-1 outline-none' placeholder="Minimal narx" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
                    <span>-</span>
                    <input type="number" className='w-1/2 px-1 outline-none' placeholder="Maksimal narx" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                </div>
                <button className='bg-black text-white w-full rounded py-1 mt-5' onClick={handleApply}>Filter qo‘llash</button>
            </div>
            <div className='my-10 border p-5 rounded-md'>
                <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald", fontSize: "24px" }}>
                    O‘lchamlar (EU)
                </h2>
                <div className='grid grid-cols-4 gap-2'>
                    {sizes.map(size => (
                        <button
                            key={size}
                            onClick={() => {
                                const newSize = selectedSizes[0] === size ? [] : [size];
                                setSelectedSizes(newSize);
                                onSizeChange(newSize);
                            }}
                            className={`border rounded p-2 text-sm
                ${selectedSizes.includes(size) ? 'bg-black text-white' : 'bg-white'}
            `}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
            <div className='my-10 border p-5 rounded-md'>
                <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald", fontSize: "24px" }}>Brendlar</h2>
                <div className="max-h-96 overflow-y-auto space-y-1">
                    {['Adidas', 'Asics', 'Nike', 'Puma', 'Reebok', 'New Balance', 'Jordan', 'Under Armour', 'Under Armour', 'Under Armour'].map((item, index) => (
                        <label key={index} className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>{item}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className='my-10 border p-5 rounded-md'>
                <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald", fontSize: "24px" }}>Modellar</h2>
                <div className="max-h-32 overflow-y-auto space-y-1">
                    {['Air Force 1 High', 'Air Force 1 Low', 'Air Force 1 Mid', 'Air Huarache', 'Air Jordan 1 Mid', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low',].map((item, index) => (
                        <label key={index} className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>{item}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className='my-10 border rounded-md p-5'>
                <h2 className="font-semibold" style={{ fontFamily: "Oswald", fontSize: "24px" }}>Rang</h2>
                <div className="flex flex-wrap gap-2">
                    {['black', 'gray-400', 'yellow-400', 'blue-500', 'purple-500', 'orange-500', 'green-500', 'brown-500', 'pink-500', 'red-500', 'slate-500', 'red-900', 'black', 'gray-400', 'yellow-400', 'blue-500', 'purple-500', 'orange-500'].map((item, index) => (
                        <div
                            key={index}
                            className={`w-9 h-9 rounded-full bg-${item} border cursor-pointer`}
                        ></div>
                    ))}
                </div>
            </div>
            <div>
                <button className="w-full text-center py-2 mb-5  bg-gray-200 rounded hover:bg-gray-300">
                    Barcha filtrlarni tozalash
                </button>
            </div>
        </div >
    )
}

export default FilterSidebar
