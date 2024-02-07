import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import OurCustomers from "./OurCustomers"
import TestimonialCard from "./TestimonialCard"
import { clientTestimonials } from "@/constants/clientTestimonials"
import { ArrowLeft, ArrowRight } from "lucide-react";

const bgColors = ['bg-orange-100', 'bg-green-100', 'bg-cyan-100', 'bg-fuchsia-100', 'bg-violet-100', 'bg-amber-100'];

const Testimonials = () => {
    return (
        <div>
            <div className="mb-28">
                <OurCustomers />
            </div>
            <div>
                <div className="mb-[4.375rem] font-roboto">
                    <h1 className="text-3xl sm:text-5xl text-[#061C3D] font-extrabold leading-[3.75rem] sm:mb-6 text-center sm:text-left">
                        What client says
                    </h1>
                    <p className="text-lg text-[#566B84] font-normal max-w-[51ch]">
                        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra.
                    </p>
                </div>
                <div>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                        orientation="horizontal"
                    >
                        <CarouselContent>
                            {clientTestimonials.map((item, index) => (
                                <CarouselItem key={item.name} className={`pl-6 md:basis-1/2 lg:basis-1/3`}>
                                    <div className={`h-full sm:h-[26rem] ${bgColors[index % bgColors.length]} rounded-3xl`}>
                                        <TestimonialCard item={item} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-[65.5%] sm:left-[88.5%] right-[100%] -translate-y-[18.5rem] sm:-translate-y-[21.5rem] text-[#0B63E5] hover:text-white bg-[#F0F5FF] hover:bg-[#0B63E5] border-none transition-all h-10 sm:h-16 w-10 sm:w-16" >
                            <ArrowLeft className="h-8 w-8" />
                        </CarouselPrevious>
                        <CarouselNext className="left-[85%] sm:left-[95%] right-0 -translate-y-[18.5rem] sm:-translate-y-[21.5rem] text-[#0B63E5] hover:text-white bg-[#F0F5FF] hover:bg-[#0B63E5] border-none transition-all h-10 sm:h-16 w-10 sm:w-16" >
                            <ArrowRight className="h-8 w-8" />
                        </CarouselNext>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Testimonials