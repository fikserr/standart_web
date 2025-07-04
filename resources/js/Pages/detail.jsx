import { useState } from 'react';
import { HiOutlineChevronRight } from "react-icons/hi";
import { useForm } from '@inertiajs/react';

const Index = ({ detail }) => {
    const [mainPhoto, setMainPhoto] = useState(detail?.photo1);
    const [activeSize, setActiveSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const { post, processing } = useForm();

    const handleAddToCart = () => {
        if (!activeSize) {
            alert("Iltimos, o‘lchamni tanlang");
            return;
        }
        axios.post('/add-to-cart', {
            product_id: detail.id,
            quantity: 3,
            size: 'm'
        }).then(() => {
            alert('Qo‘shildi!')
        }).catch(err => {
            console.error(err.response?.data);
        });
    };

    const tabs = ['Tafsilotlar'];
    return (
        <div className='my-20 px-5 xl:px-32'>
            <div className='grid sm:grid-cols-2 gap-5 md:gap-10 xl:grid-cols-2'>
                <div className='border-b-blue-300 grid gap-4 border-b-2'>
                    {mainPhoto && (
                        <img
                            src={`/storage/${mainPhoto}?v=${Date.now()}`}
                            alt={detail.product_name || 'Product image'}
                            className="w-full h-[350px] rounded-2xl object-cover"
                        />
                    )}
                    <div className='grid grid-cols-3 gap-3 mb-3'>
                        {[detail.photo1, detail.photo2, detail.photo3].map((photo, index) => (
                            photo && (
                                <img
                                    key={index}
                                    src={`/storage/${photo}?v=${Date.now()}`}
                                    alt={`Product ${index + 1}`}
                                    className={`w-full h-[130px] object-cover rounded-lg cursor-pointer ${mainPhoto === photo ? 'ring-2 ring-blue-400' : ''}`}
                                    onClick={() => setMainPhoto(photo)}
                                />
                            )
                        ))}
                    </div>
                </div>

                <div className='my-5'>
                    <h1 className='text-2xl font-bold mb-2' style={{ fontFamily: "Oswald" }}>{detail.product_name}</h1>

                    <h2 className="font-semibold mb-2 text-lg">EU o‘lchamlar:</h2>
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-2">
                        {Array.isArray(detail.sizes) && detail.sizes.map((size, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveSize(size)}
                                className={`border rounded-lg px-4 py-2 text-center cursor-pointer
                                    ${activeSize === size ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}
                                `}
                            >
                                {size}
                            </div>
                        ))}
                    </div>

                    <div className='flex items-center justify-between mt-5'>
                        <div>
                            <p style={{ fontFamily: "OswaldLight", fontSize: "20px" }}>
                                Narxi: {detail.price.toLocaleString()} ₽
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} className='border px-2'>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(prev => prev + 1)} className='border px-2'>+</button>
                        </div>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        disabled={processing}
                        className='mt-4 w-full bg-black text-white py-2 rounded-md'
                    >
                        {processing ? "Yuklanmoqda..." : "Savatga qo‘shish"}
                    </button>

                    {/* Quyidagilar SEN so‘ragan: Brend, Kategoriya, Rang — buzilmaydi */}
                    <div className='sm:hidden xl:block'>
                        <div className='my-5 px-2 pt-2'>
                            <div className='flex justify-between text-slate-500'>
                                {tabs.map((tab) => (
                                    <p
                                        key={tab}
                                        className={`cursor-pointer ${tab === 'Tafsilotlar' ? 'text-black border-b-blue-700 border-b-2 pb-2' : 'text-slate-500'}`}
                                    >
                                        {tab}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                                <h3 style={{ fontSize: "20px" }}>Kategoriya</h3>
                                <span className='text-slate-600 flex items-center'>
                                    {detail?.category?.name || "Noma'lum"} <HiOutlineChevronRight />
                                </span>
                            </div>
                            <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                                <h3 style={{ fontSize: "20px" }}>Brend</h3>
                                <span className='text-slate-600 flex items-center'>
                                    {detail?.brend || "Yo‘q"} <HiOutlineChevronRight />
                                </span>
                            </div>
                            <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                                <h3 style={{ fontSize: "20px" }}>Rangi</h3>
                                <span className='text-slate-600 flex items-center'>
                                    {detail?.colors || "Noma'lum"} <HiOutlineChevronRight />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobilda ko‘rinadigan qismlar */}
            <div className='space-y-2 sm:hidden'>
                <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                    <h3 style={{ fontSize: "20px" }}>Kategoriya</h3>
                    <span className='text-slate-600 flex items-center'>
                        {detail?.category?.name || "Noma'lum"} <HiOutlineChevronRight />
                    </span>
                </div>
                <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                    <h3 style={{ fontSize: "20px" }}>Brend</h3>
                    <span className='text-slate-600 flex items-center'>
                        {detail?.brend || "Yo‘q"} <HiOutlineChevronRight />
                    </span>
                </div>
                <div style={{ fontFamily: 'OswaldLight' }} className='flex items-center justify-between'>
                    <h3 style={{ fontSize: "20px" }}>Rangi</h3>
                    <span className='text-slate-600 flex items-center'>
                        {detail?.colors || "Noma'lum"} <HiOutlineChevronRight />
                    </span>
                </div>
            </div>

            <div className='my-10'>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '20px' }}>Qiziqarli takliflar</h3>
                {/* Top tovarlar bu yerga <- Abdumalik tomonidan yozildi ChatGPT emas 😂 */}
            </div>
        </div>
    );
};

export default Index;
