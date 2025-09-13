import AdvertisingInHome from "./AdvertisingInHome";
import FindUs from "./FindUs";
import QZone from "./QZone";
import SocialLogin from "./SocialLogin";

const RightSide = () => {
  return (
    <div>
      <SocialLogin />
      <FindUs />
      <QZone />
      <AdvertisingInHome />
    </div>
  );
};

export default RightSide;
