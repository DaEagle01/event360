import HeroVideo from "./HeroVideo"

const Hero = () => {
    return (
        <div>
            <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-5 sm:mb-8">
                <h1 className="text-[#061C3D] font-roboto text-xl lg:text-[2rem] xl:text-[4rem] font-extrabold leading-[110%] text-nowrap uppercase">
                    <p>Best Event </p>
                    <p>management firm</p>
                </h1>
                <p className="max-w-[47ch] text-[#061C3D] font-roboto text-base sm:text-xl font-normal leading-[160%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.
                </p>
            </div>
            <button className="px-8 sm:px-[4.22rem] py-2 sm:py-3.5 bg-blue-600 hover:scale-105 transition-all duration-300">
                <span className="text-white text-base font-bold ">
                    Explore
                </span>
            </button>
            <div className="mt-8 sm:mt-12">
                <HeroVideo />
            </div>
        </div>
    )
}

export default Hero