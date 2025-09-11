const Header = () => {
  const today = new Date();
  const formatted = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  const day = formatted.split(",")[0];
  const others = formatted.split(",").slice(1, 3);
  return (
    <div className="text-center lg:mt-[30px] lg:mb-[25px] my-[20px]">
      <img
        className="lg:h-[60px] mx-auto"
        src="https://i.ibb.co.com/HvhWTfN/The-Dragon-News.png"
        alt=""
      />
      <p className="text-[#706f6f] text-[18px] mt-5 mb-2">
        Journalism Without Fear or Favour
      </p>
      <p className="text-[18px]  font-[500]">
        {day} <span className="text-[#706f6f]">{others}</span>
      </p>
    </div>
  );
};

export default Header;
