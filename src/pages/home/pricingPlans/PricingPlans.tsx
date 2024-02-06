import { pricingPlans } from "@/constants/pricingPlans"
import PricingPlan from "./PricingPlan"

const PricingPlans = () => {

    return (
        <div className="w-full sm:max-w-[87%] mx-auto">
            <div className="mb-10 sm:mb-20 flex flex-col items-center gap-4 sm:gap-8">
                <h1 className="text-center font-roboto text-3xl sm:text-5xl text-[#061C3D] font-extrabold leading-[110%]">
                    Explore our pricing plans
                </h1>
                <p className="font-roboto text-lg text-[#566B84] font-normal leading-[160%] text-center max-w-[90%] sm:w-full">
                    Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem. Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
                </p>
            </div>
            <div className="bg-[#f2f2f2] p-7 rounded-2xl">
                <div className="grid grid-cols-12 gap-6">
                    {
                        pricingPlans.map(plan => (
                            <div key={plan.name} className="col-span-12 sm:col-span-3">
                                <PricingPlan plan={plan} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PricingPlans