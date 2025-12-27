import { Fuel, Snowflake, Antenna } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../reducer/api";
import carImg from '../assets/cardImg.png';

const Card = () => {
  const dispatch = useDispatch();
  const { cars, loading } = useSelector((state) => state.cars);

  useEffect(() => { dispatch(getCars()); }, [dispatch]);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
      {cars?.map((e) => (
        <div key={e.id} className="w-full sm:w-[360px] md:w-[456px] bg-[#FAFAFA] rounded-xl p-4 flex flex-col gap-4">
          <img className="w-full h-[240px] object-cover rounded-lg" src={carImg} alt={e?.title} />

          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg md:text-[24px] font-semibold">{e.title}</h1>
              <p className="text-sm text-gray-500">{e.year}</p>
            </div>
            <div>
              <h1 className="text-lg md:text-[24px] font-semibold text-[#5937E0]">${e?.pricePerHour}</h1>
              <p className="text-sm text-gray-500">per day</p>
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1"><Antenna size={16}/> Automatic</div>
            <div className="flex items-center gap-1"><Fuel size={16}/> Petrol</div>
            <div className="flex items-center gap-1"><Snowflake size={16}/> Air Conditioner</div>
          </div>

          <NavLink to={`/info/${e?.id}`}>
            <button className="w-full h-[40px] bg-[#5937E0] cursor-pointer text-white rounded-md font-semibold">View Details</button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Card;