import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2 } from "lucide-react";
import { Link } from "@inertiajs/react";


const ProductStock = ({ products }) => {
    const [imageIndexes, setImageIndexes] = useState({});
    const [modalImage, setModalImage] = useState(null);
    const openImgModal = (productId, imagePath, photos) => {
        setModalImage(imagePath);
        setCurrentProductId(productId);
        setCurrentPhotos(photos);
    };
    const [currentProductId, setCurrentProductId] = useState(null);
    const [currentPhotos, setCurrentPhotos] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndexes((prev) => {
                const updated = {};
                products.forEach((product) => {
                    const photos = [product.photo1, product.photo2, product.photo3].filter(Boolean);
                    const currentIndex = prev[product.id] || 0;
                    updated[product.id] = (currentIndex + 1) % photos.length;
                });
                return updated;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [products]);

    const closeModal = () => {
        setModalImage(null);
    };

    const handlePhotoDelete = async (productId, photoKeys) => {
        if (!confirm("Rostdan ham bu rasmlarni o‘chirmoqchimisiz?")) return;

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content");

            const response = await fetch(`/admin-delete-product/${productId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRF-TOKEN": csrfToken,
                },
                body: JSON.stringify({ photoKeys }),
            });

            if (response.ok) {
                alert("Rasmlar muvaffaqiyatli o‘chirildi");
                window.location.reload();
            } else {
                const data = await response.json();
                alert("Xatolik: " + (data.message || "Noma'lum xatolik"));
            }
        } catch (error) {
            console.error("Xatolik:", error);
            alert("Serverda xatolik yuz berdi");
        }
    };

    return (
        <div className="p-6 mx-5 w-[1200px]">
            <h1 className="text-3xl font-bold mb-4">Product Stock</h1>
            <div className="mb-4">
                <Input placeholder="Search product name" className="max-w-sm" />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="text-left border-b">
                        <tr>
                            <th className="py-2">Image</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Available Color</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, idx) => {
                            const photos = [product.photo1, product.photo2, product.photo3].filter(Boolean);
                            const currentImage = photos[imageIndexes[product.id] || 0];
                            return (
                                <tr key={idx} className="border-b hover:bg-gray-50">
                                    <td className="py-2">
                                        <div className="relative w-24 h-24 flex items-center justify-center">
                                            <img
                                                src={`/storage/${currentImage}`}
                                                alt={product.product_name}
                                                className="w-20 h-20 rounded object-cover cursor-zoom-in"
                                                onClick={() => openImgModal(product.id, `/storage/${currentImage}`, photos)}
                                            />
                                        </div>
                                    </td>
                                    <td>{product.product_name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.brend}</td>
                                    <td>{product.colors}</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="outline">
                                                <Link href={`/admin-products/${product.id}/edit`}>
                                                    <Pencil className="w-4 h-4" />
                                                </Link>
                                            </Button>
                                            <Button
                                                size="icon"
                                                variant="outline"
                                                className="text-red-500"
                                                onClick={() => handlePhotoDelete(product.id, ['photo1', 'photo2', 'photo3'])}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {modalImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                        <div className="relative max-w-3xl w-full mx-4">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-xl"
                                title="Yopish"
                            >
                                ✖
                            </button>
                            {currentPhotos.length > 1 && (
                                <button
                                    onClick={() => {
                                        const index = currentPhotos.findIndex((img) => `/storage/${img}` === modalImage);
                                        const prevIndex = (index - 1 + currentPhotos.length) % currentPhotos.length;
                                        setModalImage(`/storage/${currentPhotos[prevIndex]}`);
                                    }}
                                    className="absolute left-2 top-1/2 hover:bg-black duration-700 bg-opacity-55 text-white p-2 px-4 rounded"
                                >
                                    &#8249;
                                </button>
                            )}
                            <img
                                src={modalImage}
                                alt="Product preview"
                                className="max-h-[70vh] w-full object-cover rounded shadow-lg"
                            />
                            {currentPhotos.length > 1 && (
                                <button
                                    onClick={() => {
                                        const index = currentPhotos.findIndex((img) => `/storage/${img}` === modalImage);
                                        const nextIndex = (index + 1) % currentPhotos.length;
                                        setModalImage(`/storage/${currentPhotos[nextIndex]}`);
                                    }}
                                    className="absolute right-2 top-1/2 hover:bg-black duration-700 bg-opacity-50 text-white p-2 px-4 rounded"
                                >
                                    &#8250;
                                </button>
                            )}
                        </div>
                    </div>
                )}
                <div className="text-sm text-gray-500 mt-4">Showing 1–09 of 78</div>
            </div>
        </div>
    );
};

export default ProductStock;
