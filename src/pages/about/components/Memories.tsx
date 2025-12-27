import img from "../../../assets/Img.png";
import { Check } from "lucide-react";

const Memories = () => {
  return (
    <div>
        <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <h2 className="text-[50px] font-bold leading-[120%]">
            Unlock unforgettable <br /> memories on the road
          </h2>

          <p className="text-[#00000099] max-w-xl">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida. Quis nunc interdum gravida ullamcorper
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#5937E0] flex items-center justify-center shrink-0">
                <Check className="text-white" size={18} />
              </div>
              <p className="text-[#00000099]">
                Velit semper morbi. Purus non eu cursus porttitor tristique et
                gravida...
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#5937E0] flex items-center justify-center shrink-0">
                <Check className="text-white" size={18} />
              </div>
              <p className="text-[#00000099]">
                Velit semper morbi. Purus non eu cursus porttitor tristique et
                gravida...
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#5937E0] flex items-center justify-center shrink-0">
                <Check className="text-white" size={18} />
              </div>
              <p className="text-[#00000099]">
                Velit semper morbi. Purus non eu cursus porttitor tristique et
                gravida...
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#5937E0] flex items-center justify-center shrink-0">
                <Check className="text-white" size={18} />
              </div>
              <p className="text-[#00000099]">
                Velit semper morbi. Purus non eu cursus porttitor tristique et
                gravida...
              </p>
            </div>
          </div>
        </div>

        <img
          src={img}
          alt="About"
          className="w-full max-w-lg mx-auto"
        />
      </section>
    </div>
  )
}

export default Memories