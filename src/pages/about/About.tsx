import DownloadApp from "./components/DownloadApp";
import Memories from "./components/Memories";
import Reviews from "./components/Reviews";
import Us from "./components/Us";
import LookingCar from "./components/lookingCar";

const About = () => {
  return (
    <div  className="max-w-7xl mx-auto">
      <Us/>

      <section className="max-w-7xl mx-auto mt-[-60px] px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        <div>
          <h2 className="text-[80px] font-bold text-[#5937E0]">20k+</h2>
          <p className="text-[20px] font-semibold">Happy customers</p>
        </div>

        <div>
          <h2 className="text-[80px] font-bold text-[#5937E0]">540+</h2>
          <p className="text-[20px] font-semibold">Count of cars</p>
        </div>

        <div>
          <h2 className="text-[80px] font-bold text-[#5937E0]">25+</h2>
          <p className="text-[20px] font-semibold">Years of experience</p>
        </div>
      </section>

      <Memories/>
      <DownloadApp/>
      <Reviews/>
      <LookingCar/>
    </div>
  );
};

export default About;
