import { Outlet } from 'react-router-dom';
import Footer from '../components/general/Footer';
import Navbar from '../components/general/Navbar';

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full pt-[72px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;