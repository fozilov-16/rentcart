import car from '../../../assets/car.png'

const LookingCar = () => {
  return (
    <div className="w-full flex justify-center mt-50 hidden md:block">
      <div className="w-[1200px] h-[404px] bg-[#5937E0] rounded-[32px] flex justify-center items-center pl-16">
        <div className='w-[586px] flex flex-col gap-[40px] text-white'>
            <div className='flex flex-col gap-[18px]'>
                <h1 className='text-[50px] bold font-[700]'>Looking for a car?</h1>
                <p className='text-[40px] bold font-[600]'>+537 547-6401</p>
                <p>Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in...</p>
            </div>
            <button className='w-[132px] h-[40px] rounded bg-[#FF9E0C] cursor-pointer'>Book now</button>
        </div>
        <img className='w-[600px] h-[400px] rounded-3xl' src={car} alt="car" />
      </div>
    </div>
  )
}

export default LookingCar