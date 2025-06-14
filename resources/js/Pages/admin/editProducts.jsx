import { useState } from 'react';
import { useForm } from '@inertiajs/react';
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
    // photo1: null,
    // photo2: null,
    // photo3: null,
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
    if (!file) return;

    setData(key, file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImages(prev => ({
        ...prev,
        [key]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
    e.target.value = ''; // reset file input
  };

  const handlePhotoDelete = (key) => {
    setPreviewImages(prev => ({ ...prev, [key]: null }));
    setData(key, null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('product_name', data.product_name);
    formData.append('category', data.category);
    formData.append('price', data.price);
    formData.append('colors', data.colors);
    formData.append('brend', data.brend);

    if (data.photo1 instanceof File) formData.append('photo1', data.photo1);
    if (data.photo2 instanceof File) formData.append('photo2', data.photo2);
    if (data.photo3 instanceof File) formData.append('photo3', data.photo3);

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
    <div className='px-5 w-[1200px]'>
      <h1 className="text-3xl font-bold mb-4 p-5">Mahsulotni tahrirlash</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
        <div className="flex gap-24 justify-center">
          {[1, 2, 3].map(i => {
            const key = `photo${i}`;
            return (
              <div key={i} className="flex flex-col items-center transition-all duration-700 ease-in-out hover:scale-110">
                <div className="relative group w-24 h-24">
                  <div className="w-full h-full bg-slate-200 rounded-full flex items-center justify-center shadow-lg overflow-hidden hover:rotate-6 transition-transform duration-700">
                    {previewImages[key] && (
                      <div className="relative">
                        <img
                          src={previewImages[key]?.startsWith('data:')
                            ? previewImages[key]
                            : `/storage/${previewImages[key]}`}
                          alt={`Photo ${i}`}
                          className="w-full h-32 object-cover rounded"
                        />
                        <button
                          type="button"
                          onClick={() => handlePhotoDelete(key)}
                          className="absolute top-1 right-1 text-white bg-red-600 p-1 rounded-full text-xs"
                        >🗑</button>
                      </div>
                    )}
                  </div>
                  <label className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-30 rounded-full transition">
                    <input
                      key={previewImages[key] || 'empty'}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={e => handleFileChange(e, key)}
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
        <div className='grid grid-cols-2 gap-5'>
          <input
            name="product_name"
            value={data.product_name}
            onChange={handleInputChange}
            placeholder="Mahsulot nomi"
            className="w-full border p-5 rounded-lg outline-none"
          />
          {errors.product_name && <p className="text-red-500">{errors.product_name}</p>}

          <input
            name="category"
            value={data.category}
            onChange={handleInputChange}
            placeholder="Kategoriya"
            className="w-full border p-5 rounded-lg outline-none"
          />
          {errors.category && <p className="text-red-500">{errors.category}</p>}

          <input
            name="sizes"
            value={data.sizes.join(', ')}
            onChange={handleInputChange}
            placeholder="Razmerlar (S, M, L...)"
            className="w-full border p-5 rounded-lg outline-none"
          />
          {errors.sizes && <p className="text-red-500">{errors.sizes}</p>}

          <input
            type="number"
            name="price"
            value={data.price}
            onChange={handleInputChange}
            placeholder="Narx"
            className="w-full border p-5 rounded-lg outline-none"
          />
          {errors.price && <p className="text-red-500">{errors.price}</p>}

          <input
            name="colors"
            value={data.colors}
            onChange={handleInputChange}
            placeholder="Ranglar (qora, oq)"
            className="w-full border p-5 rounded-lg outline-none"
          />
          {errors.colors && <p className="text-red-500">{errors.colors}</p>}

          <input
            name="brend"
            value={data.brend}
            onChange={handleInputChange}
            placeholder="Brend"
            className="w-full border p-5 rounded-lg outline-none"
          />
          {errors.brend && <p className="text-red-500">{errors.brend}</p>}
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

export default EditProduct;
