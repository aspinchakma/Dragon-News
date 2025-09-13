import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router-dom";

const News = ({ singleNews }) => {
  const { image_url, title, author, details, total_view, _id } = singleNews;
  const ratingNumber = Math.round(singleNews.rating.number);
  return (
    <div className="border-2 border-[#e7e7e7] rounded-lg single_news_container">
      <div className="flex justify-between items-center  bg-[#f3f3f3] p-4 rounded-t-lg ">
        <div className="flex items-center gap-2">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src={author.img}
            alt=""
          />
          <div>
            <h3 className="font-bold">{author.name}</h3>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="text-[24px] font-bold text-[#706f6f] flex gap-2">
          <FaRegBookmark />
          <IoMdShare />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-[20px] font-bold">{title}</h2>
        <img src={image_url} alt="" />
        <p>{details.slice(1, 250)}...</p>
        <Link to={`/newDetails/${_id}`} className={`text-[#ff854a] font-bold`}>
          See More
        </Link>
        <div className="divider"></div>
        <div className=" flex items-center justify-between">
          <ul className="flex items-center gap-1">
            {[...new Array(5)].map((_, index) => {
              return (
                <li key={index}>
                  <FaStar
                    className={`${
                      index < ratingNumber ? "text-[#ff8c47]" : "text-[#706f6f]"
                    } text-[18px]`}
                  />
                </li>
              );
            })}
          </ul>
          <div className="flex gap-2 items-center text-[#706f6f]">
            <FaEye className="text-[24px]"></FaEye>
            <h3 className="font-[500]">{total_view}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
