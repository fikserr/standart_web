import React, { useState } from 'react';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';

const AddCategory = () => {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await axios.post('/admin/categories', { name });

      toast({
        title: 'Muvaffaqiyatli',
        description: `Kategoriya "${name}" qo‘shildi`,
      });

      setName('');
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors || {});
      } else {
        toast({
          title: 'Xatolik',
          description: 'Kategoriya qo‘shishda xatolik yuz berdi',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Yangi kategoriya qo‘shish</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Kategoriya nomi (masalan: Telefon)"
          className="w-full border px-4 py-2 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Yuklanmoqda...' : 'Saqlash'}
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
