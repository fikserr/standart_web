import React from 'react'
import OrderChek from '@/components/shared/orderChek';
import OrderChek80 from '@/components/shared/OrderChek80';

const OrderTable = () => {
    const data = {
        store: {
          name: "STROY LIGHT",
          address: "YANGI BOZOR XITOY QATOR 5-BLOK 46-DUKON",
          phone: "+998910900700"
        },
        seller: "ADMIN",
        client: {
          name: "ABDUSALIM QUVA",
          phone: "998916815606"
        },
        checkNo: "350",
        date: "10.07.2025 9:15:50",
        startBalance: 3100000,
        items: [
          {
            name: "AB KLE KATTA",
            unit: "DONA",
            quantity: 10,
            priceUSD: 0.228,
            priceUZS: 2.28
          }
        ],
        totalUZS: 2.28
      };
    return (
        <div className='min-h-screen mt-32'>
            <OrderChek80 data={data} />
        </div>
    )
}

export default OrderTable
