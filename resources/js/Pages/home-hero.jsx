import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"

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
                <div className='h-[180px] sm500:h-[240px] sm:h-[280px] md:h-[350px] md992:h-[450px] xl:h-[500px] 2xl:h-[600px] overflow-hidden rounded-xl'>
                    <Carousel>
                        <CarouselContent>
                            {
                                banner.map((banner, index) => (
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
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default HomeHero
