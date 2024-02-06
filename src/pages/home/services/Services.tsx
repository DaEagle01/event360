import ServiceList from "./ServiceList"

const Services = () => {
    return (
        <div>
            <div className="mb-10 sm:mb-[3.38rem]">
                <h1 className="text-[#061C3D] font-roboto font-extrabold text-3xl sm:text-5xl leading-[110%] text-center mb-3">
                    Our Services
                </h1>
                <p className="text-[#566B84] font-roboto font-normal text-[1.125rem] leading-[160%] text-center w-[90%] sm:w-2/4 mx-auto">
                    Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
                </p>
            </div>
            <div>
                <ServiceList />
            </div>
        </div>
    )
}

export default Services