import { useForm } from '@inertiajs/react';
import { useState } from 'react';
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
    code: ''
  });

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/request-register', {
      onSuccess: () => setShowModal(true),
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
    <div className="min-h-screen flex items-center justify-center bg-[#ffffff] perspective-1000 overflow-hidden relative font-sans">
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#00ffe0_0%,_#0a0f1c_80%)] opacity-10"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-repeat opacity-[0.04]" />
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 w-[90%] max-w-2xl bg-white/70 rounded-xl backdrop-blur-2xl border border-cyan-800/30 p-10 shadow-[0_0_50px_#00ffe040] animate-fadeIn">
        <div className="absolute -inset-0.5 rounded-xl blur-xl bg-gradient-to-br from-cyan-200/30 via-blue-300/10 to-purple-200/20 animate-tilt z-[-1]" />

        <h2 className="text-center text-4xl font-bold tracking-widest text-black mb-10 uppercase">
        Registratsiya
        </h2>

        <div className="space-y-6">
          <div>
            <label className="text-black text-sm mb-1 block">Ismingiz</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder='Ismingizni kiriting'
              className="w-full bg-transparent border-b border-black placeholder-slate-300 focus:outline-none py-2 text-black"
            />
            {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
          </div>

          <div>
            <label className="text-black text-sm mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder='you@galaxy.space'
              className="w-full bg-transparent border-b border-black placeholder-slate-300 focus:outline-none py-2 text-black"
            />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
          </div>

          <div className="relative">
            <label className="text-black text-sm mb-1 block">Parol</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder='********'
              className="w-full bg-transparent border-b border-black placeholder-slate-300 focus:outline-none py-2 text-black"
            />
            <span onClick={() => setShowPassword(prev => !prev)} className="absolute top-9 right-2 cursor-pointer text-black">
              {showPassword ? <PiEye /> : <PiEyeClosed />}
            </span>
            {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
          </div>

          <div className="relative">
            <label className="text-black text-sm mb-1 block">Parolni takrorlang</label>
            <input
              type={repeatPassword ? "text" : "password"}
              name="password_confirmation"
              value={data.password_confirmation}
              onChange={handleChange}
              placeholder='********'
              className="w-full bg-transparent border-b border-black placeholder-slate-300 focus:outline-none py-2 text-black"
            />
            <span onClick={() => setRepeatPassword(prev => !prev)} className="absolute top-9 right-2 cursor-pointer text-black">
              {repeatPassword ? <PiEye /> : <PiEyeClosed />}
            </span>
          </div>
        </div>

        <div className="mt-10 flex justify-between items-center">
          <button
            type="submit"
            disabled={processing}
            className="px-6 py-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-bold rounded-full hover:scale-105 transition shadow-md hover:shadow-cyan-500/40"
          >
            Saqlash
          </button>

          <a href="/login" className="text-black underline hover:text-blue-800 text-sm transition">
            LogIn
          </a>
        </div>
      </form>

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
