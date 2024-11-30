
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import logo from "../assets/logo.png"



const Footer = () => {
  return (
    <div className="bg-footerBg mt-10 md:mt-[60px] lg:mt-[80px] pt-4 2xl:mt-[120px] 2xl:pt-[120px]">
      <div className="flex flex-col md:flex-row md:gap-10 2xl:gap-[100px] 2xl:px-[300px] px-4">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center md:text-left mb-6 lg:mb-0">
        <div className="flex justify-center md:justify-start">
        <img src={logo} className="h-[90px] w-[75px]" alt="" />
        </div>
          <h1 className="text-[36px] lg:text-[45px] lg:mt-6 font-rancho text-primary">Espresso Emporium</h1>
          <p className="text-primary font-raleway lg:text-[20px] mt-2">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <FaFacebook className="text-primary text-[40px]" />
            <FaTwitter className="text-primary text-[40px]" />
            <FaInstagram className="text-primary text-[40px]" />
            <FaLinkedin className="text-primary text-[40px]" />
          </div>
          <div>
            <h2 className="text-[36px] lg:text-[45px] font-rancho text-[#331A15] mt-4">Get in Touch</h2>
            <p>+88 01533 333 333 | info@gmail.com</p>
        <p>72, Wall Street, King Road, Dhaka</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[36px] md:text-[45px] font-rancho text-primary mb-4 text-center md:text-left">Connect with Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-primary font-rancho text-[18px] text-white px-6 py-2 rounded-md hover:bg-opacity-90 block mx-auto md:flex md:mx-0"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center bg-navBg py-2">
        <p className="mt-4 text-white font-rancho text-[20px]">&copy; Espresso Emporium | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
