import { Link } from '@inertiajs/react';
import FilterModal from '@/components/shared/filter-modal';
import FilterSidebar from '@/components/shared/filter-sidebar';
import { useState } from 'react';

const Shoes = ({ products }) => {
    const [priceFilter, setPriceFilter] = useState({ minPrice: '', maxPrice: '' });
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);

    const filteredProducts = products?.data?.filter(item => {
        if (!item.variants || item.variants.length === 0) return false;

        const hasMatchingPrice = item.variants.some(variant => {
            const price = Number(variant.price);
            if (priceFilter.minPrice && price < Number(priceFilter.minPrice)) return false;
            if (priceFilter.maxPrice && price > Number(priceFilter.maxPrice)) return false;
            return true;
        });
        if (!hasMatchingPrice) return false;

        if (selectedSizes.length > 0) {
            const hasMatchingSize = item.variants.some(variant =>
                variant.sizes?.some(size => selectedSizes.includes(size))
            );
            if (!hasMatchingSize) return false;
        }

        if (selectedColors.length > 0) {
            const hasMatchingColor = item.variants.some(variant =>
                variant.colors?.some(color => selectedColors.includes(color))
            );
            if (!hasMatchingColor) return false;
        }

        return true;
    });

    // Ranglar ro‘yxati
    const allColors = Array.from(new Set(
        products?.data?.flatMap(product =>
            product.variants.flatMap(variant => variant.colors || [])
        ) || []
    ));

    // O‘lchamlar ro‘yxati
    const allSizes = Array.from(new Set(
        products?.data?.flatMap(product =>
            product.variants.flatMap(variant => variant.sizes || [])
        ) || []
    ));

    // Brendlar
    const allBrands = Array.from(new Set(
        products?.data?.map(p => p.brend).filter(Boolean)
    ));

    // Kategoriyalar
    const allCategories = Array.from(new Set(
        products?.data?.map(p => p.category?.name).filter(Boolean)
    ));

    return (
        <div className='px-5 xl:px-20 mt-20'>
            <h2 style={{ fontFamily: "Oswald" }} className='text-2xl'>Mahsulotlar</h2>

            <FilterModal
                onPriceChange={setPriceFilter}
                onSizeChange={setSelectedSizes}
                onColorChange={setSelectedColors}
                sizes={allSizes}
                colors={allColors}
                brands={allBrands}
            />

            <div className='grid xl:grid-cols-4 xl:gap-5 w-full'>
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

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:col-span-3 gap-4 xl:mt-5'>
                    {filteredProducts?.map((item) => {
                        const minPrice = Math.min(...item.variants.map(v => v.price));

                        return (
                            <Link href={`/detail/${item.id}`} key={item.id} className='rounded h-80'>
                                <div className='flex justify-end h-[65%] rounded-t-lg'>
                                    <img
                                        src={`/storage/${item.photo1}?v=${Date.now()}`}
                                        alt={item.product_name}
                                        className="w-full overflow-hidden object-cover rounded"
                                    />
                                </div>
                                <div className='flex items-end justify-between'>
                                    <div className='p-2'>
                                        <p className='text-2xl font-semibold'>{item.product_name}</p>
                                        <p className='text-lg'>
                                            {minPrice.toLocaleString()} <span className='text-sm text-slate-500'>so'mdan</span>
                                        </p>
                                        <p className='text-sm text-slate-500'>
                                            {item.variants.map((variant, index) => (
                                                <span key={variant.id}>
                                                    {variant.sizes?.join(', ')}
                                                    {index < item.variants.length - 1 ? ', ' : ''}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Shoes;
