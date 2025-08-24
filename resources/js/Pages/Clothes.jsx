import { Link } from '@inertiajs/react';
import FilterModal from '@/components/shared/filter-modal';
import FilterSidebar from '@/components/shared/filter-sidebar';
import { ImStarFull, ImStarEmpty } from "react-icons/im";
import { useState } from 'react';

const Shoes = ({ products }) => {
    const [priceFilter, setPriceFilter] = useState({ minPrice: '', maxPrice: '' });
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [starredItems, setStarredItems] = useState([]);

    const filteredProducts = products?.filter(item => {
        if (!item.variants || item.variants.length === 0) return false;

        // Narx bo‘yicha filter
        const hasMatchingPrice = item.variants.some(variant => {
            const price = Number(variant.price);
            if (priceFilter.minPrice && price < Number(priceFilter.minPrice)) return false;
            if (priceFilter.maxPrice && price > Number(priceFilter.maxPrice)) return false;
            return true;
        });
        if (!hasMatchingPrice) return false;

        // O‘lcham bo‘yicha filter
        if (selectedSizes.length > 0) {
            const hasMatchingSize = item.variants.some(variant =>
                variant.sizes?.some(size => selectedSizes.includes(size))
            );
            if (!hasMatchingSize) return false;
        }

        // Rang bo‘yicha filter
        if (selectedColors.length > 0) {
            const hasMatchingColor = item.variants.some(variant =>
                variant.colors?.some(color => selectedColors.includes(color))
            );
            if (!hasMatchingColor) return false;
        }

        // Brend bo‘yicha filter
        if (selectedBrands.length > 0 && !selectedBrands.includes(item.brend)) {
            return false;
        }

        // Kategoriya bo‘yicha filter
        if (selectedCategories.length > 0 && !selectedCategories.includes(item.category?.name)) {
            return false;
        }

        return true;
    });

    const handleClick = (e, productId) => {
        e.preventDefault();
        setStarredItems(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    // Unikal qiymatlarni olish
    const allColors = Array.from(new Set(
        products?.flatMap(product =>
            product.variants.flatMap(variant => variant.colors || [])
        ) || []
    ));
    const allSizes = Array.from(new Set(
        products?.flatMap(product =>
            product.variants.flatMap(variant => variant.sizes || [])
        ) || []
    ));
    const allBrands = Array.from(new Set(
        products?.map(p => p.brend).filter(Boolean)
    ));
    const allCategories = Array.from(new Set(
        products?.map(p => p.category?.name).filter(Boolean)
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
                        colors={allColors}
                        sizes={allSizes}
                        brands={allBrands}
                        categories={allCategories}
                        variantsColors={allColors}
                        variantsSizes={allSizes}
                        onPriceChange={setPriceFilter}
                        onSizeChange={setSelectedSizes}
                        onColorChange={setSelectedColors}
                        onBrandChange={setSelectedBrands}
                        onCategoryChange={setSelectedCategories}
                        onClearFilters={() => {
                            setPriceFilter({ minPrice: '', maxPrice: '' });
                            setSelectedSizes([]);
                            setSelectedColors([]);
                            setSelectedBrands([]);
                            setSelectedCategories([]);
                        }}
                    />
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:col-span-3 xl:h-2/5 gap-3'>
                    {filteredProducts?.map((item) => {
                        const minPrice = Math.min(...item.variants.map(v => v.price));
                        return (
                            <Link href={`/detail/${item.id}`} key={item.id} className='rounded relative'>
                                <div className='flex justify-end rounded-t-lg'>
                                    <img
                                        src={`/storage/${item.photo1}?v=${Date.now()}`}
                                        alt={item.product_name}
                                        className="w-full overflow-hidden object-cover h-56 rounded"
                                    />
                                </div>
                                <div className='flex items-end justify-between'>
                                    <div className=' overflow-hidden rounded-t-lg p-2'>
                                        <p className='text-2xl font-semibold'>{item.product_name}</p>
                                        <p className='text-lg'>
                                            {minPrice.toLocaleString()} <span className='text-sm text-slate-500'>so'm</span>
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
                                    <button
                                        onClick={(e) => handleClick(e, item.id)}
                                        className='absolute top-4 right-4'
                                    >
                                        {starredItems.includes(item.id) ? (
                                            <ImStarFull className="text-2xl text-yellow-400" />
                                        ) : (
                                            <ImStarEmpty className="text-2xl text-black" />
                                        )}
                                    </button>
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