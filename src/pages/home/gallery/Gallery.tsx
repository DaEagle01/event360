import item1 from "../../../assets/images/gallery/item1.avif";
import item2 from "../../../assets/images/gallery/item2.avif";
import item3 from "../../../assets/images/gallery/item3.avif";
import item4 from "../../../assets/images/gallery/item4.avif";
import item5 from "../../../assets/images/gallery/item5.avif";
import item6 from "../../../assets/images/gallery/item6.avif";
import item7 from "../../../assets/images/gallery/item7.avif";
import item8 from "../../../assets/images/gallery/item8.avif";
import item9 from "../../../assets/images/gallery/item9.avif";
import item10 from "../../../assets/images/gallery/item10.avif";
import item11 from "../../../assets/images/gallery/item11.avif";
import item12 from "../../../assets/images/gallery/item12.avif";

const Gallery = () => {
    return (
        <div>
            <div className="w-full sm:max-w-[90%] mx-auto">
                <div className="font-roboto mb-10 sm:mb-20 flex flex-col items-center gap-4 sm:gap-9">
                    <h1 className="text-3xl sm:text-5xl text-[#061C3D] font-extrabold leading-[110%]">
                        Gallery
                    </h1>
                    <p className="text-lg text-[#566B84] font-normal leading-[160%] text-center max-w-[90%] sm:max-w-full">
                        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
                    </p>
                </div>
                <div className="">
                    <div className="px-4 w-full sm:max-w-7xl mx-auto">
                        <div className="sm:px-16 grid grid-cols-12 sm:grid-cols-7 gap-4 h-full sm:h-[28rem]">
                            <div className="col-span-6 sm:col-span-1 flex flex-col gap-4 justify-center">
                                <div className='h-[10.675rem] bg-slate-500 w-full rounded-md'>
                                    <img className="h-full w-full object-cover rounded-md" src={item1} alt="gallery item 1" />
                                </div>
                                <div className='h-[10.675rem] bg-slate-300 w-full rounded-md'>
                                    <img className="h-full w-full object-cover rounded-md" src={item2} alt="gallery item 2" />
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-1 flex flex-col gap-4 justify-center">
                                <div className='h-[12rem] bg-slate-300 w-full rounded-md'>
                                    <img className="h-full w-full object-cover rounded-md" src={item3} alt="gallery item 3" />
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-1 flex flex-col gap-4 justify-center">
                                <div className='h-[10.675rem] bg-slate-500 w-full rounded-md'>
                                    <img className="h-full w-full object-cover rounded-md" src={item4} alt="gallery item 4" />
                                </div>
                                <div className='h-[10.675rem] bg-slate-300 w-full rounded-md'>
                                    <img className="h-full w-full object-cover rounded-md" src={item5} alt="gallery item 5" />
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-1 flex flex-col gap-4 justify-center">
                                <div className='h-[13.4375rem] bg-slate-500 w-full rounded-md'>
                                    <img className="h-full w-full object-cover rounded-md" src={item6} alt="gallery item 6" />
                                </div>
                                <div className='h-[13.4375rem] bg-slate-300 w-full rounded-md'>
                                    <img className="h-full w-full object-cover rounded-md" src={item7} alt="gallery item 7" />
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-1 flex flex-col gap-4 justify-center">
                                <div className='h-[10.675rem] bg-slate-500 w-full rounded-md'>
                                    <img className="h-full w-full object-cover rounded-md" src={item8} alt="gallery item 8" />
                                </div>
                                <div className='h-[10.675rem] bg-slate-300 w-full rounded-md'>
                                    <img className="h-full w-full object-cover rounded-md" src={item9} alt="gallery item 9" />
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-1 flex flex-col gap-4 justify-center">
                                <div className='h-[15.9375rem] bg-slate-300 w-full rounded-md'>
                                    <img className="h-full w-full object-cover rounded-md" src={item10} alt="gallery item 10" />
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-1 flex flex-row sm:flex-col gap-4 justify-center">
                                <div className='h-[10.675rem] bg-slate-500 w-full rounded-md'>
                                    <img className="h-full w-full object-cover rounded-md" src={item11} alt="gallery item 11" />
                                </div>
                                <div className='h-[10.675rem] bg-slate-300 w-full rounded-md'>
                                    <img className="h-full w-full object-cover rounded-md" src={item12} alt="gallery item 12" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery