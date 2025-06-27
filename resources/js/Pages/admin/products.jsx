import { useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ui/carousel";

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
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [banners.length]);

  return (
    <div className='p-6 min-h-screen font-sans mx-auto'>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Products</h2>
        <Link href={'/admin-banner'} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Add Banner
        </Link>
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
    </div>
  );
}
