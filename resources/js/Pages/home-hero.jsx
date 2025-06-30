import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const HomeHero = ({ banner }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    console.log(banner, "banners in home hero");

    useEffect(() => {
        if (banner?.length > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % banner.length);
            }, 5000);
        }
        return () => clearInterval(intervalRef.current);
    }, [banner?.length]);
    return (
        <div>
            <div className='p-5 relative w-full mt-20 2xl:px-20'>
                <div className='h-[400px] xl:h-[600px]'>
                    <AnimatePresence>
                        {banner?.[currentIndex] && (
                            <motion.div
                                key={banner[currentIndex].id}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full flex justify-center items-center"
                            >
                                <img
                                    src={`/storage/${banner[currentIndex].image}`}
                                    alt={banner[currentIndex].name}
                                    className="w-[90%] h-full object-cover rounded-xl"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default HomeHero
