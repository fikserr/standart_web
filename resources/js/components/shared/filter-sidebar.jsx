import React from 'react'

const FilterSidebar = () => {
    return (
        <div>
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
                    {['Adidas', 'Asics', 'Nike', 'Puma', 'Reebok', 'New Balance', 'Jordan', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour', 'Under Armour',].map((item, index) => (
                        <label key={index} className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>{item}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className='my-10 border p-5 rounded-md'>
                <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald", fontSize: "24px" }}>Модели</h2>
                <div className="max-h-96 overflow-y-auto space-y-1">
                    {['Air Force 1 High', 'Air Force 1 Low', 'Air Force 1 Mid', 'Air Huarache', 'Air Jordan 1 Mid', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low', 'Air Jordan 1 Low',].map((item, index) => (
                        <label key={index} className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>{item}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className='my-10 border rounded-md p-5'>
                <h2 className="font-semibold mb-2" style={{ fontFamily: "Oswald", fontSize: "24px" }}>Цвет</h2>
                <div className="flex flex-wrap gap-2">
                    {['black', 'gray-400', 'yellow-400', 'blue-500', 'purple-500', 'orange-500', 'green-500', 'brown-500', 'pink-500', 'red-500', 'slate-500', 'red-900', 'black', 'gray-400', 'yellow-400', 'blue-500', 'purple-500', 'orange-500', 'green-500', 'brown-500', 'pink-500', 'red-500', 'slate-500', 'red-900', 'black', 'gray-400', 'yellow-400', 'blue-500', 'purple-500', 'orange-500', 'green-500', 'brown-500', 'pink-500', 'red-500', 'slate-500', 'red-900', 'black', 'gray-400', 'yellow-400', 'blue-500', 'purple-500', 'orange-500', 'green-500', 'brown-500', 'pink-500', 'red-500', 'slate-500', 'red-900',].map((item, index) => (
                        <div
                            key={index}
                            className={`w-9 h-9 rounded-full bg-${item} border cursor-pointer`}
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
    )
}

export default FilterSidebar
