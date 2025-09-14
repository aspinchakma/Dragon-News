import advertisingBg from "../assets/bg.png";

const AdvertisingInHome = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${advertisingBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "50px 20px",
      }}
      className={`text-white lg:px-[30px] lg:py-[50px]bg-no-repeat bg-cover rounded-[4px] text-center`}
    >
      <h2 className="text-[30px] font-bold leading-[45px]">
        Create an Amazing Newspaper
      </h2>
      <p className="text-[18px] mt-8 mb-8">
        Discover thousands of options, easy to customize layouts, one-click to
        import demo and much more.
      </p>
      <button className="w-full text-center py-3 rounded-[4px] bg-[#d72050]">
        Learn More
      </button>
    </div>
  );
};

export default AdvertisingInHome;
