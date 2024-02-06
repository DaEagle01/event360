import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'
import DialogContextProvider from '@/context/DialogContextProvider'
import DialogProvider from '../DialogProvider'

const AdminLayout = () => {
    return (
        <DialogContextProvider>
            <DialogProvider />
            <div className='grid grid-cols-12'>
                <div className='hidden sm:block sm:col-span-2'>
                    <AdminSidebar />
                </div>
                <div className='col-span-12 sm:col-span-10 bg-[#f0f1f3] h-[100vh]'>
                    <AdminNavbar />
                    <div className='py-16 sm:py-20 px-0 sm:px-8'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </DialogContextProvider>
    )
}

export default AdminLayout