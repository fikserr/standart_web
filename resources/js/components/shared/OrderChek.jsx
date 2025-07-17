import React from 'react';

const OrderCheck = ({ data }) => {


    const total = data.items.reduce((sum, item) => sum + item.total, 0);

    return (
        <div className="max-w-md mx-auto bg-white border border-black p-6 font-sans text-sm">
            <h2 className="text-center text-2xl font-bold mb-2">{data.shop.name}</h2>
            <p className="text-center mb-2">{data.shop.address}</p>
            <p className="text-center mb-2">Telefon: {data.shop.phone}</p>
            <p className="text-center text-xs text-gray-600 mb-6">Kamchiliklar haqida 3 kun ichida xabar berishingizni so‘raymiz</p>

            <div className="mb-2 flex justify-between items-start">
                <div className='space-y-2'>
                    <p><strong>Mijoz:</strong> {data.client.name}</p>
                    <p><strong>Tel:</strong> {data.client.phone}</p>
                    <p><strong>Chek №:</strong> {data.checkNumber}</p>
                </div>
                <div>
                    <p><strong>Sana:</strong> {data.date}</p>
                </div>
            </div>

            <table className="w-full border border-collapse mt-4">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="border py-1 w-[5%]">№</th>
                        <th className="border px-2 py-1 w-[100%]">Nomi</th>
                        <th className="border py-1 w-[3%]">O‘lch. birligi</th>
                        <th className="border py-1 w-[3%]">Miqdor</th>
                        <th className="border py-1 w-[10%]">Narx (so‘m)</th>
                        <th className="border py-1 w-[30%]">Jami (so‘m)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.items.map((item, idx) => (
                        <tr key={idx}>
                            <td className="border px-2 py-1 text-center">{idx + 1}</td>
                            <td className="border px-2 py-1">{item.name}</td>
                            <td className="border px-2 py-1 text-center">{item.unit}</td>
                            <td className="border px-2 py-1 text-center">{item.quantity}</td>
                            <td className="border px-2 py-1 text-right">{item.price}</td>
                            <td className="border px-2 py-1 text-right">{item.total}</td>
                        </tr>
                    ))}
                    <tr className="font-semibold">
                        <td colSpan="5" className="border px-2 py-1 text-right">Jami:</td>
                        <td className="border px-2 py-1 text-right">{total}</td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-6 space-y-1">
                <p><strong>To‘langan:</strong> {data.paid}</p>
                <p><strong>Qarz:</strong> {data.debt}</p>
            </div>

            <p className="mt-6 text-center font-semibold">Xaridingiz uchun rahmat!</p>
        </div>
    );
};

export default OrderCheck;
