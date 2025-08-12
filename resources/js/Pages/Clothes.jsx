import { Link } from '@inertiajs/react';
import FilterModal from '@/components/shared/filter-modal';
import FilterSidebar from '@/components/shared/filter-sidebar';
import { useState } from 'react';

const Clothes = ({ products }) => {
    const [priceFilter, setPriceFilter] = useState({ minPrice: '', maxPrice: '' });
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);

    const filteredProducts = products?.data?.filter(item => {
        const price = Number(item.price);

        // Narx bo'yicha filtr
        if (priceFilter.minPrice && price < Number(priceFilter.minPrice)) return false;
        if (priceFilter.maxPrice && price > Number(priceFilter.maxPrice)) return false;

        // O'lcham bo'yicha filtr
        if (selectedSizes.length > 0) {
            const hasMatchingSize = item.sizes?.some(size => selectedSizes.includes(size));
            if (!hasMatchingSize) return false;
        }

        // Rang bo'yicha filtr (ixtiyoriy - agar bo'lsa)
        if (selectedColors.length > 0 && item.colors) {
            const hasMatchingColor = item.colors.some(color => selectedColors.includes(color));
            if (!hasMatchingColor) return false;
        }

        return true;
    });

    // Umumiy o'lchamlar ro'yxati
    const allSizes = Array.from(new Set(
        products?.data?.flatMap(item => item.sizes || []) || []
    ));

    // Ranglar (ixtiyoriy agar mavjud bo'lsa)
    const allColors = Array.from(new Set(
        products?.data?.flatMap(item => item.colors || []) || []
    ));

    // Brendlar (ixtiyoriy agar mavjud bo'lsa)
    const allBrands = Array.from(new Set(
        products?.data?.map(p => p.brend).filter(Boolean)
    ));

    // Kategoriyalar (ixtiyoriy agar mavjud bo'lsa)
    const allCategories = Array.from(new Set(
        products?.data?.map(p => p.category?.name).filter(Boolean)
    ));

    return (
        <div className='px-5 xl:px-20 mt-20'>
            <h2 style={{ fontFamily: "Oswald" }} className='text-2xl'>Kiyimlar</h2>

            <FilterModal
                onPriceChange={setPriceFilter}
                onSizeChange={setSelectedSizes}
                onColorChange={setSelectedColors}
                sizes={allSizes}
                colors={allColors}
                brands={allBrands}
            />

            <div className='grid xl:grid-cols-4 xl:gap-5'>
                {/* Sidebar */}
                <div className='hidden xl:block px-3'>
                    <FilterSidebar
                        data={products.data}
                        colors={allColors}
                        sizes={allSizes}
                        brands={allBrands}
                        categories={allCategories}
                        variantsColors={allColors}
                        variantsSizes={allSizes}
                        onPriceChange={setPriceFilter}
                        onSizeChange={setSelectedSizes}
                        onColorChange={setSelectedColors}
                        onClearFilters={() => {
                            setPriceFilter({ minPrice: '', maxPrice: '' });
                            setSelectedSizes([]);
                            setSelectedColors([]);
                        }}
                    />
                </div>

                {/* Products List */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:col-span-3 gap-4 xl:mt-5'>
                    {filteredProducts?.map((item) => (
                        <Link href={`/detail/${item.id}`} key={item.id} className='rounded h-80'>
                            <div className='flex justify-end h-[65%] rounded-t-lg'>
                                <img
                                    src={`/storage/${item.photo1}?v=${Date.now()}`}
                                    alt={item.product_name}
                                    className="w-full overflow-hidden object-cover rounded"
                                    onError={(e) => {
                                        e.target.src = '/path/to/fallback-image.jpg';
                                    }}
                                />
                            </div>
                            <div className='flex items-end justify-between'>
                                <div className='p-2'>
                                    <p className='text-2xl font-semibold'>{item.product_name}</p>
                                    <p className='text-lg'>
                                        {Number(item.price).toLocaleString()} <span className='text-sm text-slate-500'>so'm</span>
                                    </p>
                                    <p className='text-sm text-slate-500'>
                                        {item.sizes?.join(', ')}
                                    </p>
                                </div>
                                <Link href={`/detail/${item.id}`} className='hidden sm:block'>
                                    <button className='bg-black text-white w-full p-2 rounded-lg hover:bg-gray-800 transition xl:px-8'>
                                        Ko'proq
                                    </button>
                                </Link>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clothes;
