import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../axios/user.axios";
import { useDispatch } from "react-redux";
import logo from "../asset/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    login(email, password).then((res) => {
      if (res.data && res.data.token) {
        setEmail("");
        setPassword("");
        toast.success("Login successful");
        console.log(res.data);
        //dispatchEvent
        dispatch({
          type: "CREATE_USER",
          payload: res.data,
        });
        navigate("/");
      }
    });
  };
  return (
    <section className="bg-[#EEEEEE] ">
      <div className="flex flex-col items-center justify-center pt-2 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex flex-col items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black"
        >
          <img className="w-36 mr-2" src={logo} alt="logo" />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl dark:text-black">
              Log in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Remember me checkbox and Forgot password link */}
              {/* <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div> */}
              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full text-white bg-[#FF3754] hover:bg-[#FF3754] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-[#FF3754] dark:hover:bg-[#ff3755d7] "
              >
                Log in
              </button>
              {/* Sign Up Link */}
              <p className="text-sm font-light text-gray-700 dark:text-gray-600">
                Don’t have an account yet?{" "}
                <a
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-lg"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
