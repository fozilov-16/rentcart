const features = [
    {
      id: 1,
      title: 'Erat at semper',
      text: 'Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum...',
    },
    {
      id: 2,
      title: 'Urna nec vivamus risus duis arcu',
      text: 'Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida.',
    },
    {
      id: 3,
      title: 'Lobortis euismod imperdiet tempus',
      text: 'Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi',
    },
    {
      id: 4,
      title: 'Cras nulla aliquet nam eleifend amet et',
      text: 'Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida.',
    },
  ]
  
  const SectionImageText = () => {
    return (
      <div className="max-w-[1440px] mx-auto px-[72px] py-[80px]">
        <div className="flex gap-[80px] items-center justify-center">
          
          <div className="w-[520px] h-[520px] rounded-[24px] overflow-hidden hidden md:block bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
              alt="car"
              className="w-full h-full object-cover"
            />
          </div>
  
          <div className="flex flex-col gap-[36px] max-w-[550px] items-center">
            {features.map((item) => (
              <div key={item.id} className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[16px]">
                  <h1 className="w-[32px] h-[32px] border-[1px] border-[solid] border-[#5937E0] rounded-[50px]
                  text-white flex items-center justify-center bg-[#5937E0]">{item.id}</h1>
                  <h3 className="font-semibold text-[18px]">
                    {item.title}
                  </h3>
                </div>
                  <p className="text-gray-600 leading-relaxed text-[16px]">
                    {item.text}
                  </p>
              </div>
            ))}
          </div>
  
        </div>
      </div>
    )
  }
  
  export default SectionImageText  