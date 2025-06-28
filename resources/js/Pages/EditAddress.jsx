import React, { useState, useEffect } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { toast } from '@/hooks/use-toast';

const EditAddress = () => {
  const { props } = usePage();
  const address = props.address || {};

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    street: '',
    city: '',
    house_number: '',
    region: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    setFormData({
      first_name: address.first_name || '',
      last_name: address.last_name || '',
      street: address.street || '',
      city: address.city || '',
      house_number: address.house_number || '',
      region: address.region || '',
      phone: address.phone || '',
    });
  }, [address]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    router.put(`/address-update/${address.id}`, formData, {
      onSuccess: () => {
        toast({ title: "✅ Muvaffaqiyatli", description: "Manzil yangilandi!" });
        router.visit('/address');
      },
      onError: (errors) => {
        setErrors(errors);
        toast({ title: "❌ Xatolik", description: "Ma'lumotni tekshiring." });
      },
      onFinish: () => setProcessing(false),
    });
  };



  return (
    <div className='my-24 px-5 xl:px-32'>
      <div className='flex items-center gap-2 mb-6'>
        <HiOutlineChevronLeft className='text-2xl' />
        <Link href="/address">
          <h1 className='font-bold text-5xl' style={{ fontFamily: "Oswald" }}>Joylashuv</h1>
        </Link>
      </div>

      <div className='max-w-3xl mx-auto bg-white p-8 rounded-lg shadow'>
        <h2 className='text-2xl font-bold mb-6'>Joylashuvni tahrirlash</h2>

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label>Ism</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className='w-full border rounded px-3 py-2'
            />
            {errors.first_name && <p className='text-red-500 text-sm'>{errors.first_name}</p>}
          </div>

          <div>
            <label>Familiya</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className='w-full border rounded px-3 py-2'
            />
            {errors.last_name && <p className='text-red-500 text-sm'>{errors.last_name}</p>}
          </div>

          <div>
            <label>Ko‘cha</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className='w-full border rounded px-3 py-2'
            />
            {errors.street && <p className='text-red-500 text-sm'>{errors.street}</p>}
          </div>

          <div>
            <label>Shahar</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className='w-full border rounded px-3 py-2'
            />
            {errors.city && <p className='text-red-500 text-sm'>{errors.city}</p>}
          </div>

          <div>
            <label>Uy raqami</label>
            <input
              type="text"
              name="house_number"
              value={formData.house_number}
              onChange={handleChange}
              className='w-full border rounded px-3 py-2'
            />
            {errors.house_number && <p className='text-red-500 text-sm'>{errors.house_number}</p>}
          </div>

          <div>
            <label>Viloyat</label>
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className='w-full border rounded px-3 py-2'
            />
            {errors.region && <p className='text-red-500 text-sm'>{errors.region}</p>}
          </div>

          <div>
            <label>Telefon raqam</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className='w-full border rounded px-3 py-2'
            />
            {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
          </div>

          <div className='flex gap-4 pt-4'>
            <button
              type="submit"
              disabled={processing}
              className='bg-black text-white px-6 py-2 rounded'
            >
              Saqlash
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAddress;
