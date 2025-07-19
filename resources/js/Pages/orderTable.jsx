import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import OrderChek from '@/components/shared/OrderChek';

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
        <div className='mt-24 px-20'>
            <div className='min-h-screen'>
                <div ref={printRef}>
                    <OrderChek data={data} />
                </div>

                <div className="flex gap-3 mt-2">
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
