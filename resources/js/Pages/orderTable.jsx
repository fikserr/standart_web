import React from 'react'
import OrderChek from '@/components/shared/orderChek';

const OrderTable = () => {
    const data = {
        shop: {
            name: "STROY LIGHT",
            address: "YANGI BOZOR XITOY QATOR 5-BLOK 46-DUKON",
            phone: "+998910900700",
        },
        client: {
            name: "ABDUSALIM QUVA",
            phone: "998916815606",
        },
        checkNumber: "350",
        date: "10.07.2025 9:15:50",
        startBalance: 3100000,
        items: [
            {
                name: "AB KLE KATTA",
                unit: "DONA",
                quantity: 10,
                price: 0.228,
                total: 2.28
            }
        ],
        paid: 1526.4,
        debt: 1573.6
    };
    return (
        <div className='min-h-screen mt-32'>
            <OrderChek data={data} />
        </div>
    )
}

export default OrderTable
