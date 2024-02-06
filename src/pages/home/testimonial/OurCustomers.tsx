import axnLogo from "../../../assets/images/ourCustomers/axn-logo-2015-.svg";
import lenovoLogo from "../../../assets/images/ourCustomers/lenovo-logo-2015.svg";
import slackLogo from "../../../assets/images/ourCustomers/slack-2.svg";
import youtubeLogo from "../../../assets/images/ourCustomers/youtube-6.svg";
import amazonLogo from "../../../assets/images/ourCustomers/logo-amazon.svg";
import googleLogo from "../../../assets/images/ourCustomers/google-1-1.svg";

const OurCustomers = () => {
    const logos = [axnLogo, lenovoLogo, slackLogo, youtubeLogo, amazonLogo, googleLogo];
    return (
        <div>
            <p className='font-inter font-normal text-xl text-center text-[#061C3D] mb-6'>
                We have {" "}
                <span className='font-semibold text-[#0B63E5]'>
                    23k+
                </span>
                {" "} Satisfied & Trusted Customers
            </p>
            <div className="flex justify-around items-center flex-wrap gap-5">
                {
                    logos.map((logo, index) => (
                        <div key={index} className="w-28 h-14">
                            <img
                                src={logo}
                                alt="customer logo"
                                className="w-full h-full transition-all duration-200"
                                style={{
                                    filter: `invert(1) sepia(1) saturate(0) hue-rotate(210deg) brightness(90%) contrast(85%)`
                                }}
                                onMouseOver={e => e.currentTarget.style.filter = ''}
                                onMouseOut={e => e.currentTarget.style.filter = `invert(1) sepia(1) saturate(0) hue-rotate(210deg) brightness(90%) contrast(85%)`}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OurCustomers