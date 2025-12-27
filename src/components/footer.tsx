import { Car, MapPin, Mail, Phone, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

import market from '../assets/playMarket.png'
import store from '../assets/appStore.png'

  
  const Footer = () => {
    return (
      <footer className="bg-white mt-[50px]">
        <div className="max-w-7xl mx-auto px-6 py-14 ml-[120px] mt-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Car size={28} />
                <span className="text-xl font-semibold">Car Rental</span>
              </div>
  
              <p className="text-gray-600 mb-6 max-w-sm">
                Faucibus faucibus pellentesque dictum turpis. Id pellentesque
                turpis massa a id iaculis lorem t...
              </p>
  
              <div className="flex gap-4 text-gray-700">
                <Facebook className="cursor-pointer hover:text-orange-500" />
                <Instagram className="cursor-pointer hover:text-orange-500" />
                <Twitter className="cursor-pointer hover:text-orange-500" />
                <Youtube className="cursor-pointer hover:text-orange-500" />
              </div>
            </div>
  
            <div className="space-y-6">
              <h3 className="font-semibold text-lg">Address</h3>
  
              <div className="flex items-start gap-3">
                <div className="bg-orange-400 p-2 rounded-full text-white">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-700">
                  Oxford Ave. Cary, NC 27511
                </span>
              </div>
  
              <div className="flex items-start gap-3">
                <div className="bg-orange-400 p-2 rounded-full text-white">
                  <Mail size={18} />
                </div>
                <span className="text-gray-700">nwiger@yahoo.com</span>
              </div>
  
              <div className="flex items-start gap-3">
                <div className="bg-orange-400 p-2 rounded-full text-white">
                  <Phone size={18} />
                </div>
                <span className="text-gray-700">+537 547-6401</span>
              </div>
            </div>
  
            <div>
              <h3 className="font-semibold text-lg mb-6">Useful links</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="hover:text-orange-500 cursor-pointer">About us</li>
                <li className="hover:text-orange-500 cursor-pointer">Contact us</li>
                <li className="hover:text-orange-500 cursor-pointer">Gallery</li>
                <li className="hover:text-orange-500 cursor-pointer">Blog</li>
                <li className="hover:text-orange-500 cursor-pointer">F.A.Q</li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-semibold text-lg mb-6">Download App</h3>
  
              <div className="flex flex-col gap-4">
              <div className='w-[175px] h-[50px] border-[1px] border-[solid] border-[black]
                bg-[#000000] rounded-[8px] flex items-center text-white justify-center gap-[10px] cursor-pointer'>
                    <img className='w-[26px] h-[31px]' src={store} alt="appStore" />
                    <div className='leading-[120%]'>
                        <h1>Download on the</h1>
                        <h1 className='text-[18px] font-[600]'>App Store</h1>
                    </div>
                </div>
                <div className='w-[175px] h-[50px] border-[1px] border-[solid] border-[black]
                bg-[#000000] rounded-[8px] flex items-center text-white justify-center gap-[10px] cursor-pointer'>
                    <img className='w-[26px] h-[31px]' src={market} alt="market" />
                    <div className='leading-[120%]'>
                        <h1>GET IT ON</h1>
                        <h1 className='text-[18px] font-[600]'>Google Play</h1>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  