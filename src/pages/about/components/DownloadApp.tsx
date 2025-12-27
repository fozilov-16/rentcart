import React from "react";
import phone from '../../../assets/IPHONE.png'
import appStore from '../../../assets/appStore.png'
import googlePlay from '../../../assets/playMarket.png'

const DownloadApp = () => {
  return (
    <div className="w-full flex justify-center mt-50 hidden md:block">
      <div className="w-[1200px] h-[404px] bg-[#5937E0] rounded-[32px] flex items-center px-40 py-16 relative">
        <img
          src={phone}
          alt="Phone"
          className="w-[280px] h-[540px] absolute left-30 -top-50"
        />

        <div className="ml-[360px] text-white">
          <p className="text-sm tracking-widest opacity-80 mb-2">
            DOWNLOAD OUR APP
          </p>

          <h2 className="text-[50px] font-[700] font-bold mb-4">
            Download our app
          </h2>

          <p className="text-sm opacity-90 text-[16px] leading-6 max-w-[520px] mb-8">
            Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas <br/>
            semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in <br/>
            vulputate.
          </p>

          <div className="flex items-center gap-4">
              <div className='w-[175px] h-[50px] border-[1px] border-[solid] border-[black]
                bg-[#000000] rounded-[8px] flex items-center text-white justify-center gap-[10px] cursor-pointer'>
                    <img className='w-[26px] h-[31px]' src={appStore} alt="appStore" />
                    <div className='leading-[120%]'>
                        <h1>Download on the</h1>
                        <h1 className='text-[18px] font-[600]'>App Store</h1>
                    </div>
                </div>
                <div className='w-[175px] h-[50px] border-[1px] border-[solid] border-[black]
                bg-[#000000] rounded-[8px] flex items-center text-white justify-center gap-[10px] cursor-pointer'>
                    <img className='w-[26px] h-[31px]' src={googlePlay} alt="market" />
                    <div className='leading-[120%]'>
                        <h1>GET IT ON</h1>
                        <h1 className='text-[18px] font-[600]'>Google Play</h1>
                    </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
