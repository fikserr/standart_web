import { useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrashCan } from "react-icons/fa6";

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
      <div className="relative h-[500px] w-[1200px] text-white rounded-xl p-8 mb-8 overflow-hidden">
        <AnimatePresence>
          {banners?.[currentIndex] && (
            <motion.div
              key={banners[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={`/storage/${banners[currentIndex].image}`}
                alt={banners[currentIndex].name}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Optional: Previous/Next buttons */}
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? banners.length - 1 : prev - 1
            )
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10"
        >
          ‹
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % banners.length)
          }
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10"
        >
          ›
        </button>
        <button className="absolute bottom-4 right-4 text-xl"><FaTrashCan/></button>
      </div>
    </div>
  );
}
