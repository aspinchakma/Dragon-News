import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const singleNews = useLoaderData().data[0];
  const { image_url, title, details } = singleNews;
  return (
    <div>
      <div className="border-2 border-[#e7e7e7] rounded-lg p-[30px]">
        <h2 className="text-[20px] font-semibold mb-4 ">Dragon News Home</h2>
        <img src={image_url} alt="" />
        <h2 className="text-[25px] font-bold mt-5 mb-3">{title}</h2>
        <p>{details}</p>
        <Link
          to={`/category/${singleNews.category_id}`}
          className="flex gap-1 items-center bg-[#d72050] px-4 rounded-[4xl] text-white py-2 font-semibold mt-6 cursor-pointer w-fit"
        >
          <FaArrowLeft />
          All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetails;
