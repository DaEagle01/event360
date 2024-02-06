import { TPricingPlan } from "@/types/PricingPlan"
import { Check, X } from "lucide-react"

const PricingPlan = ({ plan }: { plan: TPricingPlan }) => {
    return (
        <div className="rounded-lg bg-white relative font-inter">
            {plan.recommended && (
                <div className="absolute top-0 w-full">
                    <p className="rounded-t-lg bg-[#0B63E5] py-2  text-xs text-white font-medium leading-[130%] text-center">
                        Popular Plan
                    </p>
                </div>
            )}
            <div className="px-9 pt-12 pb-[1.375rem] flex flex-col gap-[1.375rem]">
                <div>
                    <p className="text-black font-bold text-xl text-center leading-none">
                        {plan.name}
                    </p>
                    <p className="text-[#156CFE] font-semibold text-2xl text-center leading-none">
                        ${plan.price}
                    </p>
                </div>
                <button className="bg-[#0B63E5] rounded-md w-full py-2 text-base text-white font-semibold">
                    Get this package
                </button>
                <p className="text-xs text-[#566B84] font-normal leading-[130%] text-center px-2">
                    {plan.description}
                </p>
            </div>
            <p className="bg-[#E8E8E8] py-1 text-xs text-black font-normal leading-[130%] text-center">
                All features options
            </p>
            <div className="px-9 pt-[1.375rem] pb-9 flex flex-col gap-4">
                {
                    plan.features?.map(item => (
                        <div key={item.name} className="flex items-center gap-[0.375rem] first:pt-1">
                            {item.exists ? (
                                <div className="bg-[#0B63E5] w-3 h-3 flex justify-center items-center rounded-full p-[2px]">
                                    <Check className="text-white font-extrabold" size={10} strokeWidth={5} />
                                </div>
                            ) : (
                                <div className="bg-[#FFB6D9] w-3 h-3 flex justify-center items-center rounded-full p-[2px]">
                                    <X className="text-white font-extrabold" size={10} strokeWidth={5} />
                                </div>
                            )}
                            <p className="text-xs text-[#454545] font-normal">
                                {item.name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PricingPlan