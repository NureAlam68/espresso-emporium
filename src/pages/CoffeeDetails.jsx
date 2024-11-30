import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useLoaderData, useNavigate } from "react-router-dom";


const CoffeeDetails = () => {

    const coffee = useLoaderData();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/")
    }

    const {name, chef, photo, price, supplier, taste, category, details} = coffee;

    return (
        <div className="2xl:px-[300px]">
            <button onClick={handleNavigate} className="flex items-center gap-3 ml-4 mt-[50px]"><BsArrowLeftCircleFill className="text-[30px]"/> <p className="font-rancho text-[30px] text-[#374151]">Back to home</p></button>
            <div className="2xl:py-[72px] mt-[50px] bg-[#F5F4F1] rounded-[10px] w-[100%] flex items-center justify-center flex-col 2xl:gap-[116px] md:flex-row">
            <div className="w-[350px] h-[455px]">
            <img src={photo} className="h-full w-full" alt="" />
            </div>
            <div className="font-raleway md:text-[20px]">
                <h2 className="text-[36px] font-rancho text-[#331A15]">Niceties</h2>
                <p className="mt-6"><span className="font-semibold">Name: </span><span>{name}</span></p>
                <p className="mt-2"><span className="font-semibold">Chef: </span><span>{chef}</span></p>
                <p className="mt-2"><span className="font-semibold">Supplier: </span><span>{supplier}</span></p>
                <p className="mt-2"><span className="font-semibold">Taste: </span><span>{taste}</span></p>
                <p className="mt-2"><span className="font-semibold">Category: </span><span>{category}</span></p>
                <p className="mt-2"><span className="font-semibold">Details: </span><span>{details}</span></p>
                <p className="mt-2"><span className="font-semibold">Price: </span><span>{price} Taka</span></p>
            </div>
           
        </div>
        </div>
    );
};

export default CoffeeDetails;