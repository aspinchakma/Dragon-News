import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const handleOnChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="card bg-base-100 w-full  shrink-0 max-w-[452px] mx-auto lg:py-[20px]">
        <form className="card-body py-5" onSubmit={handleSubmit}>
          <h3 className="text-center text-[24px] font-semibold">
            Register your account
          </h3>
          <div className="divider h-[1px] border-0"></div>
          <fieldset className="fieldset">
            <label className="label text-[17px] mb-2 font-semibold text-[#403f3f]">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="input w-full mb-3"
              placeholder="Enter Your Name"
              onChange={handleOnChange}
              required
            />
            <label className="label text-[17px] mb-2 font-semibold text-[#403f3f]">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="input w-full mb-3"
              placeholder="Enter Photo URL"
              onChange={handleOnChange}
              required
            />
            <label className="label text-[17px] mb-2 font-semibold text-[#403f3f]">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input w-full mb-3"
              placeholder="Email"
              onChange={handleOnChange}
              required
            />
            <label className="label text-[17px] mb-2 font-semibold text-[#403f3f]">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input w-full mb-3"
              placeholder="Password"
              onChange={handleOnChange}
              required
            />
            <div></div>
            <label className="label text-[#706f6f] text-[15px]">
              <input type="checkbox" className="checkbox" />
              Accept <span className="font-bold">Term & Conditions</span>
            </label>
            <button className="btn btn-neutral mt-4">Register</button>
            <div className="relative">
              {error && (
                <p className="text-center text-red-500 text-[14px] absolute top-1 left-1/2 -translate-x-1/2">
                  {error}
                </p>
              )}
            </div>
          </fieldset>
        </form>
        <p className="text-center text-[#706f6f] font-semibold">
          Already Have an Account ?{" "}
          <Link className="text-[#f9655b]" to={`/signin`}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
