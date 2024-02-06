import emptyHall from "../../../assets/images/emptyDining.avif";

const Statistics = () => {
    return (
        <div>
            <section className="text-gray-600 font-roboto">
                <div className="container mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div className="w-full sm:p-4 px-4 mb-6 text-center sm:text-left">
                            <h1 className="text-3xl sm:text-5xl text-[#061C3D] font-extrabold sm:leading-[3.75rem] mb-6 text-center sm:text-left">
                                Our numbers speak
                            </h1>
                            <h1 className="font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                            <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center sm:text-left">
                            <h2 className="font-medium text-3xl text-[#0B63E5]">140+</h2>
                            <p className="leading-relaxed">Events</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center sm:text-left">
                            <h2 className="font-medium text-3xl text-[#0B63E5]">15K+</h2>
                            <p className="leading-relaxed">Attendants</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center sm:text-left">
                            <h2 className="font-medium text-3xl text-[#0B63E5]">45+</h2>
                            <p className="leading-relaxed">Members</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center sm:text-left">
                            <h2 className="font-medium text-3xl text-[#0B63E5]">4+</h2>
                            <p className="leading-relaxed">Cities</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img className="object-cover object-center w-full h-full" src={emptyHall} alt="stats" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Statistics