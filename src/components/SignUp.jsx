import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    photo: "",
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!e.target.checked.checked) {
      setError("Please select terms and condition!");
      return;
    }
    console.log(user);
  };
  return (
    <div>
      <div className="card bg-base-100 w-full  shrink-0 max-w-[452px] mx-auto lg:py-[20px]">
        <form className="card-body py-0" onSubmit={handleSubmit}>
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
              <input type="checkbox" className="checkbox" name="checked" />
              Accept <span className="font-bold">Term & Conditions</span>
            </label>
            <button className="btn btn-neutral mt-4">Register</button>
            <div className="relative h-[30px]">
              {error && (
                <p className="text-center text-red-500 text-[14px] mt-1 font-bold">
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
