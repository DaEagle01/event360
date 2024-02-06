import { useGetRecentEvents } from "@/api/admin/recentEvent/recentEvent.hook";
import { TRecentEvent } from "@/types/RecentEvents";

const RecentEvents = () => {
    const { data: images, isLoading } = useGetRecentEvents();
    return (
        <div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 sm:col-span-6 font-roboto my-auto flex flex-col justify-center items-center sm:items-start">
                    <h1 className="text-3xl sm:text-5xl text-[#061C3D] font-extrabold leading-[110%] text-center sm:text-left">
                        Recent Events
                    </h1>
                    <p className="text-lg text-[#566B84] font-normal leading-[160%] max-w-[90%] sm:max-w-[85%] mt-4 sm:mt-6 mb-6 sm:mb-12 text-center sm:text-left mx-auto sm:mx-0">
                        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
                    </p>
                    <button className="max-w-max bg-[#3461FF] px-11 py-4 text-base text-white font-bold">
                        Learn more
                    </button>
                </div>
                <div className="col-span-12 sm:col-span-6 grid grid-cols-12 gap-5 mt-6 sm:mt-0">
                    {
                        !isLoading && images && images.map((item: TRecentEvent, index: number) => (
                            <div key={item._id} className='col-span-6 sm:col-span-4 h-[11.875rem] w-full'>
                                <img className={`h-full w-full object-cover ${index === 2 || index === 3 ? 'rounded-full' : 'rounded-3xl'}`} src={item.image} alt="event pic" />
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default RecentEvents