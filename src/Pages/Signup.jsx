import React,{useState}from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../axios/user.axios';
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import logo from "../asset/logo.png";

const Signup= () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
 const [email, setEmail] = useState("");
 const [name, setName] = useState("");
 const [password, setPassword] = useState("");
 const [phone, setPhone] = useState("");
 const handleSubmit=(e)=>{
    e.preventDefault();
    signup(email,name,password,phone).then((res)=>{
        if(res.data && res.data.token){
          setEmail("");
          setName("");
          setPassword("");
          setPhone("");
          toast.success("Successfully account created");
          dispatch({
            type:"CREATE_USER",
            payload:res.data
          })
          navigate("/");
        }
    })
 }

  return (
    <section className="bg-[#EEEEEE]">
      <div className="flex flex-col items-center justify-center pt-2 mx-auto md:min-h-screen lg:py-0">
        <a href="#" className="flex items-center m-4 text-2xl font-semibold text-gray-900 dark:text-white">
        <img className="w-36 mr-2" src={logo} alt="logo" />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white ">
          <div className="p-3 space-y-4 md:space-y-6 sm:p-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                />
              </div>
              {/* Name Input */}
              <div>
                <label htmlFor="Name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e)=>setName(e.target.value)}
                  placeholder="name"
                  required
                />
              </div>
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(e)=>setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
                 {/* Phone  Input */}
                 <div>
                <label htmlFor="Phone Number" className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">Phone Number</label>
                <input
                  type="text"
                  name="phone number"
                  id="phone number"
                  placeholder="+91 987654321"
                  onChange={(e)=>setPhone(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                onClick={(e)=>handleSubmit(e)}
                className="w-full text-base text-white bg-[#FF3754] hover:bg-[#FF3754] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#FF3754] dark:hover:bg-[#ff3755d7] "
              >
                Sign up
              </button>
              {/* Sign Up Link */}
              <p className="text-base font-light text-gray-700 dark:text-gray-600">
                Already have an account ?<Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-lg" >Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
