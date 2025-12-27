import { NavLink, Outlet } from "react-router-dom";
import logo from '../assets/icon-car.png';
import phone from '../assets/icon-phone.png';
import Footer from "../components/footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-4 md:py-6">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img src={logo} alt="logo" className="w-12 h-12 md:w-14 md:h-14" />
          <h1 className="text-[16px] md:text-[20px] font-[700]">Car Rental</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
          <NavLink to={'/home'} className={({ isActive }) =>
            `text-lg font-medium transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`
          }>Home</NavLink>

          <NavLink to={'/vehicles'} className={({ isActive }) =>
            `text-lg font-medium transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`
          }>Vehicles</NavLink>

          <NavLink to={'/about'} className={({ isActive }) =>
            `text-lg font-medium transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`
          }>About</NavLink>

          <NavLink to={'/contact'} className={({ isActive }) =>
            `text-lg font-medium transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`
          }>Contact</NavLink>

          <NavLink to={'/signUp'} className={({ isActive }) =>
            `text-lg font-medium transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`
          }>Sign Up</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <img src={phone} alt="phone" className="w-8 h-8 md:w-10 md:h-10" />
          <div>
            <p className="text-sm md:text-base">Need help?</p>
            <h1 className="text-[18px] md:text-[20px] font-[600] text-black">+996 247-1680</h1>
          </div>
        </div>
      </div>

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
