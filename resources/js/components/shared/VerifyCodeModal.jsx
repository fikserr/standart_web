// src/Shared/VerifyCodeModal.jsx
import React, { useState } from 'react';

const VerifyCodeModal = ({ isOpen, onClose, onSubmit, email }) => {
  const [code, setCode] = useState('');

  const handleVerify = () => {
    onSubmit(code);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md w-[90%] sm:w-[400px]">
        <h2 className="text-xl font-semibold mb-4">Tasdiqlash kodi</h2>
        <p className="mb-2 text-sm text-gray-600">Emailga yuborilgan 6 xonali kodni kiriting: <strong>{email}</strong></p>

        <input
          type="text"
          maxLength={6}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full p-2 border rounded mb-3 outline-none"
          placeholder="123456"
        />

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            Bekor qilish
          </button>
          <button
            onClick={handleVerify}
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
          >
            Tasdiqlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCodeModal;
