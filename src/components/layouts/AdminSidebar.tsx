import { cn } from "@/lib/utils"
import { CalendarCheck2, CalendarClock, Home, UserCog } from "lucide-react"
import { NavLink } from "react-router-dom"

const AdminSidebar = () => {
    const options = [
        { name: "Services", path: "/services", icon: UserCog },
        { name: "Events", path: "/events", icon: CalendarCheck2 },
        { name: "Recent Events", path: "/recent-event", icon: CalendarClock },
    ]

    return (
        <div className="">
            <aside id="logo-sidebar" className="fixed left-0 top-0 w-full sm:w-[16.7%] h-full pt-20 sm:pt-7 px-6 transition-transform bg-white border-gray-200" aria-label="Sidebar">
                <NavLink to="/">
                    <h1 className='text-2xl sm:text-[2rem] leading-[2.2rem] mb-6 sm:mb-10'>
                        <span className="text-black font-bold">Event</span>{" "}
                        <span className="text-[#0B63E5] font-black">360</span>
                    </h1>
                </NavLink>
                <div className="h-full pb-4 overflow-y-auto">
                    <div className="space-y-3 font-medium">
                        {
                            options.map(option => (
                                <NavLink
                                    key={option.path}
                                    to={`/admin${option.path}`}
                                    className={({ isActive }) => cn("flex items-center gap-4 px-2 py-4 text-gray-500 hover:text-blue-500 rounded-lg hover:bg-gray-100",
                                        {
                                            "bg-gray-100 text-blue-500": isActive
                                        })}
                                >
                                    <option.icon />
                                    <span>{option.name}</span>
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default AdminSidebar