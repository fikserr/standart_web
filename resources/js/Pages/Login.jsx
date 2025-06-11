import { Link, useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { PiEyeClosed, PiEye } from "react-icons/pi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login'); // Laravelda `route('/login')` POST
  };

  return (
    <div className='px-5 xl:px-32 my-32 flex justify-center'>
      <form onSubmit={handleSubmit} className='border rounded-lg p-5 w-[100%] sm:w-4/6 lg:w-3/6'>
        <h2 className='col-span-3' style={{ fontFamily: 'Oswald', fontSize: '24px' }}>Login</h2>
        <div className='grid grid-cols-1 p-5 gap-5'>
          <div className='bg-slate-100 p-3 rounded-lg space-y-2'>
            <h3 style={{ fontFamily: 'Oswald' }}>Elektron pochtangiz:</h3>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              placeholder='Elektron pochtangizni kiriting'
              className='bg-transparent w-full outline-none'
            />
            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
          </div>

          <div className='bg-slate-100 p-3 rounded-lg space-y-2 relative'>
            <h3 style={{ fontFamily: 'Oswald' }}>Parol:</h3>
            <input
              type={showPassword ? "text" : "password"}
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              placeholder='Parolni kiriting'
              className='bg-transparent w-full outline-none'
            />
            <span
              onClick={() => setShowPassword(prev => !prev)}
              className='absolute cursor-pointer right-2 top-6 p-3 text-2xl'
            >
              {showPassword ? <PiEye /> : <PiEyeClosed />}
            </span>
            {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
          </div>
        </div>

        <div className='px-5 flex items-end justify-between'>
          <button
            type="submit"
            disabled={processing}
            className='p-3 bg-black text-white w-[40%] sm:w-[20%] rounded-lg text-center'
          >
            Kirish
          </button>
          <Link href={"/register"} className='underline hover:text-blue-500 duration-300'>Ro'yhatdan o'tish</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
