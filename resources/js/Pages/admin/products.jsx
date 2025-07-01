import { useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrashCan } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

export default function ProductsUI({ banners }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (banners?.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [banners?.length]);

  return (
    <div className='p-6 min-h-screen font-sans mx-auto'>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Products</h2>
        <Link
          href={'/admin-banner'}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Banner
        </Link>
      </div>

      {/* Banner */}
      <div className="relative h-[700px] w-[1200px] text-white rounded-xl p-8 mb-8 overflow-hidden">
        <div className="border h-[500px] rounded-xl overflow-hidden">
          <Carousel>
            <CarouselContent>
              {
                banners.map((banner, index) => (
                  <CarouselItem
                    key={banner.id}
                    className={`w-full ${index === currentIndex ? 'block' : 'hidden'}`}
                  >
                    <div className="">
                      <Card>
                        <CardContent className="flex items-center justify-center p-0">
                          <img
                            src={`/storage/${banner.image}`}
                            alt={banner.name}
                            className="w-full rounded-xl"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))
              }
            </CarouselContent>
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0 ? banners.length - 1 : prev - 1
                )
              }
              className="absolute left-4 top-64 transform -translate-y-1/2 text-white text-3xl z-10"
            >
              ‹
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % banners.length)
              }
              className="absolute right-4 top-64 transform -translate-y-1/2 text-white text-3xl z-10"
            >
              ›
            </button>
          </Carousel>
        </div>
        <button className="absolute bottom-48 right-16 text-xl"><FaTrashCan /></button>
      </div>
    </div>
  );
}
