import { useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const singleNews = useLoaderData().data[0];
  console.log(singleNews);
  return (
    <div>
      <h2>This is News Details</h2>
    </div>
  );
};

export default NewsDetails;
