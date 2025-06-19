// src/Pages/Register.jsx
import { useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { PiEyeClosed, PiEye } from "react-icons/pi";
import { Inertia } from '@inertiajs/inertia';
import VerifyCodeModal from '@shared/VerifyCodeModal';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    code: '' // bu modal orqali kiritiladi
  });

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/request-register', {
      onSuccess: () => {
        setShowModal(true);
      },
      preserveScroll: true,
      preserveState: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
  };

  const handleVerifyCode = (code) => {
    setData('code', code); // form ma'lumotiga kodni qo‘shadi

    post('/verify-register', {
      onSuccess: () => {
        setShowModal(false);       // modalni yopadi
        Inertia.visit('/login');   // yoki /home sahifaga o‘tkazadi
      }
    });
  };

  return (
    <div className='px-5 xl:px-32 my-32 flex justify-center'>
      <form onSubmit={handleSubmit} className='border rounded-lg p-5 w-[100%] sm:w-4/6 lg:w-3/6'>
        <h2 className='col-span-3' style={{ fontFamily: 'Oswald', fontSize: '24px' }}>Register</h2>
        <div className='grid grid-cols-1 p-5 gap-5'>
          <div className='bg-slate-100 p-3 rounded-lg space-y-2'>
            <h3 style={{ fontFamily: 'Oswald' }}>Ismingiz:</h3>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder='Ismingizni kiriting'
              className='bg-transparent w-full outline-none'
            />
            {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
          </div>

          <div className='bg-slate-100 p-3 rounded-lg space-y-2'>
            <h3 style={{ fontFamily: 'Oswald' }}>Elektron pochtangiz:</h3>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder='Emailni kiriting'
              className='bg-transparent w-full outline-none'
            />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
          </div>

          <div className='bg-slate-100 p-3 rounded-lg space-y-2 relative'>
            <h3 style={{ fontFamily: 'Oswald' }}>Parol:</h3>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder='Parol kiriting'
              className='bg-transparent w-full outline-none'
            />
            <span
              onClick={() => setShowPassword(prev => !prev)}
              className='absolute cursor-pointer right-2 top-6 p-3 text-2xl'
            >
              {showPassword ? <PiEye /> : <PiEyeClosed />}
            </span>
            {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
          </div>

          <div className='bg-slate-100 p-3 rounded-lg space-y-2 relative'>
            <h3 style={{ fontFamily: 'Oswald' }}>Parolni takrorlang:</h3>
            <input
              type={repeatPassword ? "text" : "password"}
              name="password_confirmation"
              value={data.password_confirmation}
              onChange={handleChange}
              placeholder='Parolni takrorlang'
              className='bg-transparent w-full outline-none'
            />
            <span
              onClick={() => setRepeatPassword(prev => !prev)}
              className='absolute cursor-pointer right-2 top-6 p-3 text-2xl'
            >
              {repeatPassword ? <PiEye /> : <PiEyeClosed />}
            </span>
          </div>
        </div>

        <div className='px-5 flex items-end justify-between'>
          <button
            type='submit'
            disabled={processing}
            className='p-3 bg-black text-white w-[40%] sm:w-[20%] rounded-lg text-center'
          >
            Saqlash
          </button>

          <a
            href="/login"
            className='underline hover:text-blue-500 duration-300'
          >
            LogIn
          </a>
        </div>
      </form>

      {/* Modal */}
      <VerifyCodeModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={(code) => {
          handleVerifyCode(code); // 👉 bu chiqayaptimi?
          // bu yerda tasdiqlash uchun so‘rov jo‘natilishi kerak
        }}
        email="user@example.com"
      />
    </div>
  );
};

export default Register;
