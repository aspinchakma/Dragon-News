import { Outlet } from "react-router-dom";
import LeftAside from "./LeftAside";

const MainHome = () => {
  return (
    <div className="grid grid-cols-9 gap-5">
      <aside className="col-span-3">
        <LeftAside />
      </aside>
      <div className="col-span-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainHome;
