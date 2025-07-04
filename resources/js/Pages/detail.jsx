import { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { HiOutlineChevronRight } from "react-icons/hi";
import axios from 'axios';

const Index = ({ detail }) => {
    const [mainPhoto, setMainPhoto] = useState(detail?.photo1);
    const [activeSize, setActiveSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { processing } = useForm();

    const handleAddToCart = () => {
        if (!activeSize) {
            alert("Iltimos, o‘lchamni tanlang");
            return;
        }
        axios.post('/add-to-cart', {
            product_id: detail.id,
            quantity: quantity,
            size: activeSize
        }).then(() => {
            alert('Qo‘shildi!');
        }).catch(err => {
            console.error(err.response?.data);
        });
    };

    const tabs = ['Tafsilotlar'];

    return (
        <div className='my-20 px-5 xl:px-32'>
            <div className='grid sm:grid-cols-2 gap-5 md:gap-10 xl:grid-cols-2'>
                {/* Rasmlar va asosiy rasm */}
                {/* ... bu qismi to‘g‘ri */}

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

                    {/* Narxi va quantity control */}
                    {/* ... */}

                    <button
                        onClick={handleAddToCart}
                        disabled={processing}
                        className='mt-4 w-full bg-black text-white py-2 rounded-md'
                    >
                        {processing ? "Yuklanmoqda..." : "Savatga qo‘shish"}
                    </button>

                    {/* Tafsilotlar */}
                    <div className='my-5 px-2 pt-2'>
                        {tabs.map((tab) => (
                            <p
                                key={tab}
                                className={`cursor-pointer ${tab === 'Tafsilotlar' ? 'text-black border-b-blue-700 border-b-2 pb-2' : 'text-slate-500'}`}
                            >
                                {tab}
                            </p>
                        ))}
                    </div>

                    <div className='space-y-2'>
                        {['Kategoriya', 'Brend', 'Rangi'].map((label, index) => {
                            const values = [
                                detail?.category?.name || "Noma'lum",
                                detail?.brend || "Yo‘q",
                                detail?.colors || "Noma'lum"
                            ];
                            return (
                                <div key={index} className='flex items-center justify-between' style={{ fontFamily: 'OswaldLight' }}>
                                    <h3 style={{ fontSize: "20px" }}>{label}</h3>
                                    <span className='text-slate-600 flex items-center'>
                                        {values[index]} <HiOutlineChevronRight />
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className='my-10'>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '20px' }}>Qiziqarli takliflar</h3>
                {/* Top tovarlar bu yerga */}
            </div>
        </div>
    );
};

export default Index;
