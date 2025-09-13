import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const MainLayOut = () => {
  const location = useLocation();
  return (
    <div className="lg:w-[90%] mx-auto w-[95%]">
      <Header />
      <LatestNews />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayOut;
