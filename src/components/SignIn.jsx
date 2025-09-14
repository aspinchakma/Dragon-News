import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebase.init";

const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // login user
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((result) => console.log(result.user))
      .catch((err) => setError(err.code));
  };
  return (
    <div className="card bg-base-100 w-full  shrink-0 max-w-[452px] mx-auto border-1 border-black lg:py-[30px]">
      <form className="card-body" onSubmit={handleSubmit}>
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
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <div className="relative">
            {error && (
              <p className="text-center text-red-500 text-[14px] absolute top-3 left-1/2 -translate-x-1/2">
                {error}
              </p>
            )}
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SignIn;
