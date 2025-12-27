import { Car, Users, Calendar, Gauge } from "lucide-react";

type StatItem = { value: string; label: string; icon: React.ElementType; };

const stats: StatItem[] = [
  { value: "540+", label: "Cars", icon: Car },
  { value: "20k+", label: "Customers", icon: Users },
  { value: "25+", label: "Years", icon: Calendar },
  { value: "20m+", label: "Miles", icon: Gauge },
];

const FactSection = () => {
  return (
    <section className="max-w-7xl mx-auto bg-[#5937E0] rounded-3xl px-6 md:px-16 py-16 text-white">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Facts In Numbers</h2>
        <p className="text-indigo-200 max-w-xl mx-auto">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt erat at semper fermentum.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-white text-gray-900 rounded-2xl flex items-center gap-4 px-6 py-5 shadow-md">
              <div className="bg-orange-400 p-4 rounded-xl text-white">
                <Icon size={28} />
              </div>
              <div>
                <div className="text-2xl font-bold">{item.value}</div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default FactSection;