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
    <div className="min-h-screen flex items-center justify-center bg-[#ffffff] perspective-1000 overflow-hidden relative font-sans">
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#a1f3ee_0%,_#e2f0ff_80%)] opacity-20"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-repeat opacity-[0.05]" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-[90%] max-w-xl bg-white/70 rounded-xl backdrop-blur-xl border border-blue-800/30 p-10 shadow-[0_0_40px_#c0eaff60] animate-fadeIn"
      >
        <div className="absolute -inset-0.5 rounded-xl blur-xl bg-gradient-to-br from-cyan-200/30 via-blue-300/10 to-purple-200/20 animate-tilt z-[-1]" />

        <h2 className="text-center text-4xl font-bold tracking-widest text-black mb-10 uppercase">
          Kirish
        </h2>

        <div className="space-y-6">
          <div>
            <label className="text-black text-sm mb-1 block">Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              placeholder="you@light.system"
              className="w-full bg-transparent border-b border-black placeholder-slate-300 focus:outline-none py-2 text-gray-800"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="relative">
            <label className="text-black text-sm mb-1 block">Parol</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              placeholder="********"
              className="w-full bg-transparent border-b border-black placeholder-slate-300 focus:outline-none py-2 text-gray-800"
            />
            <span
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute top-9 right-2 cursor-pointer text-black"
            >
              {showPassword ? <PiEye /> : <PiEyeClosed />}
            </span>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
        </div>

        <div className="mt-10 flex justify-between items-center">
          <button
            type="submit"
            disabled={processing}
            className="px-6 py-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 text-white font-bold rounded-full hover:scale-105 transition shadow-md hover:shadow-blue-400/40"
          >
            Kirish
          </button>
          <Link href="/register" className="text-black underline hover:text-blue-800 text-sm transition">
            Registratsiya
          </Link>
        </div>
      </form>
    </div>


  );
};

export default Login;
