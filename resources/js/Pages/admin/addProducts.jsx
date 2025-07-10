import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { useToast } from '@/hooks/use-toast';

const AddProductForm = ({ categories }) => {
  const { toast } = useToast();
  const [previewImages, setPreviewImages] = useState({
    photo1: null,
    photo2: null,
    photo3: null
  });

  const { data, setData, post, processing, errors, reset } = useForm({
    product_name: '',
    category: '',
    sizes: [],
    price: '',
    colors: '',
    brend: '',
    photo1: null,
    photo2: null,
    photo3: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'sizes') {
      setData(name, value.split(',').map(s => s.trim()));
    } else {
      setData(name, value);
    }
  };

  const handleFileUpload = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      setData(key, file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImages(prev => ({ ...prev, [key]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    try {
      toast({
        title: "Saqlanmoqda...",
        description: "Mahsulot qo'shilmoqda, iltimos kuting...",
      });
      e.preventDefault();
      post('/admin-add-store', {
        forceFormData: true,
        onSuccess: () => {
          reset();
          setPreviewImages({ photo1: null, photo2: null, photo3: null });
        },
      });
      window.location.href = '/admin-productStock'
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          toast({
            title: "Xatolik",
            description: "Iltimos, barcha maydonlarni to'ldiring.",
          });
        } else if (error.response.status === 401) {
          toast({
            title: "Xatolik",
            description: "Avval tizimga kirishingiz kerak.",
          });
        } else {
          toast({
            title: "Xatolik",
            description: `Xatolik yuz berdi: ${error.response.statusText}`,
          });
        }
      } else if (error.request) {
        toast({
          title: "Xatolik",
          description: "Serverga so'rov yuborishda xatolik.",
        });
      } else {
        toast({
          title: "Xatolik",
          description: `Xatolik: ${error.message}`,
        });
      }
    }
  };

  return (
    <div className='px-5 w-[1200px]'>
      <h1 className="text-3xl font-bold mb-4 p-5">Mahsulot qo'shish</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
        <div className="flex gap-24 justify-center">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex flex-col items-center  transition-all duration-700 ease-in-out hover:scale-110">
              <div className="relative group w-24 h-24">
                <div className="w-full h-full bg-slate-200 rounded-full flex items-center justify-center shadow-lg overflow-hidden hover:rotate-6 transition-transform duration-700">
                  {previewImages[`photo${i}`] ? (
                    <img
                      src={previewImages[`photo${i}`]}
                      alt={`Preview ${i}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-5xl animate-pulse">📷</span>
                  )}
                </div>
                <label className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-30 rounded-full transition">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={e => handleFileUpload(e, `photo${i}`)}
                  />
                  <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded-full">
                    Upload
                  </span>
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <input
            name="product_name"
            value={data.product_name}
            onChange={handleChange}
            placeholder="Product name"
            className="w-full border p-5 rounded-lg outline-none"
          />
          {errors.product_name && <div className="text-red-600">{errors.product_name}</div>}

          <select
            name="category_id"
            value={data.category_id}
            onChange={handleChange}
            className="w-full border p-5 rounded-lg outline-none"
          >
            <option value="">Kategoriya tanlang</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && <div className="text-red-600">{errors.category}</div>}

          <input
            name="sizes"
            value={data.sizes.join(', ')}
            onChange={handleChange}
            placeholder="Sizes (e.g. S, M, L)"
            className="w-full border p-5 rounded-lg outline-none"
          />

          <input
            name="price"
            value={data.price}
            onChange={handleChange}
            type="number"
            placeholder="Price"
            className="w-full border p-5 rounded-lg outline-none"
          />
          {errors.price && <div className="text-red-600">{errors.price}</div>}

          <input
            name="colors"
            value={data.colors}
            onChange={handleChange}
            placeholder="Colors (e.g. red, blue)"
            className="w-full border p-5 rounded-lg outline-none"
          />

          <input
            name="brend"
            value={data.brend}
            onChange={handleChange}
            placeholder="Brend"
            className="w-full border p-5 rounded-lg outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={processing}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {processing ? 'Saqlanmoqda...' : '💾 Saqlash'}
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
