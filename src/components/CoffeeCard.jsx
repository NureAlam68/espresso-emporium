import PropTypes from "prop-types";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete, MdModeEditOutline } from "react-icons/md";


const CoffeeCard = ({coffee}) => {
    const {name, chef, photo, price} = coffee
    return (
        <div className="p-8 bg-[#F5F4F1] rounded-[10px] w-[100%] 2xl:h-[300px] flex items-center justify-center md:justify-between flex-col gap-4 md:flex-row">
            <div className="w-[185px] h-[240px]">
            <img src={photo} className="h-full w-full" alt="" />
            </div>
            <div className="font-raleway md:text-[20px]">
                <p><span className="font-semibold">Name: </span><span>{name}</span></p>
                <p className="mt-2"><span className="font-semibold">Chef: </span><span>{chef}</span></p>
                <p className="mt-2"><span className="font-semibold">Price: </span><span>{price} Taka</span></p>
            </div>
            <div className="text-white grid grid-cols-3 md:grid-cols-1 gap-4">
                <button className="bg-[#D2B48C] p-3 rounded-[5px]"><IoEyeSharp className="text-2xl"/></button>
                <button className="bg-[#3C393B] p-3 rounded-[5px]"><MdModeEditOutline className="text-2xl"/></button>
                <button className="bg-[#EA4744] p-3 rounded-[5px]"><MdDelete className="text-2xl"/></button>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object
}

export default CoffeeCard;