import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const AddProductForm = () => {
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
    e.preventDefault();
    post('/admin-add-store', {
      forceFormData: true,
      onSuccess: () => {
        reset();
        setPreviewImages({ photo1: null, photo2: null, photo3: null });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Add New Product</h1>

      <input
        name="product_name"
        value={data.product_name}
        onChange={handleChange}
        placeholder="Product name"
        className="w-full border p-2 rounded"
      />
      {errors.product_name && <div className="text-red-600">{errors.product_name}</div>}

      <input
        name="category"
        value={data.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full border p-2 rounded"
      />
      {errors.category && <div className="text-red-600">{errors.category}</div>}

      <input
        name="sizes"
        value={data.sizes.join(', ')}
        onChange={handleChange}
        placeholder="Sizes (e.g. S, M, L)"
        className="w-full border p-2 rounded"
      />

      <input
        name="price"
        value={data.price}
        onChange={handleChange}
        type="number"
        placeholder="Price"
        className="w-full border p-2 rounded"
      />
      {errors.price && <div className="text-red-600">{errors.price}</div>}

      <input
        name="colors"
        value={data.colors}
        onChange={handleChange}
        placeholder="Colors (e.g. red, blue)"
        className="w-full border p-2 rounded"
      />

      <input
        name="brend"
        value={data.brend}
        onChange={handleChange}
        placeholder="Brend"
        className="w-full border p-2 rounded"
      />

      <div className="flex gap-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex flex-col items-center">
            <input type="file" accept="image/*" onChange={e => handleFileUpload(e, `photo${i}`)} />
            {previewImages[`photo${i}`] && (
              <img
                src={previewImages[`photo${i}`]}
                alt={`Preview ${i}`}
                className="w-24 h-24 object-cover mt-2"
              />
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={processing}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {processing ? 'Adding...' : 'Add Product'}
      </button>
    </form>
  );
};

export default AddProductForm;
