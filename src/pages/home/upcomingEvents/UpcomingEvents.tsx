import { Cpu, Layers } from "lucide-react"
import upcomingEvents from "../../../assets/images/upcomingEvents.png";

const UpcomingEvents = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-5 content-center align-middle items-center px-4 sm:px-0">
                <div className="col-span-12 sm:col-span-6 font-roboto w-full sm:max-w-[87%] mx-auto sm:mx-0">
                    <h1 className="text-3xl sm:text-[3.5rem] text-[#061C3D] font-extrabold leading-[3.75rem] mb-2 sm:mb-6 text-center sm:text-left">
                        Upcoming Events
                    </h1>
                    <p className="text-lg text-[#566B84] font-normal leading-[160%] mb-6 sm:mb-12 text-center sm:text-left">
                        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
                    </p>
                    <div className="bg-[#fff9ee] p-4 sm:p-8 rounded-2xl">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                            <div className="w-10">
                                <Layers color="#F249C8" size={40} />
                            </div>
                            <div>
                                <h1 className="text-lg sm:text-xl text-[#061C3D] font-medium mb-2 text-center sm:text-left">
                                    Golf Clubbers Annual Agenda
                                </h1>
                                <p className="text-base font-inter text-[#42526B] font-normal text-center sm:text-left">
                                    Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque.
                                </p>
                            </div>
                        </div>
                        <hr className="my-4 sm:my-8" />
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                            <div className="w-10">
                                <Cpu color="#7534FF" size={40} />
                            </div>
                            <div>
                                <h1 className="text-xl text-[#061C3D] font-medium mb-2 text-center sm:text-left">
                                    Music Events at LA
                                </h1>
                                <p className="text-base font-inter text-[#42526B] font-normal text-center sm:text-left">
                                    Vivamus dignissim tortor in tellus dictum pellentesque. Praesent mauris metus, dictum quis velit non.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6 h-full sm:h-[40rem] w-full">
                    <img className="h-full w-full object-fill rounded-3xl" src={upcomingEvents} alt="upcomingEvents" />
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvents