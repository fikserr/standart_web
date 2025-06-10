import React, { useEffect, useRef, useState } from "react";
import { products } from "@/components/shared/lists";
import { Link } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ui/carousel";
import { Star } from "lucide-react";

const stars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <>
      {"★".repeat(fullStars)}
      {halfStar && "☆"}
      {"☆".repeat(emptyStars)}
    </>
  );
};

export default function ProductsUI() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const banners = [
    {
      id: 1,
      date: "September 12-22",
      title: "Enjoy free home delivery this summer",
      subtitle: "Designer Dresses - Pick from trendy Designer Dresses.",
    },
    {
      id: 2,
      date: "October 1-10",
      title: "Big Sale on Electronics",
      subtitle: "Save up to 50% on selected gadgets.",
    },
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // 3000 ms = 3 seconds

    return () => clearInterval(intervalRef.current); // Cleanup on component unmount
  }, [banners.length]);

  return (
    <div className="p-6 min-h-screen font-sans xl:w-[1200px] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Products</h2>
      </div>

      {/* Banner */}
      <div className="relative bg-blue-500 h-[400px] text-white rounded-xl p-8 mb-8 flex items-center overflow-hidden">
        <Carousel
          opts={{ loop: true, align: "start" }}
          className="w-full"
        >
          <CarouselContent >
            <AnimatePresence>
              {banners.map((banner) => (
                <CarouselItem key={banner.id}>
                  <motion.div
                    className="inset-0 flex"
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                      transition: "transform 0.5s ease-in-out",
                    }}
                  >
                    <div className="max-w-xl h-[380px] flex flex-col gap-5 px-24 pt-16">
                      <p className="text-sm opacity-70 top-1 left-5">{banner.date}</p>
                      <h3 className="text-3xl font-bold leading-snug mb-2">
                        {banner.title}
                      </h3>
                      <p className="opacity-80 mb-4">{banner.subtitle}</p>
                      <button className="bg-orange-500 w-[35%] hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-semibold">
                        Get Started
                      </button>
                    </div>
                    {/* <div className={`transition-opacity duration-1000 ${currentIndex === index ? "opacity-100" : "opacity-0"}`}>
                  </div> */}
                  </motion.div>
                </CarouselItem>
              ))}
            </AnimatePresence>
          </CarouselContent>
          <CarouselPrevious className="absolute left-1 top-1/2 transform -translate-y-1/2 text-black">
            ‹
          </CarouselPrevious >
          <CarouselNext className="absolute right-1 top-1/2 transform -translate-y-1/2 text-black">
            ›
          </CarouselNext>
        </Carousel>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
          >
            <div className="relative w-40 h-40 mb-4">
              <img
                src={p.image}
                alt={p.title}
                className="object-contain w-full h-full"
              />
              <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full w-6 h-6 flex items-center justify-center text-gray-700">
                ‹
              </button>
              <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full w-6 h-6 flex items-center justify-center text-gray-700">
                ›
              </button>
            </div>
            <div className="w-full flex justify-between items-center mb-1">
              <div>
                <h4 className="text-sm font-medium">{p.title}</h4>
                <p className="text-blue-600 font-semibold">${p.price.toFixed(2)}</p>
                <div className="text-orange-400 text-xs flex items-center">
                  <span>{stars(p.rating)}</span>
                  <span className="ml-1 text-gray-500 text-[10px]">
                    ({p.reviews})
                  </span>
                </div>
              </div>
              <button
                aria-label="Add to favorites"
                className="p-1 rounded-full hover:bg-gray-200"
              >
                <Star className="w-5 h-5" />
              </button>
            </div>
            <Link
              href={`/products/${p.id}`}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs rounded px-3 py-1"
            >
              Edit Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
