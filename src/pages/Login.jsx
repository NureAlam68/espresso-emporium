import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import Swal from "sweetalert2";

const Login = () => {

    const {logInUser, setUser, signInWithGoogle, resetPassword} = useContext(AuthContext);
    const [email, setEmail] = useState("");

    const location = useLocation()
    const navigate = useNavigate()
    

    const handleLogin = e => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        logInUser(email, password)
        .then((res) => {
            setUser(res.user)
            e.target.reset()
            navigate(location?.state ? location.state : "/")
        })
        .catch((error) => {
            Swal.fire("Incorrect email or password! Please try again:" + error.message)
        })
    }

    const handleGoogleLogIn = () => {
      signInWithGoogle()
      .then((res) => {
        setUser(res.user)
        navigate(location?.state ? location.state : "/")
      })
      .catch((error) => {
        Swal.fire("Failed to login: " + error.message);
      })
    }

    const handleForgotPassword = () => {
      if (!email) {
        Swal.fire("Please enter your email first!");
        return;
      }
      else {
        resetPassword(email)
        .then(() => {
          Swal.fire("Password reset email sent, please check your email.");
          navigate("/forgetPassword", { state: { email } });
        })
      }
    };

    useEffect(() => {
      AOS.init({
        duration: 2000, 
        once: true, 
        offset: 120, 
      });
  
      
      return () => AOS.refresh();
    }, []);


  return (
    <div className=" flex justify-center items-center w-11/12 mx-auto mt-8 md:mt-[60px] lg:mt-[88px]" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className="card bg-[#F4F3F0] w-full max-w-[500px] shrink-0 rounded-none p-5 md:px-[74px] md:py-[50px]">
        <h2 className="text-[35px] font-semibold text-center mb-5">Login your account</h2>
        <hr className="bg-[#D2B48C] h-1" />
        <form onSubmit={handleLogin} className="card-body p-0 mt-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[20px] font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered bg-white"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text text-[20px] font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered bg-white"
              required
            />
            <label className="label">
                <p onClick={handleForgotPassword} className="label-text-alt md:text-lg link link-hover">
                  Forgot password?
                </p>
              </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#D2B48C] rounded-[5px] text-black text-[20px] font-semibold hover:text-white hover:bg-[#695944]">Login</button>
          </div>
        </form>
        <div className="form-control mt-6">
            <button onClick={handleGoogleLogIn} className="btn hover:bg-[#D2B48C] border-2 border-[#331A15] text-black text-[20px] font-semibold rounded-[5px]"><FaGoogle className="text-[#331A15]"></FaGoogle> Login with Google</button>
          </div>
        <p className="text-center md:text-lg mt-[30px] font-semibold">
        Dont’t Have An Account ? <Link className="text-[#b98138]" to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
