import { useEffect, useRef, useState } from "react";
import { Link, router } from "@inertiajs/react";
import { FaTrashCan } from "react-icons/fa6";
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function ProductsUI({ banners }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const handleDelete = (id) => {
    router.delete(route('banners.destroy', id), {
      onSuccess: () => toast.success('Banner o‘chirildi!'),
      onError: () => toast.error('Xatolik yuz berdi!'),
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (banners?.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [banners?.length]);

  return (
    <div className="p-6 min-h-screen font-sans mx-auto">
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
              {banners.map((banner, index) => (
                <CarouselItem
                  key={banner.id}
                  className={`w-full relative transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'}`}
                >
                  <Card className="relative">
                    <CardContent className="flex items-center justify-center p-0 relative">
                      <img
                        src={`/storage/${banner.image}`}
                        alt={banner.name}
                        className="w-full h-[500px] object-cover rounded-xl"
                      />
                      {/* Delete */}
                      <button
                        onClick={() => handleDelete(banner.id)}
                        className="absolute top-5 right-5 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full text-xl"
                      >
                        <FaTrashCan />
                      </button>

                      {banners.length > 1 && (
                        <div className="absolute inset-0 flex justify-between items-center px-4">
                          <button
                            onClick={handlePrev}
                            className="relative left-1 bg-white text-black rounded-full shadow-md"
                          >
                            <ArrowLeft className="p-1" />
                          </button>
                          <button
                            onClick={handleNext}
                            className="relative right-1 bg-white text-black rounded-full shadow-md"
                          >
                            <ArrowRight className="p-1" />
                          </button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
