import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mt-[30px] mb-[22px]">Find Us On</h3>
      <div className="text-[#706f6f] font-[500] *:w-full text-[17px]">
        <button className="flex items-center gap-3 border-1 border-[#e7e7e7]  p-4 rounded-t-[6px] cursor-pointer">
          <div className="bg-[#f3f3f3] p-2 rounded-full">
            <FaFacebookF className="text-[#3b599c] rounded-full" />
          </div>{" "}
          FaceBook
        </button>
        <button className="flex items-center gap-3 border-1 border-[#e7e7e7] border-t-0  p-4 cursor-pointer">
          <div className="bg-[#f3f3f3] p-2 rounded-full">
            <FaTwitter className="text-[#58a7de] rounded-full" />
          </div>{" "}
          Twitter
        </button>
        <button className="flex items-center gap-3 border-1 border-[#e7e7e7]  p-4 border-t-0 cursor-pointer">
          <div className="bg-[#f3f3f3] p-2 rounded-full rounded-b-[6xl]">
            <FaInstagram className="rounded-full text-[linear-gradient(180deg,rgba(216,45,126,1)_6%,rgba(251,167,86,1)_100%)] bg-clip-text" />
          </div>{" "}
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
