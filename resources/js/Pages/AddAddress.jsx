import React from 'react';
import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { RiUserSettingsLine, RiLogoutBoxRLine } from "react-icons/ri";
import { RxHamburgerMenu, RxLockOpen2 } from "react-icons/rx";
import { VscLocation } from "react-icons/vsc";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const AddAddress = ({ address }) => {
  const { data, setData, post, processing } = useForm({
    first_name: address?.first_name || '',
    last_name: address?.last_name || '',
    street: address?.street || '',
    city: address?.city || '',
    house_number: address?.house_number || '',
    region: address?.region || '',
    phone: address?.phone || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('address.store'));
  };

  return (
    <div className='my-24 px-5 xl:px-32'>
      <div className='flex items-center gap-2'>
        <HiOutlineChevronLeft className='text-2xl' />
        <Link href={"/profile"}>
          <h1 className='font-bold text-5xl' style={{ fontFamily: "Oswald" }}>Profile</h1>
        </Link>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
        {/* Sidebar */}
        <div className='border rounded-md max-w-xs p-5 my-5 space-y-3 text-xl hidden lg:block'>
          <SidebarLink href="/profile" icon={<BiUser />} label="Profil" />
          <SidebarLink href="/profile-edit" icon={<RiUserSettingsLine />} label="Profilni tahrirlash" />
          <SidebarLink href="/history-order" icon={<RxHamburgerMenu />} label="Tarix" />
          <SidebarLink href="/address" icon={<VscLocation />} label="Joylashuv" active />
          <SidebarLink href="/edit-password" icon={<RxLockOpen2 />} label="Parol" />
          <SidebarLink href="/" icon={<RiLogoutBoxRLine />} label="Chiqish" />
        </div>

        {/* Main form */}
        <div className='col-span-3 my-5'>
          <div className='grid grid-cols-4 items-center'>
            <h2 className='col-span-3 text-2xl' style={{ fontFamily: 'Oswald' }}>Profilni tahrirlash</h2>
            <DropdownMenu>
              <DropdownMenuTrigger className='lg:hidden'>Open</DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white space-y-1 pb-3 flex flex-col">
                <DropdownMenuLabel>Buyurtmalar</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownItem href="/profile">Profil</DropdownItem>
                <DropdownItem href="/history-order">Buyurtmalar</DropdownItem>
                <DropdownItem href="/address">Joylashuv</DropdownItem>
                <DropdownItem href="/edit-password">Parol</DropdownItem>
                <DropdownItem href="/">Chiqish</DropdownItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <form onSubmit={handleSubmit} className='grid p-5 gap-5'>
            <InputBlock label="Ismingiz:" value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} />
            <InputBlock label="Familiyangiz:" value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} />
            <InputBlock label="Ko'changiz:" value={data.street} onChange={(e) => setData('street', e.target.value)} className="sm:col-span-2" />
            <InputBlock label="Shahar:" value={data.city} onChange={(e) => setData('city', e.target.value)} />
            <InputBlock label="Uy raqami / xonadon:" value={data.house_number} onChange={(e) => setData('house_number', e.target.value)} />
            <InputBlock label="Viloyat / tuman:" value={data.region} onChange={(e) => setData('region', e.target.value)} />
            <InputBlock label="Telefon raqamingiz:" value={data.phone} onChange={(e) => setData('phone', e.target.value)} />

            <div className='px-5'>
              <button type="submit" disabled={processing} className='p-3 bg-black text-white w-[40%] sm:w-[20%] rounded-lg text-center'>
                Saqlash
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const SidebarLink = ({ href, icon, label, active = false }) => (
  <Link
    href={href}
    className={`flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full ${active ? 'font-bold' : 'text-slate-400'}`}
    style={{ fontFamily: "OswaldLight" }}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const DropdownItem = ({ href, children }) => (
  <Link href={href}>
    <DropdownMenuItem>{children}</DropdownMenuItem>
  </Link>
);

const InputBlock = ({ label, value, onChange, className = '' }) => (
  <div className={`bg-slate-100 p-3 rounded-lg space-y-2 ${className}`}>
    <h3 style={{ fontFamily: 'Oswald' }}>{label}</h3>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={`${label}ni kiriting`}
      className='bg-transparent w-full outline-none'
    />
  </div>
);

export default AddAddress;
