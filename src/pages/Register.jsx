import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import Swal from "sweetalert2";


const Register = () => {

  const {createUser, setUser, updateUserProfile, signInWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;


    if(password.length < 6) {
      Swal.fire("Password should be 6 characters or longer!")
      return;
      
    }


    const passwordRegex = /(?=.*[A-Z])(?=.*[a-z]).{6,}/;

    if(!passwordRegex.test(password)) {
      Swal.fire("Password must contain at least one uppercase, one lowercase letter")
      return;
      
    }

   

    // create user

    createUser(email, password)
    .then((res) => {
      setUser(res.user)
      console.log(res.user)
      const createdAt = res?.user?.metadata?.creationTime;


      const newUser = { name, email, photo, createdAt}

      // save new user info to the database
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          "content-type": 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

      updateUserProfile({displayName: name, photoURL: photo})
      .then(() => {
        setUser((prevUser) => {
          return { ...prevUser, displayName: name, photoURL: photo };
        });
        e.target.reset()
        navigate("/")
      })
      .catch((error) => {
        Swal.fire("Failed to update profile: " + error.message);
      })
    })
    .catch((error) => {
      e.target.reset()
      Swal.fire("Failed to register: " + error.message);
    })
  }

  const handleGoogleLogIn = () => {
    signInWithGoogle()
    .then((res) => {
      setUser(res.user)
      navigate("/")
    })
    .catch((error) => {
      Swal.fire("Failed to login: " + error.message);
    })
  }

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true, 
      offset: 120, 
    });

    
    return () => AOS.refresh();
  }, []);



    return (
        <div className="flex justify-center items-center w-11/12 mx-auto mt-8 md:mt-[60px] lg:mt-[88px]" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
      <div className="card bg-[#F4F3F0] w-full max-w-[500px] shrink-0 rounded-none p-5 md:px-[74px] md:py-[50px]">
        <h2 className="text-[35px] font-semibold text-center mb-5">Register your account</h2>
        <hr className="bg-[#D2B48C] h-1" />
        <form onSubmit={handleRegister} className="card-body p-0 mt-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[20px] font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[20px] font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[20px] font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered bg-white"
              required
            />
          </div>
          <div className="form-control">
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
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#D2B48C] text-black text-[20px] font-semibold rounded-[5px] hover:text-white hover:bg-[#695944]">Register</button>
          </div>
        </form>
        <div className="form-control mt-6">
        <button onClick={handleGoogleLogIn} className="btn hover:bg-[#D2B48C] border-2 border-[#331A15] text-black text-[20px] font-semibold rounded-[5px]"><FaGoogle className="text-[#331A15]"></FaGoogle> Login with Google</button>
          </div>
        <p className="text-center md:text-lg mt-[30px] font-semibold">
        Already Have An Account ? <Link className="text-[#b98138]" to="/login">Login</Link>
        </p>
      </div>
    </div>
    );
};

export default Register;