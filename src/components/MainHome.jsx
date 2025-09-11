import { Outlet } from "react-router-dom";
import LeftAside from "./LeftAside";

const MainHome = () => {
  return (
    <div className="grid grid-cols-9">
      <aside className="col-span-3">
        <LeftAside />
      </aside>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainHome;
