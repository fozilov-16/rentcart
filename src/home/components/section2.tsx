import location from '../../assets/location.png'
import car from '../../assets/car2.png'
import wallet from '../../assets/wallet(1).png'

const items = [
  { img: location, title: 'Availability', text: 'Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis' },
  { img: car, title: 'Comfort', text: 'Gravida auctor fermentum morbi vulputate ac egestas orci etiam convallis' },
  { img: wallet, title: 'Savings', text: 'Pretium convallis id diam sed commodo vestibulum lobortis volutpat' },
]

const Section2 = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-16">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center text-center gap-4 md:gap-6">
            <img src={item.img} alt={item.title} className="w-16 h-16" />
            <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>
            <p className="text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;