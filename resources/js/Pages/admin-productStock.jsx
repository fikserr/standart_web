import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2 } from "lucide-react";
import { productStock } from "@/components/shared/lists";



const ProductStock = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div className="p-6 mx-5 w-[1200px]">
            <h1 className="text-3xl font-bold mb-4">Product Stock</h1>
            <div className="mb-4">
                <Input placeholder="Search product name" className="max-w-sm" />
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="text-left border-b">
                            <tr>
                                <th className="py-2">Image</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Piece</th>
                                <th>Available Color</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productStock.map((product, idx) => (
                                <tr key={idx} className="border-b hover:bg-gray-50">
                                    <td className="py-2">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-32 h-20 rounded cursor-pointer"
                                            onClick={() => setSelectedImage(product.image)}
                                        />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.piece}</td>
                                    <td>
                                        <div className="flex gap-1">
                                            {product.colors.map((color, i) => (
                                                <span
                                                    key={i}
                                                    className="w-4 h-4 rounded-full border"
                                                    style={{ backgroundColor: color }}
                                                ></span>
                                            ))}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="outline">
                                                <Pencil className="w-4 h-4" />
                                            </Button>
                                            <Button size="icon" variant="outline" className="text-red-500">
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {selectedImage && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-1000 ease-in opacity-100"
                            onClick={() => setSelectedImage(null)}
                        >
                            <div className="bg-white p-4 rounded shadow-lg max-w-lg max-h-[90vh] overflow-auto transform transition-transform duration-1000 scale-100">
                                <img src={selectedImage} alt="Modal" className="w-full h-auto rounded" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="text-sm text-gray-500 mt-4">Showing 1–09 of 78</div>
        </div>
    );
};

export default ProductStock;
