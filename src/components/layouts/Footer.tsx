import { footerOptions } from "@/constants/footerOptions";
import Container from "../Container";
import { ArrowRight, Euro, Globe } from "lucide-react";
import personIcon from "../../assets//icons/accessibility.svg";

const Footer = () => {
    return (
        <div className="bg-[#3a3935]">
            <Container>
                <footer className="text-white font-roboto pt-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                            <h1 className='text-[2rem] leading-[110%]'>
                                <span className="text-white font-bold">Event</span>{" "}
                                <span className="text-[#0B63E5] font-black">360</span>
                            </h1>
                            {footerOptions.map(options => (
                                <div key={options.name}>
                                    <h2 className="font-medium text-base py-3">{options.name}</h2>
                                    <ul className="space-y-3">
                                        {options.options.map(option => (
                                            <li key={option} className="hover:underline text-[#E2E8F0] font-normal text-base flex items-center gap-2">
                                                <a href="#">
                                                    {option}
                                                </a>
                                                {option === "Request Demo" && <ArrowRight size={14} strokeWidth={3} />}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row  justify-between items-center gap-4 mt-12 py-9 border-t border-[#0b62e51c]">
                            <p className="text-base text-[#E2E8F0] font-normal">
                                @ 2024. All rights reserved.
                            </p>
                            <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-8">
                                <p className="hover:underline text-[#E2E8F0] font-normal text-base">
                                    <a href="#">Terms</a>
                                </p>
                                <p className="hover:underline text-[#E2E8F0] font-normal text-base">
                                    <a href="#">Privacy</a>
                                </p>
                                <a href="#" className="hover:underline text-[#E2E8F0] font-normal text-base">Contact</a>
                                <p className="hover:underline text-[#E2E8F0] font-normal text-base flex items-center gap-2">
                                    <Globe size={16} strokeWidth={3} />
                                    <a href="#">EN</a>
                                </p>
                                <p className="hover:underline text-[#E2E8F0] font-normal text-base flex items-center gap-2">
                                    <Euro size={16} strokeWidth={3} />
                                    <a href="#">EUR</a>
                                </p>
                                <div className="">
                                    <img className="h-6 w-6" src={personIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;
