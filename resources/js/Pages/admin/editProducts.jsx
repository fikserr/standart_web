import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

const EditProduct = ({ product }) => {
  const [previewImages, setPreviewImages] = useState({
    photo1: product.photo1 || null,
    photo2: product.photo2 || null,
    photo3: product.photo3 || null,
  });

  const { data, setData, errors, processing, post } = useForm({
    product_name: product.product_name || '',
    category: product.category || '',
    sizes: Array.isArray(product.sizes)
      ? product.sizes
      : (typeof product.sizes === 'string'
        ? product.sizes.split(',').map(s => s.trim())
        : []),
    price: product.price || '',
    colors: product.colors || '',
    brend: product.brend || '',
    photo1: null,
    photo2: null,
    photo3: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'sizes') {
      setData(name, value.split(',').map(s => s.trim()));
    } else {
      setData(name, value);
    }
  };

  const handleFileChange = (e, key) => {
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

  const handlePhotoDelete = (key) => {
    Inertia.delete(`/admin-delete-photo/${product.id}/${key}`, {
      onSuccess: () => {
        setPreviewImages(prev => ({ ...prev, [key]: null }));
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('product_name', data.product_name);
    formData.append('category', data.category);
    formData.append('price', data.price);
    formData.append('colors', data.colors);
    formData.append('brend', data.brend);

    // Fayllar
    if (data.photo1) formData.append('photo1', data.photo1);
    if (data.photo2) formData.append('photo2', data.photo2);
    if (data.photo3) formData.append('photo3', data.photo3);

    // Razmerlar
    data.sizes.forEach((size, i) => {
      formData.append(`sizes[${i}]`, size);
    });

    post(`/admin-products/${product.id}`, {
      method: 'post',
      data: formData,
      headers: {
        'X-HTTP-Method-Override': 'PUT',
      },
      onSuccess: () => alert('Mahsulot muvaffaqiyatli yangilandi!'),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">📝 Mahsulotni tahrirlash</h2>

      <input
        name="product_name"
        value={data.product_name}
        onChange={handleInputChange}
        placeholder="Mahsulot nomi"
        className="w-full border p-2 rounded"
      />
      {errors.product_name && <p className="text-red-500">{errors.product_name}</p>}

      <input
        name="category"
        value={data.category}
        onChange={handleInputChange}
        placeholder="Kategoriya"
        className="w-full border p-2 rounded"
      />
      {errors.category && <p className="text-red-500">{errors.category}</p>}

      <input
        name="sizes"
        value={data.sizes.join(', ')}
        onChange={handleInputChange}
        placeholder="Razmerlar (S, M, L...)"
        className="w-full border p-2 rounded"
      />
      {errors.sizes && <p className="text-red-500">{errors.sizes}</p>}

      <input
        type="number"
        name="price"
        value={data.price}
        onChange={handleInputChange}
        placeholder="Narx"
        className="w-full border p-2 rounded"
      />
      {errors.price && <p className="text-red-500">{errors.price}</p>}

      <input
        name="colors"
        value={data.colors}
        onChange={handleInputChange}
        placeholder="Ranglar (qora, oq)"
        className="w-full border p-2 rounded"
      />
      {errors.colors && <p className="text-red-500">{errors.colors}</p>}

      <input
        name="brend"
        value={data.brend}
        onChange={handleInputChange}
        placeholder="Brend"
        className="w-full border p-2 rounded"
      />
      {errors.brend && <p className="text-red-500">{errors.brend}</p>}

      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map(i => {
          const key = `photo${i}`;
          console.log(previewImages[key]);
          return (
            <div key={key} className="space-y-2">
              <label>Rasm {i}</label>
              {previewImages[key] && (
                <div className="relative">
                  <img src={`/storage/${previewImages[key]}`} alt={`Photo ${i}`} className="w-full h-32 object-cover rounded" />
                  <button
                    type="button"
                    onClick={() => handlePhotoDelete(key)}
                    className="absolute top-1 right-1 text-white bg-red-600 p-1 rounded-full text-xs"
                  >🗑</button>
                </div>
              )}
              <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, key)} />
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        disabled={processing}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {processing ? 'Saqlanmoqda...' : '💾 Saqlash'}
      </button>
    </form>
  );
};

export default EditProduct;
