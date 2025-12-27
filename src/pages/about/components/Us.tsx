
const Us = () => {
  return (
    <div>
        <section className="max-w-7xl mx-auto  px-6 pt-10 pb-24">
        <h1 className="text-[50px] font-bold text-center mb-20">
          About Us
        </h1>

       <div className="flex flex-col lg:flex-row gap-30">
       <h2 className="text-[50px] font-bold leading-[120%] max-w-md">
         Where every <br />
         drive feels <br />
         extraordinary
       </h2>
    
         <div className="flex flex-wrap gap-x-12 gap-y-16"> 
          <div className="space-y-4 w-[350px]">
            <h3 className="text-[28px] font-semibold">Variety Brands</h3>
            <p className="text-gray-600">
              Platea non auctor fermentum sollicitudin. Eget <br />
              adipiscing augue sit quam natoque ornare cursus <br />
              viverra odio
            </p>
          </div>
          <div className="space-y-4 w-[350px]">
            <h3 className="text-[28px] font-semibold">Awesome Support</h3>
            <p className="text-gray-600">
              Eget adipiscing augue sit quam natoque ornare <br />
              cursus viverra odio. Diam quam gravida ultricies <br />
              velit
            </p>
          </div>
    
          <div className="space-y-4 w-[350px]">
            <h3 className="text-[28px] font-semibold">Maximum Freedom</h3>
            <p className="text-gray-600">
          Diam quam gravida ultricies velit duis consequat <br />
          integer. Est aliquam posuere vel rhoncus massa <br />
          volutpat in
        </p>
      </div>

        <div className="space-y-4 w-[350px]">
          <h3 className="text-[28px] font-semibold">Flexibility on the go</h3>
          <p className="text-gray-600">
            Vitae pretium nulla sed quam id nisl semper. Vel <br />
            non in proin egestas dis faucibus rhoncus
          </p>
        </div>
        </div>
       </div>
     </section>
    </div>
  )
}

export default Us