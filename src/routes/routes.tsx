import App from '@/App';
import AdminLayout from '@/components/layouts/AdminLayout';
import About from '@/pages/about/About';
import Events from '@/pages/admin/dashboard/events/Events';
import RecentEvents from '@/pages/admin/dashboard/recentEvents/RecentEvents';
import Services from '@/pages/admin/dashboard/services/Services';
import Contact from '@/pages/contact/Contact';
import Home from '@/pages/home';

import { Navigate, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="services" />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "recent-event",
        element: <RecentEvents />,
      },
    ],
  },
]);

export default router;
