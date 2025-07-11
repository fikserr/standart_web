import EmptyCart from '@/components/shared/EmptyCart';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const CartPage = ({ cartItems, address }) => {
    if (!cartItems || cartItems.length === 0) {
        return <EmptyCart cartItems={cartItems} />;
    }
    const [selectedAddressId, setSelectedAddressId] = useState(null);

    // boshlanishida address bo‘lsa, default qilib birinchi addressni belgilash
    useEffect(() => {
        if (address && address.length > 0) {
            setSelectedAddressId(address[0].id);
        }
    }, [address]);

    // agar savat bo‘sh bo‘lsa, EmptyCart componentini ko‘rsatish


    // umumiy narxni hisoblash
    const calculateTotal = (items) => {
        return items.reduce((total, item) => {
            return total + (item.product?.price || 0) * item.quantity;
        }, 0);
    };

    // mahsulotni savatdan o‘chirish
    const handleDelete = (id) => {
        axios.delete(`/cart/${id}`)
            .then(() => {
                window.location.reload();
            })
            .catch((err) => console.error(err));
    };

    // buyurtmani yuborish
    const handlePlaceOrder = () => {
        if (!selectedAddressId) {
            alert("Iltimos, yetkazish manzilini tanlang!");
            return;
        }

        axios.post('/place-order', {
            address_id: selectedAddressId,
        })
            .then(() => {
                window.location.href = '/order-success';
            })
            .catch(() => {
                alert('Buyurtma berishda xatolik yuz berdi');
            });
    };

    return (
        <div className="px-4 md:px-10 py-10 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 mt-16">Savat</h1>
            <div className="flex gap-3 ">
                {cartItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img
                                src={`/storage/${item.product?.photo1}`}
                                alt={item.product?.product_name}
                                className="w-20 h-20 object-cover rounded"
                            />
                            <div>
                                <h2 className="font-semibold">{item.product?.product_name}</h2>
                                <p className="text-sm text-gray-500">Size: {item.size}</p>
                                <p className="text-sm text-gray-500">Narxi: {item.product?.price} so‘m</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <p>{item.quantity} dona</p>
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => handleDelete(item.id)}
                            >
                                O‘chirish
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Manzil tanlash */}
            <div className='bg-slate-200 p-3 rounded-lg max-w-lg mt-5'>
                <div className="my-6">
                    <label className="block text-gray-700 font-medium mb-2">Yetkazish manzili</label>
                    <select
                        value={selectedAddressId}
                        onChange={(e) => setSelectedAddressId(e.target.value)}
                        className="border px-4 py-2 rounded w-full bg-slate-100 "
                    >
                        {address?.map(address => (
                            <option key={address.id} value={address.id}>
                                {address.region}, {address.street}, {address.house}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Umumiy narx va buyurtma tugmasi */}
                <div className="mt-10 flex justify-between items-center border-t pt-6">
                    <h3 className="text-xl font-bold">
                        Umumiy: {calculateTotal(cartItems)} so‘m
                    </h3>
                    <button
                        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
                        onClick={handlePlaceOrder}
                    >
                        Buyurtma berish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
