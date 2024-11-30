import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const AddCoffee = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/")
    }

  return (
    <div className="2xl:px-[300px] mt-6 md:mt-[50px] bg-addCoffeeBg bg-cover bg-center">
        <button onClick={handleNavigate} className="flex items-center gap-3 ml-4"><BsArrowLeftCircleFill className="text-[30px]"/> <p className="font-rancho text-[30px] text-[#374151]">Back to home</p></button>
      <div className="bg-[#F4F3F0] rounded-[5px] mt-6 md:mt-[50px] py-10 lg:py-[70px] px-4 lg:px-10 2xl:px-[112px]">
        <h1 className="font-rancho text-[30px] md:text-[45px] font-normal text-[#374151] text-center">Add New Coffee</h1>
        <p className="font-raleway mt-5 md:mt-8 text-[#1B1A1AB3] md:text-[18px] md:w-[80%] mx-auto text-center font-normal">
        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>
        <form className="mt-8">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Name</label>
              <input
                type="text"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Chef</label>
              <input
                type="text"
                placeholder="Enter coffee chef"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Supplier</label>
              <input
                type="text"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Taste</label>
              <input
                type="text"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Category</label>
              <input
                type="text"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Details</label>
              <input
                type="text"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Price</label>
              <input
                type="text"
                placeholder="Enter price"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Photo</label>
              <input
                type="text"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <button className="bg-[#D2B48C] w-full font-rancho text-[#331A15] py-[10px] rounded-[5px] text-[24px] border-2 border-[#331A15]">Add Coffee</button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
