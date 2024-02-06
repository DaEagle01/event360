import { useGetEvents } from "@/api/admin/event/event.hook";
import EventItem from "./EventItem";

const EventItems = () => {
    const { data: events, isLoading } = useGetEvents()

    return (
        <div>
            <div className="mb-14 flex flex-col items-center gap-3">
                <h1 className="font-roboto text-3xl sm:text-5xl text-[#061C3D] font-extrabold leading-[110%] ">
                    Event Items
                </h1>
                <p className="font-roboto text-lg text-[#566B84] font-normal leading-[160%] text-center max-w-[90%] sm:max-w-[55%]">
                    Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
                </p>
            </div>
            {!isLoading && events && (
                <div className="h-full sm:h-[32rem] grid grid-cols-12 gap-3 sm:gap-5">
                    <div className="h-full rounded-2xl col-span-12 sm:col-span-8">
                        <div className="grid grid-cols-12 gap-3 sm:gap-5 h-full">
                            <div className="h-full rounded-2xl col-span-12 sm:col-span-6 flex flex-col gap-3 sm:gap-5 ">
                                <div className="h-1/2 rounded-2xl">
                                    <EventItem {...events[5]} />
                                </div>
                                <div className="h-1/2 rounded-2xl">
                                    <div className=" h-full rounded-2xl col-span-6 flex gap-3 sm:gap-5">
                                        <div className="w-1/2 h-full  rounded-2xl ">
                                            <EventItem {...events[1]} />
                                        </div>
                                        <div className="w-1/2 h-full rounded-2xl ">
                                            <EventItem {...events[2]} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full rounded-2xl col-span-12 sm:col-span-6 flex flex-row sm:flex-col gap-3 sm:gap-5">
                                <div className="w-1/2 sm:w-full h-1/2 rounded-2xl ">
                                    <EventItem {...events[4]} />
                                </div>
                                <div className="w-1/2 sm:w-full h-1/2 rounded-2xl ">
                                    <EventItem {...events[3]} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block h-full rounded-2xl col-span-12 sm:col-span-4">
                        <EventItem {...events[0]} height="29.45rem" />
                    </div>
                    <div className="block sm:hidden h-full rounded-2xl col-span-12 sm:col-span-4">
                        <EventItem {...events[0]} height="13rem" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default EventItems