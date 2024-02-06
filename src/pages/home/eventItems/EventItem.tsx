import { TEvent } from "@/types/Event";

type EventItemProps = TEvent & {
    height: string
}
const EventItem = (props: EventItemProps) => {
    const { image, title, height } = props;
    return (
        <div className="bg-[#f0f0f5] p-4 flex flex-col gap-3 rounded-md">
            <div className="">
                <img className="object-cover w-full h-48 rounded-md hover:scale-105 transition-all duration-500" style={{ height: height }} src={image} alt={title} />
            </div>
            <p className="font-roboto text-base sm:text-[1.25rem] text-[#000000] font-normal leading-[110%]">
                {title}
            </p>
        </div>
    )
}

export default EventItem