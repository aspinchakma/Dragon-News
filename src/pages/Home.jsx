import { Outlet } from "react-router-dom";
import RightSide from "../components/RightSide";

const Home = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9">
        <Outlet />
      </div>
      <aside className=" col-span-3">
        <RightSide />
      </aside>
    </div>
  );
};

export default Home;
