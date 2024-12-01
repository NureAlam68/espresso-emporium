import PropTypes from "prop-types";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AOS from 'aos';
import { useEffect } from "react";


const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {name, _id, chef, photo, price} = coffee;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });

                          const remainingCoffees = coffees.filter(coffee => coffee._id !== id)
                          setCoffees(remainingCoffees)
                    }
                })

              
            }
        
          });
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
        <div className="p-8 bg-[#F5F4F1] rounded-[10px] w-[100%] 2xl:h-[300px] flex items-center justify-center md:justify-between flex-col gap-4 md:flex-row" data-aos="zoom-in-up">
            <div className="w-[185px] h-[240px]">
            <img src={photo} className="h-full w-full" alt="" />
            </div>
            <div className="font-raleway md:text-[20px]">
                <p><span className="font-semibold">Name: </span><span>{name}</span></p>
                <p className="mt-2"><span className="font-semibold">Chef: </span><span>{chef}</span></p>
                <p className="mt-2"><span className="font-semibold">Price: </span><span>{price} Taka</span></p>
            </div>
            <div className="text-white grid grid-cols-3 md:grid-cols-1 gap-4">
                <Link to={`/coffeeDetails/${_id}`}><button className="bg-[#D2B48C] p-3 rounded-[5px]"><IoEyeSharp className="text-2xl"/></button></Link>
                <Link to={`/updateCoffee/${_id}`}>
                <button className="bg-[#3C393B] p-3 rounded-[5px]"><MdModeEditOutline className="text-2xl"/></button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="bg-[#EA4744] p-3 rounded-[5px]"><MdDelete className="text-2xl"/></button>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func
}

export default CoffeeCard;