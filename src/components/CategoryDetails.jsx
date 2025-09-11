import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
  const data = useLoaderData().data;
  console.log(data);
  return (
    <div>
      <h2>This is Category Details</h2>
    </div>
  );
};

export default CategoryDetails;
