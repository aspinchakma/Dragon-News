import { useLoaderData } from "react-router-dom";
import News from "./News";

const CategoryDetails = () => {
  const news = useLoaderData().data;
  return (
    <div>
      <h2 className="text-[20px] font-semibold mb-4">Dragon News Home</h2>
      <div>
        {news.map((singleNews) => (
          <News key={singleNews._id} singleNews={singleNews}></News>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
