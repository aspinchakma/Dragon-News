import { useContext } from "react";
import { AuthContext } from "../Contexts/Context";
import AdvertisingInHome from "./AdvertisingInHome";
import FindUs from "./FindUs";
import QZone from "./QZone";
import SocialLogin from "./SocialLogin";

const RightSide = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {!user && <SocialLogin />}
      <FindUs />
      <QZone />
      <AdvertisingInHome />
    </div>
  );
};

export default RightSide;
