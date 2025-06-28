import React, { useState } from 'react';
import axios from 'axios';
import { Link } from '@inertiajs/react';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { useToast } from '@/hooks/use-toast';

const AddAddress = ({ address }) => {
  const [formData, setFormData] = useState({
    first_name: address?.first_name || '',
    last_name: address?.last_name || '',
    street: address?.street || '',
    city: address?.city || '',
    house_number: address?.house_number || '',
    region: address?.region || '',
    phone: address?.phone || '',
  });

  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const { toast } = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    try {
      const response = await axios.post('/address-create', formData);
      toast({
        title: "Muvaffaqiyatli",
        description: "✅ Manzil saqlandi!",
      });
      alert('');
      setFormData({
        first_name: '',
        last_name: '',
        street: '',
        city: '',
        house_number: '',
        region: '',
        phone: '',
      })
    } catch (error) {
      if (error.response) {

        if (error.response.status === 422) {
          setErrors(error.response.data.errors);
        } else if (error.response.status === 401) {
          toast({
            title: "ERROR",
            description: "Avval login qiling!",
          });
        } else {
          toast({
            title: "ERROR",
            description: "Xatolik: " + error.response.statusText,
          });

        }

      } else if (error.request) {
        toast({
          title: "ERROR",
          description: "Serverdan javob kelmadi",
        });
      } else {
        toast({
          title: "ERROR",
          description: "So‘rov yuborishda xatolik: " + error.message,
        });
      }
    } finally {
      setProcessing(false);
    }
  };


  return (
    <div className='my-24 px-5 xl:px-32'>
      <div className='flex items-center gap-2'>
        <HiOutlineChevronLeft className='text-2xl' />
        <Link href={"/address"}>
          <h1 className='font-bold text-5xl' style={{ fontFamily: "Oswald" }}>Joylashuv</h1>
        </Link>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
        <div className='col-span-4 my-5 px-10'>
          <div className='grid grid-cols-4 items-center pl-6'>
            <h2 className='col-span-3 text-2xl' style={{ fontFamily: 'Oswald' }}>Joylashuv qo'shish</h2>
          </div>
          <form onSubmit={handleSubmit} className='grid p-5 gap-5'>
            <InputBlock label="Ismingiz:" name="first_name" value={formData.first_name} onChange={setFormData} error={errors.first_name} />
            <InputBlock label="Familiyangiz:" name="last_name" value={formData.last_name} onChange={setFormData} error={errors.last_name} />
            <InputBlock label="Ko'changiz:" name="street" value={formData.street} onChange={setFormData} className="sm:col-span-2" error={errors.street} />
            <InputBlock label="Shahar:" name="city" value={formData.city} onChange={setFormData} error={errors.city} />
            <InputBlock label="Uy raqami / xonadon:" name="house_number" value={formData.house_number} onChange={setFormData} error={errors.house_number} />
            <InputBlock label="Viloyat / tuman:" name="region" value={formData.region} onChange={setFormData} error={errors.region} />
            <InputBlock label="Telefon raqamingiz:" name="phone" value={formData.phone} onChange={setFormData} error={errors.phone} />

            <button type="submit" disabled={processing} className='p-3 bg-black text-white w-[40%] sm:w-[35%] rounded-lg text-center'>
              Saqlash
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputBlock = ({ label, name, value, onChange, className = '', error }) => (
  <div className={`bg-slate-100 p-3 rounded-lg space-y-2 ${className}`}>
    <h3 style={{ fontFamily: 'Oswald' }}>{label}</h3>
    <input
      type="text"
      value={value}
      onChange={e => onChange(prev => ({ ...prev, [name]: e.target.value }))}
      placeholder={`${label}ni kiriting`}
      className='bg-transparent w-full outline-none'
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default AddAddress;
