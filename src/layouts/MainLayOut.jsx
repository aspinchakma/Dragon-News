import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const MainLayOut = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="lg:w-[80%] mx-auto w-[95%]">
      {location.pathname === "/" && <Header />}
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayOut;
