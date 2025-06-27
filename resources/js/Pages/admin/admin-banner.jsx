import React, { useState } from 'react'
import { Link } from '@inertiajs/react'

const AdminBanner = () => {
    const [banner, setBanner] = useState(null)

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setBanner(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className='p-6 min-h-screen font-sans xl:w-[1200px] mx-auto'>
            <h1 className='text-3xl font-bold mb-4'>Welcome to Banner Page</h1>
            <div className='flex justify-between my-5'>
                <div>
                    <input type="text" placeholder='Enter banner description' className='border p-2 px-3 rounded-lg w-[570px] outline-none' />
                </div>
                <Link href={'/admin-products'} className='bg-blue-600 rounded-lg p-2 px-10 text-white'>
                    saqlash
                </Link>
            </div>

            <div className='mb-4 flex items-center'>
                {/* <input
                    type='file'
                    accept='image/*'
                    onChange={handleImageUpload}
                    className='block w-3/6 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100'
                /> */}

                <div class="flex items-center justify-center w-full">
                    <label
                        htmlFor="dropzone-file"
                        className="relative flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden"
                    >
                        {!banner ? (
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                        ) : (
                            <img
                                src={banner}
                                alt="Uploaded Preview"
                                className="object-cover w-full h-full"
                            />

                        )}
                        <input
                            id="dropzone-file"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                        />
                    </label>
                </div>
            </div>

            {/* {banner && (
                <div className='mt-4'>
                    <img
                        src={banner}
                        alt='Banner Preview'
                        className='w-full h-96 object-cover rounded-lg shadow'
                    />
                    <button className='bg-blue-600 rounded-lg p-2 px-10 mt-5 text-white'>
                        saqlash
                    </button>
                </div>
            )} */}
        </div>
    )
}

export default AdminBanner
