import EmptyCart from "@/components/shared/EmptyCart";
import { BiSolidTrash } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { router } from "@inertiajs/react";
import axios from "axios";

const CartPage = ({ cartItems, address }) => {
    const [items, setItems] = useState([]);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const { toast } = useToast();

    // boshlanishida address bo‘lsa, default qilib birinchi addressni belgilash
    useEffect(() => {
        if (address && address.length > 0) {
            setSelectedAddressId(address[0].id);
        }
    }, [address]);
    useEffect(() => {
        setItems(cartItems || []);
    }, [cartItems]);

    const calculateTotal = (items) => {
        return items.reduce((total, item) => {
            return total + (item.product?.price || 0) * item.quantity;
        }, 0);
    };

    // mahsulotni savatdan o‘chirish
    const handleDelete = (id) => {
        router.delete(`/cart/${id}`, {
            onSuccess: () => {
                toast({
                    title: "Mahsulot o‘chirildi",
                    description: "Sizning savatingizdan mahsulot o‘chirildi.",
                });

                // Mahalliy holatdan ham o‘chirish
                setItems((prev) => prev.filter((item) => item.id !== id));
            },
            onError: () => {
                toast({
                    title: "Xatolik",
                    description: "Mahsulotni o‘chirishda xatolik yuz berdi.",
                });
            },
        });
    };

    // buyurtmani yuborish
    const handlePlaceOrder = () => {
        if (!selectedAddressId) {
            toast({
                title: "Manzil tanlanmadi",
                description: "Iltimos, yetkazish manzilini tanlang.",
            });
            return;
        }
        axios
            .post("/place-order", {
                address_id: selectedAddressId,
            })
            .then(() => {
                window.location.href = "/order-success";
            })
            .catch(() => {
                alert("Buyurtma berishda xatolik yuz berdi");
            });
    };

    if (!items || items.length === 0) {
        return <EmptyCart cartItems={items} />;
    }

    return (
        <div className="px-10 sm:px-10 md:px-20 lg:px-44 xl:px-64 py-10 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 mt-16">Savat</h1>
            <div className="grid lg:grid-cols-2 gap-3">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="border w-full rounded-lg p-4 flex items-center justify-between"
                    >
                        <div className="flex items-start gap-4">
                            <img
                                src={`/storage/${item.product?.photo1}`}
                                alt={item.product?.product_name}
                                className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded"
                            />
                            <div className="sm:space-y-4 lg:space-y-1 xl:space-y-4">
                                <h2 className="font-semibold text-xl sm500:text-2xl">
                                    {item.product?.product_name}
                                </h2>
                                <p className="text-sm text-gray-500 sm:text-lg">
                                    Size: {item.size}
                                </p>
                                <p className="text-sm sm:text-lg text-gray-500">
                                    Narxi: {item.product?.price} so‘m
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-between h-full gap-4">
                            <button
                                className="text-red-500 hover:text-red-700 text-xl"
                                onClick={() => handleDelete(item.id)}
                            >
                                <BiSolidTrash />
                            </button>
                            <p className="flex gap-2">
                                {item.quantity}{" "}
                                <span className="hidden sm500:block">dona</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Manzil tanlash */}
            <div className="bg-slate-200 p-3 rounded-lg mt-5">
                <div className="my-6">
                    <label className="block text-gray-700 font-medium mb-2">
                        Yetkazish manzili
                    </label>
                    <select
                        value={selectedAddressId}
                        onChange={(e) => setSelectedAddressId(e.target.value)}
                        className="border px-4 py-2 rounded w-full outline-none bg-slate-100 "
                    >
                        {address?.map((address) => (
                            <option key={address.id} value={address.id}>
                                {address.region}, {address.city},{" "}
                                {address.street}, {address.house_number}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Umumiy narx va buyurtma tugmasi */}
                <div className="mt-10 flex justify-between items-center border-t pt-6">
                    <h3 className="text-xl font-bold">
                        Umumiy: {calculateTotal(items)} so‘m
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
