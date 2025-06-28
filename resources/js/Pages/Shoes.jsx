import { Link } from '@inertiajs/react';
import { shoes } from '@/components/shared/lists';
import FilterModal from '@/components/shared/filter-modal';
import FilterSidebar from '@/components/shared/filter-sidebar';

const Shoes = () => {
    return (
        <div className='px-5 xl:px-20 mt-20'>
            <h2 style={{ fontFamily: "Oswald" }} className='text-2xl'>Oyoq kiyimlar</h2>
            <FilterModal/>
            <div className='grid xl:grid-cols-4 xl:gap-5'>
                <div className='hidden xl:block px-3 '>
                    <FilterSidebar/>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-3 my-5 col-span-3'>
                    {
                        shoes.map((item, index) => (
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