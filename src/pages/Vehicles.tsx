import sedan from '../assets/sedan.png';
import minivan from '../assets/minivan.png';
import suv from '../assets/suv.png';
import pickup from '../assets/pickup.png';
import cabriolet from '../assets/cabriolet.png';
import Card from '../components/Card';

const Vehicles = () => {
  const categories = [
    { img: null, label: 'All vehicles', active: true },
    { img: sedan, label: 'Sedan' },
    { img: cabriolet, label: 'Cabriolet' },
    { img: pickup, label: 'Pickup' },
    { img: suv, label: 'SUV' },
    { img: minivan, label: 'Minivan' },
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-10 items-center px-4 md:px-12">
      <h1 className="text-2xl md:text-[50px] font-bold">Select a vehicle group</h1>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`flex items-center justify-center gap-2 md:gap-4 px-4 h-[50px] rounded-full ${cat.active ? 'bg-[#5937E0] text-white' : 'bg-[#F9F9F9] text-black'}`}
          >
            {cat.img && <img className="w-5 h-5 flex items-center md:w-6 md:h-6" src={cat.img} alt={cat.label} />}
            <p className="text-sm md:text-base">{cat.label}</p>
          </div>
        ))}
      </div>

      <Card/>
    </div>
  );
};

export default Vehicles;