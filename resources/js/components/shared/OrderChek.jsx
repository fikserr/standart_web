import React from 'react';

const OrderCheck = ({ data }) => {
    const total = data.items.reduce((sum, item) => sum + item.total, 0);

    return (
        <div className="max-w-[280px] text-[10px] font-mono ">
            <h2 className="text-center text-[14px] font-bold">{data.shop.name}</h2>
            <p className="text-center">{data.shop.address}</p>
            <p className="text-center mb-1">Tel: {data.shop.phone}</p>
            <p className="text-center text-gray-500 text-[9px] mb-2">Kamchiliklar haqida 3 kun ichida xabar bering</p>

            <div className="flex justify-between mb-1">
                <div>
                    <p><strong>Mijoz:</strong> {data.client.name}</p>
                    <p><strong>Tel:</strong> {data.client.phone}</p>
                    <p><strong>Chek №:</strong> {data.checkNumber}</p>
                </div>
                <div className="text-right">
                    <p><strong>Sana:</strong></p>
                    <p>{data.date}</p>
                </div>
            </div>

            <table className="w-full border-t border-b text-[9px]">
                <thead>
                    <tr className="border-y text-left">
                        <th className="py-1">№</th>
                        <th>Nomi</th>
                        <th>O‘lch</th>
                        <th>Miqdor</th>
                        <th>Narx</th>
                        <th>Jami</th>
                    </tr>
                </thead>
                <tbody>
                    {data.items.map((item, idx) => (
                        <tr key={idx} className="align-top">
                            <td>{idx + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.unit}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.total}</td>
                        </tr>
                    ))}
                    <tr className="font-semibold border-t">
                        <td colSpan="5" className="text-right pr-1">Jami:</td>
                        <td>{total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-2 text-[10px] space-y-1">
                <p><strong>To‘langan:</strong> {data.paid}</p>
                <p><strong>Qarz:</strong> {data.debt}</p>
            </div>

            <p className="mt-3 text-center font-semibold text-[10px]">Xaridingiz uchun rahmat!</p>
        </div>
    );
};

export default OrderCheck;
