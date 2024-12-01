import { Link } from "react-router-dom";
import navLogo from "../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)

  const links = <>
  
  <li><a>Add More</a></li>
  <li><a>Login</a></li>
  
  </>
  return (
    <div className="bg-navBg navbar 2xl:px-10 h-[120px] flex justify-center items-center">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white font-rancho text-[20px]">
        {links}
        
      </ul>
    </div>
    <div className="flex items-center gap-4">
        <div>
          <img src={navLogo} className="w-[75px] h-[90px]" alt="" />
        </div>
        <div>
            <h1 className="text-[40px] lg:text-[60px] font-rancho text-white">Espresso Emporium</h1>
        </div>
      </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white font-rancho text-[20px]">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  {
          user ?  <img className="h-11 w-11 border border-sky-400 rounded-full object-cover object-center" src={user?.photoURL} alt="" /> : <FaRegUserCircle size={45}/>
        }
        {
          user ? <Link to="/" onClick={logOut} className="px-5 py-2 md:px-[22px] md:py-[11px] rounded-[16px] bg-sky-300 text-black font-bold ml-3">Log Out</Link> : <Link to="/login" className="px-5 py-2 md:px-[22px] md:py-[11px] rounded-[16px] bg-sky-300 text-black font-bold ml-3">Login</Link>
        }
  </div>

    </div>
  );
};

export default Navbar;
