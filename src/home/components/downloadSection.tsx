import telephones from '../../assets/telephones.png';
import market from '../../assets/playMarket.png';
import store from '../../assets/appStore.png';

const DownloadSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[110px] px-6 md:px-16 py-12 lg:py-0 max-w-[1440px] mx-auto">
      <div className="flex-1 flex flex-col gap-8 lg:gap-[60px]">
        <div className="flex flex-col gap-6 lg:gap-[40px]">
          <h1 className="text-3xl md:text-[50px] font-bold leading-[1.2]">
            Download <br />mobile app
          </h1>
          <p className="text-[16px] text-[#00000099] leading-[1.7] max-w-md lg:max-w-[536px]">
            Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus <br />
            turpis nibh placerat massa. Fermentum urna ut at et in. Turpis <br />
            aliquet cras hendrerit enim condimentum. Condimentum interdum <br />
            risus bibendum urna
          </p>
        </div>

        <div className="flex flex-wrap gap-4 lg:gap-[40px]">
          <div className="flex items-center gap-2 w-[175px] h-[50px] bg-black rounded-[8px] border border-black text-white justify-center">
            <img className="w-6 h-8" src={store} alt="appStore" />
            <div className="leading-[1.2] text-left">
              <h1 className="text-xs">Download on the</h1>
              <h1 className="text-[18px] font-semibold">App Store</h1>
            </div>
          </div>

          <div className="flex items-center gap-2 w-[175px] h-[50px] bg-black rounded-[8px] border border-black text-white justify-center">
            <img className="w-6 h-8" src={market} alt="market" />
            <div className="leading-[1.2] text-left">
              <h1 className="text-xs">GET IT ON</h1>
              <h1 className="text-[18px] font-semibold">Google Play</h1>
            </div>
          </div>
        </div>
      </div>

      <img
        className="hidden lg:block h-[500px] object-contain"
        src={telephones}
        alt="telephones"
      />
    </div>
  );
};

export default DownloadSection;