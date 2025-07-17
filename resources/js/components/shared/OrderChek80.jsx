import React from 'react';

const CheckView = ({data}) => {
  

  return (
    <div className="max-w-3xl mx-auto border border-gray-700 p-6 bg-white font-sans text-sm">
      <h1 className="text-4xl font-extrabold text-center mb-2">{data.store.name}</h1>
      <p className="text-center">{data.store.address}</p>
      <p className="text-center mb-4">Telefon: {data.store.phone}</p>

      <div className="grid grid-cols-2 text-sm gap-y-1 mb-4">
        <p><strong>Mijoz:</strong> {data.client.name}</p>
        <p><strong>Sotuvchi:</strong> {data.seller}</p>
        <p><strong>Mijoz tel:</strong> {data.client.phone}</p>
        <p><strong>Sana:</strong> {data.date}</p>
        <p><strong>Chek №:</strong> {data.checkNo}</p>
      </div>

      <table className="w-full border border-collapse mt-2">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1 w-[5%]">№</th>
            <th className="border px-2 py-1 w-[60%] text-left">Nomi</th>
            <th className="border px-2 py-1 w-[12%]">O‘lchov</th>
            <th className="border px-2 py-1 w-[10%]">Miqdor</th>
            <th className="border px-2 py-1 w-[10%]">Narx $</th>
            <th className="border px-2 py-1 w-[14%]">Narx so‘m</th>
            <th className="border px-2 py-1 w-[14%]">Valyuta so‘m</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, i) => (
            <tr key={i}>
              <td className="border px-2 py-1 text-center">{i + 1}</td>
              <td className="border px-2 py-1 text-left font-semibold">{item.name}</td>
              <td className="border px-2 py-1 text-center">{item.unit}</td>
              <td className="border px-2 py-1 text-center">{item.quantity}</td>
              <td className="border px-2 py-1 text-right">{item.priceUSD}</td>
              <td className="border px-2 py-1 text-right">{item.priceUSD.toFixed(3)}</td>
              <td className="border px-2 py-1 text-right">{item.priceUZS.toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={6} className="border px-2 py-1 text-right font-bold">Jami:</td>
            <td className="border px-2 py-1 text-right font-bold">{data.totalUZS.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckView;
