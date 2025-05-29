import React, { useState } from 'react';

export default function VerifyCodeModal({ isOpen, onClose, onSubmit, email }) {
  const [code, setCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(code);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Tasdiqlash kodi</h2>
        <p className="mb-2 text-sm text-gray-600">Emailga yuborilgan 6 xonali kodni kiriting: <strong>{email}</strong></p>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border px-3 py-2 w-full rounded mb-4"
            maxLength={6}
            placeholder="000000"
            required
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 hover:underline"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Tasdiqlash
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
