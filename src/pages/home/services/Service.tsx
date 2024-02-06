import { cn } from "@/lib/utils";
import { TService } from "@/types/Service"
import { Check } from "lucide-react";
import { useState } from "react";

const Service = (props: Partial<TService>) => {
    const { name, image, features } = props;
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovering(!isHovering)}
            onMouseLeave={() => setIsHovering(!isHovering)}
            className="py-4 sm:py-[2.25rem] px-4 sm:px-[1.56rem] bg-gradient-to-b from-gray-100 hover:from-[#F5F6F7] to-white hover:to-[#F5F6F7] rounded-md col-span-12 md:col-span-6 lg:col-span-4 hover:scale-105 transition-all duration-1000">
            <div className={cn("w-full lg:h-60 mx-auto mb-6", { "hidden": isHovering })}>
                <img
                    style={{ width: "100%", height: "100%", borderRadius: "0.375rem" }}
                    src={image}
                    alt="corporate meeting"
                />
            </div>
            <div>
                <p className={cn("text-black text-2xl font-semibold font-roboto leading-relaxed mb-6 ", { "mb-0": isHovering })}>
                    {name}
                </p>
                <p className={cn("text-slate-500 text-base font-normal font-roboto leading-relaxed mt-3 mb-[2.63rem]", { "hidden": !isHovering })}>
                    Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.
                </p>
                <div className="flex flex-col gap-4">
                    {features?.map(feature => (
                        <div key={feature} className="flex items-center gap-6">
                            <Check size={12} color="#6FCF97" strokeWidth={1.5} absoluteStrokeWidth />
                            <p className="text-black text-lg font-normal  leading-[150%]">
                                {feature}
                            </p>
                        </div>
                    ))}
                </div>
                <button className={cn("px-[4.22rem] py-3.5 bg-blue-600 w-full mt-14", { "hidden": !isHovering })}>
                    <span className="text-white text-base font-bold ">
                        Check it out
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Service