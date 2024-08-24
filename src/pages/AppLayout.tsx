import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;