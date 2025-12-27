interface Review {
  text: string;
  company: string;
  name: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    text: "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque ",
    company: "Kuphal LLC",
    name: "Emanuel Boyle",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    text: "Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula",
    company: "Glover - Orn",
    name: "River Graves",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    text: " Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et",
    company: "Haag LLC",
    name: "Ryder Malone",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const Reviews = () => {
  return (
    <section className="w-full flex justify-center mt-32 hidden md:block">
      <div className="w-[1200px]">
        
        <h2 className="text-4xl font-bold text-center mb-16">
          Reviews from our customers
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {reviews.map((e, id) => (
            <div
              key={id}
              className="bg-[#F9F9F9] rounded-2xl shadow-md p-10 relative"
            >
              <span className="text-[#5B5CE2] text-6xl font-bold">“</span>

              <p className="text-black font-semibold  mb-10 text-center">
                {e.text}
              </p>

              <div className="bg-[#5B5CE2] rounded-b-2xl absolute  left-0 w-full h-30 justify-center flex flex-col text-center gap-2 items-center px-6">
                <img
                  src={e.avatar}
                  alt={e.name}
                  className="w-12 h-12 rounded-full border-2 border-white mr-4"
                />
                <div className="text-white">
                  <p className="text-xs opacity-80">{e.company}</p>
                  <p className="font-semibold">{e.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
