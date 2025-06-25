// src/Shared/VerifyCodeModal.jsx
import { useState } from 'react';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"


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
        <InputOTP
          maxLength={6}
          value={code}
          onChange={(value) => setCode(value)}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}

        >
          <InputOTPGroup className="w-full p-2 rounded mb-3 outline-none flex justify-center">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            Bekor qilish
          </button>
          <button
            onClick={handleVerify}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Tasdiqlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCodeModal;
