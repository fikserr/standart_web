import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { useToast } from '@/hooks/use-toast';

const EditProduct = ({ product, categories }) => {
  const { toast } = useToast();

  const [previewImages, setPreviewImages] = useState({
    photo1: product.photo1 || null,
    photo2: product.photo2 || null,
    photo3: product.photo3 || null,
  });

  const { data, setData, post, processing, errors } = useForm({
    product_name: product.product_name || '',
    category_id: product.category_id || '',
    brend: product.brend || '',
    photo1: null,
    photo2: null,
    photo3: null,
    variants: product.variants && Array.isArray(product.variants)
      ? product.variants
      : [{ size: '', color: '', price: '' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
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

  const handleVariantChange = (index, field, value) => {
    const updatedVariants = [...data.variants];
    updatedVariants[index][field] = value;
    setData('variants', updatedVariants);
  };

  const addVariant = () => {
    setData('variants', [...data.variants, { size: '', color: '', price: '' }]);
  };

  const removeVariant = (index) => {
    const updatedVariants = data.variants.filter((_, i) => i !== index);
    setData('variants', updatedVariants);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: "Saqlanmoqda...",
      description: "Mahsulot yangilanmoqda, iltimos kuting...",
    });

    post(`/admin-products/${product.id}`, {
      method: 'post',
      data,
      forceFormData: true,
      headers: {
        'X-HTTP-Method-Override': 'PUT',
      },
      onSuccess: () => {
        toast({
          title: "Muvaffaqiyatli",
          description: "Mahsulot tahrirlandi ✅",
        });
        window.location.href = '/admin-productStock';
      },
      onError: () => {
        toast({
          title: "Xatolik",
          description: "Ma'lumotlarni tekshiring.",
        });
      }
    });
  };

  return (
    <div className='px-5 w-[1200px]'>
      <h1 className="text-3xl font-bold mb-4 p-5">Mahsulotni tahrirlash</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">

        {/* Image Upload */}
        <div className="flex gap-24 justify-center">
          {[1, 2, 3].map(i => {
            const key = `photo${i}`;
            return (
              <div key={i} className="flex flex-col items-center hover:scale-110 transition-all duration-700">
                <div className="relative group w-24 h-24">
                  <div className="w-full h-full bg-slate-200 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                    {previewImages[key] ? (
                      <img
                        src={previewImages[key]?.startsWith('data:')
                          ? previewImages[key]
                          : `/storage/${previewImages[key]}`}
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
                      onChange={e => handleFileUpload(e, key)}
                    />
                    <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded-full">
                      Upload
                    </span>
                  </label>
                </div>
              </div>
            );
          })}
        </div>

        {/* Form Fields */}
        <div className='grid grid-cols-2 gap-5'>
          <input
            name="product_name"
            value={data.product_name}
            onChange={handleChange}
            placeholder="Mahsulot nomi"
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
            {categories?.length > 0 &&
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
          {errors.category_id && <div className="text-red-600">{errors.category_id}</div>}

          <input
            name="brend"
            value={data.brend}
            onChange={handleChange}
            placeholder="Brend"
            className="w-full border p-5 rounded-lg outline-none"
          />
        </div>

        {/* Variants */}
        <div>
          <h2 className="text-xl font-semibold mb-2 mt-6">Mahsulot variantlari</h2>
          {data.variants.map((variant, index) => (
            <div key={index} className="flex gap-4 mb-2 items-center">
              <input
                type="text"
                placeholder="Razmer"
                value={variant.size}
                onChange={(e) => handleVariantChange(index, 'size', e.target.value)}
                className="border p-3 rounded w-1/3"
              />
              <input
                type="text"
                placeholder="Rang"
                value={variant.color}
                onChange={(e) => handleVariantChange(index, 'color', e.target.value)}
                className="border p-3 rounded w-1/3"
              />
              <input
                type="number"
                placeholder="Narx"
                value={variant.price}
                onChange={(e) => handleVariantChange(index, 'price', e.target.value)}
                className="border p-3 rounded w-1/3"
              />
              <button type="button" onClick={() => removeVariant(index)} className="text-red-600 text-xl font-bold">✕</button>
            </div>
          ))}
          <button
            type="button"
            onClick={addVariant}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
          >
            ➕ Variant qo‘shish
          </button>
        </div>

        <button
          type="submit"
          disabled={processing}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-6"
        >
          {processing ? 'Saqlanmoqda...' : '💾 Saqlash'}
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
