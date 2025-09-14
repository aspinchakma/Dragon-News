import { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  return (
    <div className="card bg-base-100 w-full  shrink-0 max-w-[452px] mx-auto border-1 border-black lg:py-[30px]">
      <form className="card-body">
        <h3 className="text-center text-[24px] font-semibold">
          Login your account
        </h3>
        <div className="divider h-[1px]"></div>
        <fieldset className="fieldset">
          <label className="label text-[17px] mb-2 font-semibold text-[#403f3f]">
            Email
          </label>
          <input
            type="email"
            className="input w-full mb-3"
            placeholder="Email"
            required
          />
          <label className="label text-[17px] mb-2 font-semibold text-[#403f3f]">
            Password
          </label>
          <input
            type="password"
            className="input w-full mb-3"
            placeholder="Password"
            required
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignIn;
