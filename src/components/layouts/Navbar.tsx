import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="h-16 lg:h-24 fixed w-full bg-[#F5F6F7] z-[999]">
            <nav className="w-full h-full max-w-[90rem] mx-auto flex justify-between items-center px-4 lg:px-20">
                <h1 className='text-lg lg:text-[2rem] leading-[2.2rem]'>
                    <span className="text-black font-bold">Event</span>{" "}
                    <span className="text-[#0B63E5] font-black">360</span>
                </h1>

                <ul className="space-x-4 lg:space-x-8">
                    <NavLink to="/" className={({ isActive }) => cn("text-xs lg:text-base font-bold leading-5", { "text-primary": isActive })}>Home</NavLink>
                    <NavLink to="/admin" className={({ isActive }) => cn("text-xs lg:text-base font-bold leading-5", { "text-primary": isActive })}>Dashboard</NavLink>
                    <NavLink to="/about" className={({ isActive }) => cn("text-xs lg:text-base font-bold leading-5", { "text-primary": isActive })}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => cn("text-xs lg:text-base font-bold leading-5", { "text-primary": isActive })}>Contact</NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
