import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="bg-[#f3f3f3] p-3 flex gap-1 mb-5">
      <button className="bg-[#d72050] py-[8px] px-[22px] text-white font-[500]">
        Latest
      </button>
      <Marquee pauseOnHover className="font-bold space-x-4">
        <Link to={`/news`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Link>
        <Link to={`/news`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Link>
        <Link to={`/news`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
