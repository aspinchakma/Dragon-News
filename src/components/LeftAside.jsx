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
  console.log(categories);
  return (
    <div>
      <h2>All Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.category_id}>
            <NavLink to={`/categories/${category.category_id}`}>
              {category.category_name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftAside;
