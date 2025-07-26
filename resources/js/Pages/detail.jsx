import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { HiOutlineChevronRight } from "react-icons/hi";
import Loading from '@/components/ui/loader';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import OrderModal from '@/components/shared/orderModal';

const Index = ({ detail }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [mainPhoto, setMainPhoto] = useState(detail?.photo1);
    const [activeSize, setActiveSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { processing } = useForm();
    console.log(useForm(), "useForm hook");
    const { toast } = useToast();
    const handleAddToCart = () => {
        if (!activeSize) {
            toast({
                title: 'Xatolik',
                description: 'Iltimos, o‘lchamni tanlang',
                variant: 'destructive',
            });
            return;
        }
        axios.post('/add-to-cart', {
            product_id: detail.id,
            quantity: quantity,
            size: activeSize
        }).then(() => {
            toast({
                title: 'Savatga qo‘shildi ✅',
                description: `${detail.product_name} savatga muvaffaqiyatli qo‘shildi!`
            });
            setModalOpen(true);
        }).catch(err => {
            console.error(err.response?.data);
        });
    };

    const tabs = ['Tafsilotlar'];
    console.log(processing, "processing state");
    if( processing ) return <Loading/> 
    return (
        <div className='my-20 px-5 xl:px-32'>
            <div className='grid sm:grid-cols-2 gap-5 md:gap-10 xl:grid-cols-2'>
                <div className='border-b-blue-300 grid gap-4 border-b-2'>
                    {/* Asosiy rasm */}
                    {mainPhoto && (
                        <img
                            src={`/storage/${mainPhoto}?v=${Date.now()}`}
                            alt={detail.product_name || 'Product image'}
                            className="w-full h-[350px] rounded-2xl object-cover"
                        />
                    )}

                    {/* Galereya rasmlari */}
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

                    {/* Narxi va quantity control */}
                    {/* ... */}
                         <div className='flex items-center justify-between mt-5'>
                        <div>
                            <p style={{ fontFamily: "OswaldLight", fontSize: "20px" }}>
                                Narxi: {detail.price.toLocaleString()} <span className='text-sm text-slate-500'>so'm</span>
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
            <OrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Index;
