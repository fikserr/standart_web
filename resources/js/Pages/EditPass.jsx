import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import axios from 'axios';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { RiUserSettingsLine, RiLogoutBoxRLine } from "react-icons/ri";
import { RxHamburgerMenu, RxLockOpen2 } from "react-icons/rx";
import { VscLocation } from "react-icons/vsc";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import VerifyCodeModal from '@shared/VerifyCodeModal';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const EditPass = () => {
  const { props } = usePage();
  const userEmail = props.auth?.user?.email || '';
  const { toast } = useToast();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    current_password: '',
    new_password: '',
    new_password_confirmation: '',
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    try {
      const response = await axios.post('/update-password', formData);
      console.log(response.data);
      setEmail(userEmail);
      setShowModal(true);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors || {});
      } else {
        toast({
            title: "Error",
            description: "Noma’lum xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.",
          });
      }
    } finally {
      setProcessing(false);
    }
  };

  const onVerifyCodeSubmit = async (code) => {
    try {
      const response = await axios.post('/verify-password-code', { code });
      toast({
        title: "Muvaffaqiyatli",
        description: response.data.message,
      });
      setShowModal(false);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        toast({
            title: "Error",
            description: "❌ Kod noto‘g‘ri yoki muddati tugagan.'",
          });
      } else {
        toast({
            title: "Error",
            description: "'Noma’lum xatolik yuz berdi.",
          });
      }
    }
  };

  return (
    <div className='my-24 px-5 xl:px-32'>
      <div className='flex items-center gap-2'>
        <HiOutlineChevronLeft className='text-2xl' />
        <Link href="/profile">
          <h1 className='font-bold text-5xl' style={{ fontFamily: "Oswald" }}>Profile</h1>
        </Link>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
        <div className='border rounded-md max-w-xs p-5 my-5 space-y-3 text-xl hidden lg:block'>
          <Link href="/profile" className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400'>
            <BiUser /><span>Profil</span>
          </Link>
          <Link href="/profile-edit" className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400'>
            <RiUserSettingsLine /><span>Profilni tahrirlash</span>
          </Link>
          <Link href="/history-order" className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400'>
            <RxHamburgerMenu /><span>Tarix</span>
          </Link>
          <Link href="/address" className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400'>
            <VscLocation /><span>Joylashuv</span>
          </Link>
          <Link href="/edit-password" className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full font-bold'>
            <RxLockOpen2 /><span>Parol</span>
          </Link>
          <Link href="/" className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400'>
            <RiLogoutBoxRLine /><span>Chiqish</span>
          </Link>
        </div>

        <div className='col-span-3 my-3'>
          <div className='grid grid-cols-4 items-center'>
            <h2 className='col-span-3 text-2xl font-bold' style={{ fontFamily: 'Oswald' }}>
              Parolni tahrirlash
            </h2>
            <DropdownMenu>
              <DropdownMenuTrigger className='lg:hidden'>Open</DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white space-y-1 pb-3 flex flex-col">
                <DropdownMenuLabel>Parol</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/profile"><DropdownMenuItem>Profil</DropdownMenuItem></Link>
                <Link href="/edit-profile"><DropdownMenuItem>Profilni tahrirlash</DropdownMenuItem></Link>
                <Link href="/history-orders"><DropdownMenuItem>Buyurtmalar</DropdownMenuItem></Link>
                <Link href="/address"><DropdownMenuItem>Joylashuv</DropdownMenuItem></Link>
                <Link href="/"><DropdownMenuItem>Chiqish</DropdownMenuItem></Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <form onSubmit={handleSubmit} className='grid grid-cols-1 max-w-md p-5 gap-5'>
            {/* Joriy parol */}
            <div className='bg-slate-100 p-3 rounded-lg space-y-2 relative'>
              <h3 style={{ fontFamily: 'Oswald' }}>Joriy parol:</h3>
              <input
                type={showCurrentPassword ? 'text' : 'password'}
                value={formData.current_password}
                onChange={e => setFormData({ ...formData, current_password: e.target.value })}
                placeholder='Joriy parolni kiriting'
                className='bg-transparent w-full outline-none pr-8'
              />
              <span onClick={() => setShowCurrentPassword(prev => !prev)} className="absolute right-2 top-6 cursor-pointer text-2xl p-3">
                {showCurrentPassword ? <PiEye /> : <PiEyeClosed />}
              </span>
              {errors.current_password && <p className="text-red-500 text-sm">{errors.current_password}</p>}
            </div>

            {/* Yangi parol */}
            <div className='bg-slate-100 p-3 rounded-lg space-y-2 relative'>
              <h3 style={{ fontFamily: 'Oswald' }}>Yangi parol:</h3>
              <input
                type={showNewPassword ? 'text' : 'password'}
                value={formData.new_password}
                onChange={e => setFormData({ ...formData, new_password: e.target.value })}
                placeholder='Yangi parolni kiriting'
                className='bg-transparent w-full outline-none'
              />
              <span onClick={() => setShowNewPassword(prev => !prev)} className="absolute right-2 top-6 cursor-pointer text-2xl p-3">
                {showNewPassword ? <PiEye /> : <PiEyeClosed />}
              </span>
              {errors.new_password && <p className="text-red-500 text-sm">{errors.new_password}</p>}
            </div>

            {/* Yangi parolni takrorlash */}
            <div className='bg-slate-100 p-3 rounded-lg space-y-2 relative'>
              <h3 style={{ fontFamily: 'Oswald' }}>Yangi parolni takrorlang:</h3>
              <input
                type={showRepeatPassword ? 'text' : 'password'}
                value={formData.new_password_confirmation}
                onChange={e => setFormData({ ...formData, new_password_confirmation: e.target.value })}
                placeholder='Yangi parolni takrorlang'
                className='bg-transparent w-full outline-none'
              />
              <span onClick={() => setShowRepeatPassword(prev => !prev)} className='absolute right-2 top-6 cursor-pointer text-2xl p-3'>
                {showRepeatPassword ? <PiEye /> : <PiEyeClosed />}
              </span>
              {errors.new_password_confirmation && <p className="text-red-500 text-sm">{errors.new_password_confirmation}</p>}
            </div>

            <button
              type="submit"
              disabled={processing}
              className='p-3 bg-black text-white w-[40%] sm:w-[20%] rounded-lg text-center'
            >
              Saqlash
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      <VerifyCodeModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={onVerifyCodeSubmit}
        email={email}
      />
    </div>
  );
};

export default EditPass;
