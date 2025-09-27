import { useEffect, useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const HomeHero = ({ banner }) => {
    const carouselRef = useRef(null);

    useEffect(() => {
        if (banner?.length > 1 && carouselRef.current) {
            const interval = setInterval(() => {
                const nextButton = carouselRef.current.querySelector('[data-carousel-next]');
                if (nextButton) nextButton.click();
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [banner]);

    return (
        <div className='p-5 relative w-full mt-16 2xl:px-20'>
            <div className='h-[230px] sm500:h-[300px] sm:h-[360px] md:h-[450px] md992:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden rounded-xl'>
                <Carousel ref={carouselRef}>
                    <CarouselContent>
                        {banner.map((item) => (
                            <CarouselItem key={item.id} className="w-full">
                                <Card>
                                    <CardContent className="flex items-center justify-center p-0">
                                        <img
                                            src={`/storage/${item.image}`}
                                            alt={item.name}
                                            width={1920}   // ✅ kenglik belgilandi
                                            height={800}   // ✅ balandlik belgilandi
                                            loading="lazy" // ✅ CLS ga yordam beradi
                                            decoding="async"
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default HomeHero;
