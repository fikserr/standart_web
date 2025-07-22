import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import OrderChek80 from '@/components/shared/OrderChekBig';

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
      },
      {
        name: "LED LAMPA 12W",
        unit: "DONA",
        quantity: 5,
        priceUSD: 0.5,
        priceUZS: 5.00
      },
      {
        name: "ROZETKA 220V",
        unit: "DONA",
        quantity: 20,
        priceUSD: 0.3,
        priceUZS: 3.00
      },
      {
        name: "VYKLYUCHATEL 1 KLAVIS",
        unit: "DONA",
        quantity: 15,
        priceUSD: 0.4,
        priceUZS: 4.00
      },
      {
        name: "KABEL 3x1.5mm",
        unit: "METR",
        quantity: 50,
        priceUSD: 0.2,
        priceUZS: 2.00
      },
      {
        name: "KABEL 3x2.5mm",
        unit: "METR",
        quantity: 30,
        priceUSD: 0.35,
        priceUZS: 3.50
      },
      {
        name: "PLAFON SVETILNIK",
        unit: "DONA",
        quantity: 8,
        priceUSD: 1.2,
        priceUZS: 12.00
      },
      {
        name: "SHTEPSEL VILKA",
        unit: "DONA",
        quantity: 25,
        priceUSD: 0.15,
        priceUZS: 1.50
      },
      {
        name: "AVTOMAT 16A",
        unit: "DONA",
        quantity: 12,
        priceUSD: 0.6,
        priceUZS: 6.00
      },
      {
        name: "SHCHETCHIK ELEKTR",
        unit: "DONA",
        quantity: 2,
        priceUSD: 5.0,
        priceUZS: 50.00
      }
    ],
    totalUZS: 89.58 // Bu qiymat barcha itemlarning narxlarining (UZS) yig'indisiga moslashtirilgan
  };

  const printRef = useRef();

  const handleDownload = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Chek_${data.checkNumber}.pdf`);
  };

  const handlePrint = () => {
    const originalContents = document.body.innerHTML;
    const printContents = printRef.current.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // sahifani tiklash
  };

  return (
    <div className='mt-3 px-20'>
      <div className='min-h-screen'>
        <div ref={printRef}>
          <OrderChek80 data={data} />
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            PDF yuklab olish
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Print qilish
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
