import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h3 className="font-semibold text-[20px]">Login With</h3>
      <button className="w-full flex justify-center items-center gap-2 border-2 border-[#366bdd] py-2 text-[#366bdd] mt-4 mb-2 rounded-[4px]">
        <FaGoogle className="text-[18px]" /> Login with Google
      </button>
      <button className="w-full flex justify-center items-center gap-2 border-2 border-black py-2 rounded-[4px]">
        <FaGithub className="text-[18px]" />
        Login with Github
      </button>
    </div>
  );
};

export default SocialLogin;
