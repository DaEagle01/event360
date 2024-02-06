import { BellRing, Menu, Settings } from "lucide-react"
import { Drawer } from "vaul";
import AdminSidebar from "./AdminSidebar"

const AdminNavbar = () => {
    return (
        <div>
            <nav className="bg-white border  border-gray-200 px-4 py-2.5 rounded-md fixed w-full sm:w-[83.3%] top-0 right-0 z-50">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex justify-start items-center">
                        <form action="#" method="GET" className="hidden sm:block md:pl-2">
                            <label htmlFor="topbar-search" className="sr-only">Search</label>
                            <div className="relative md:w-96">
                                <div
                                    className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="email"
                                    id="topbar-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Search"
                                />
                            </div>
                        </form>
                        <Drawer.Root direction="left">
                            <Drawer.Trigger asChild className="block sm:hidden">
                                <Menu />
                            </Drawer.Trigger>
                            <Drawer.Portal>
                                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                                <Drawer.Content className="flex flex-col rounded-t-[10px] h-full w-[70%] mt-24 fixed bottom-0 left-0">
                                    <div className="flex-1 h-full">
                                        <AdminSidebar />
                                    </div>
                                </Drawer.Content>
                            </Drawer.Portal>
                        </Drawer.Root>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <button
                            data-dropdown-toggle="notification-dropdown"
                            className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        >
                            <BellRing />
                        </button>
                        <button
                            data-dropdown-toggle="apps-dropdown"
                            className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        >
                            <Settings absoluteStrokeWidth />
                        </button>
                        <button
                            className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded="false"
                            data-dropdown-toggle="dropdown"
                        >
                            <img
                                className="w-8 h-8 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                                alt="user photo"
                            />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminNavbar