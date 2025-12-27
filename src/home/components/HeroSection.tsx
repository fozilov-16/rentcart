import car from '../../assets/car3.png';

const HeroSection = () => {
  return (
    <section className="w-full max-w-[1296px] mx-auto bg-[#5937E0] rounded-3xl px-6 md:px-10 py-10 md:py-20 text-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">
        <div className="z-10">
          <h1 className="text-3xl md:text-[50px] lg:text-5xl font-bold leading-tight mb-6">
            Enjoy every mile with <br />
            adorable companionship.
          </h1>

          <p className="text-indigo-200 max-w-md mb-8 md:mb-10">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
            bibendum ullamcorper in. Diam tincidunt tincidunt erat
          </p>

          <div className="bg-white h-[60px] rounded-full flex items-center max-w-md p-2">
            <input
              type="text"
              placeholder="City"
              className="flex-1 px-5 py-3 text-gray-700 w-full rounded-[20px]"
            />
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 md:px-8 py-2 md:py-3 flex items-center justify-center h-[40px] rounded-[12px] font-semibold">
              Search
            </button>
          </div>
        </div>

        <div className="relative hidden lg:flex justify-center">
          <div className="w-64 h-52 rounded-3xl flex items-center justify-center">
            <img src={car} alt="car" className="object-contain" />
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_left,white,transparent_70%)]"></div>
    </section>
  );
};

export default HeroSection;