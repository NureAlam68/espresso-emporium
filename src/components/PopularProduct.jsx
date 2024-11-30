import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularProduct = () => {
  return (
    <div className="bg-popularBg bg-cover bg-center 2xl:mt-[120px] 2xl:min-h-[1200px]">
      <div>
        <h2 className="text-center font-raleway text-[20px]">
          --- Sip & Savor ---
        </h2>
        <h1 className="text-center mt-2 font-rancho text-[#331A15] text-[55px]">
          Our Popular Products
        </h1>
        <div className="flex justify-center">
        <Link to="/addCoffee">
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#E3B577] border-2 border-[#331A15] text-white font-bold text-lg rounded-lg shadow-md">
            <p className="font-rancho text-[24px] font-normal">Add Coffee</p>
            <FaCoffee className="text-xl text-[#331A15]" />
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
