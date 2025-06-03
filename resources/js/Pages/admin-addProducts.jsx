import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { useState } from 'react';

const AddProductForm = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const { data, setData, post, processing, errors, reset } = useForm({
    productName: '',
    productColor: '',
    productPrice: '',
    productDescription: '',
    productImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };


  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post('/admin-productStock', {
      forceFormData: true,
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div className="p-6 mx-5 w-[1200px]">
      <h1 className="text-3xl font-bold mb-10">Add New Product</h1>
      <div className="flex items-center justify-center px-4">
        <div className="shadow-md rounded-xl p-10 w-[1000px] bg-white">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-2xl overflow-hidden">
                {previewImage ? (
                  <img src={previewImage} alt="Preview" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <span>📷</span>
                )}
              </div>
              <label className="text-sm text-blue-600 mt-2 hover:underline cursor-pointer">
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              {errors.productImage && (
                <div className="text-red-500 text-sm mt-1">{errors.productImage}</div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Product name</label>
                <input
                  name="productName"
                  value={data.productName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter product name"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.productName && (
                  <div className="text-red-500 text-sm mt-1">{errors.productName}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Product color</label>
                <input
                  name="productColor"
                  value={data.productColor}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter product color"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.productColor && (
                  <div className="text-red-500 text-sm mt-1">{errors.productColor}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Product price</label>
                <input
                  name="productPrice"
                  value={data.productPrice}
                  onChange={handleChange}
                  type="number"
                  placeholder="Enter product price"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.productPrice && (
                  <div className="text-red-500 text-sm mt-1">{errors.productPrice}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Product description</label>
                <input
                  name="productDescription"
                  value={data.productDescription}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter description about the product"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.productDescription && (
                  <div className="text-red-500 text-sm mt-1">{errors.productDescription}</div>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={processing}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition"
              >
                {processing ? 'Adding...' : 'Add Now'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
