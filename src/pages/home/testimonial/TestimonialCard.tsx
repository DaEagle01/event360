
const TestimonialCard = ({ item }) => {
    return (
        <div className="h-full px-10 pt-10 pb-12 font-inter flex flex-col justify-between">
            <div className="">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full">
                        <img className="h-full w-full rounded-full" src={item.image} alt={`${item.name}'s photo`} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-base font-medium text-[#061C3D]">
                            {item.name}
                        </p>
                        <p className="text-sm font-normal text-[#42526B]">
                            {item.role} of {" "}
                            <span className="text-sm font-normal text-[#7534FF]">
                                {item.company}
                            </span>
                        </p>
                    </div>
                </div>
                <p className="text-lg font-normal text-[#061C3D] mt-6 ">
                    {item.description}
                </p>
            </div>
            <div className="w-20 h-10">
                <img className="h-full w-full object-contain" src={item.logo} alt={`${item.company}'s logo`} />
            </div>
        </div>
    )
}

export default TestimonialCard