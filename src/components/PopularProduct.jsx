import { useEffect, useState } from "react";
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const PopularProduct = () => {

  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/coffee')
    .then(res => res.json())
    .then(data => setCoffees(data))
  }, [])

  return (
    <div className="bg-popularBg bg-cover bg-center mt-10 2xl:mt-[120px] px-4 md:px-[100px] lg:px-[20px] 2xl:px-[300px]">
      <div>
        <h2 className="text-center font-raleway text-[20px]">
          --- Sip & Savor ---
        </h2>
        <h1 className="text-center mt-2 font-rancho text-[#331A15] text-[36px] md:text-[55px]">
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
        <div className="mt-[48px] grid lg:grid-cols-2 gap-6">
          {
            coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
