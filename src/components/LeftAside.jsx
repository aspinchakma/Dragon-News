import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const url = `https://openapi.programming-hero.com/api/news/categories`;
      const res = await fetch(url);
      const data = await res.json();
      setCategories(data.data.news_category);
    };
    loadData();
  }, []);
  return (
    <div className="text-[17px]">
      <h2 className="text-[20px] mb-3 font-[600] text-[#403f3f]">
        All Categories
      </h2>
      <ul className="text-[#9f9f9f]">
        {categories.map((category) => (
          <li className="w-full  font-[500]" key={category.category_id}>
            <NavLink
              className={`block px-3 py-2`}
              to={`/category/${category.category_id}`}
            >
              {category.category_name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftAside;
