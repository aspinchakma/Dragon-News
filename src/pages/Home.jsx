import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-cols-12">
      <h2 className="col-span-9">
        <Outlet />
      </h2>
      <aside>Right Side will not change</aside>
    </div>
  );
};

export default Home;
