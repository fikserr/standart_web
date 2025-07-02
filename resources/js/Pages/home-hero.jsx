import { useEffect, useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
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
        <div className='p-5 relative w-full mt-20 2xl:px-20'>
            <div className='h-[180px] sm500:h-[250px] sm:h-[300px] md:h-[400px] md992:h-[450px] xl:h-[700px] 2xl:h-[600px] overflow-hidden rounded-xl'>
                <Carousel ref={carouselRef}>
                    <CarouselContent>
                        {banner.map((item) => (
                            <CarouselItem key={item.id} className="w-full">
                                <Card>
                                    <CardContent className="flex items-center justify-center p-0">
                                        <img
                                            src={`/storage/${item.image}`}
                                            alt={item.name}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious data-carousel-prev />
                    <CarouselNext data-carousel-next />
                </Carousel>
            </div>
        </div>
    )
}

export default HomeHero;
