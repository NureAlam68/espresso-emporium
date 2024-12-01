import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AddCoffee = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/")
    }

    const handleAddCoffee = e => {
      e.preventDefault();

      const name = e.target.name.value;
      const chef = e.target.chef.value;
      const supplier = e.target.supplier.value;
      const taste = e.target.taste.value;
      const category = e.target.category.value;
      const details = e.target.details.value;
      const price = e.target.price.value;
      const photo = e.target.photo.value;

      const newCoffee = { name, chef, supplier, taste, category, details, price, photo }
      console.log(newCoffee)

      // send data to the server and database
      fetch('http://localhost:5000/coffee', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(newCoffee)
      })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {
                  console.log('successfully added');
                  Swal.fire({
                      title: 'Success!',
                      text: 'Coffee added successfully',
                      icon: 'success',
                      confirmButtonText: 'Ok'
                  });
                  e.target.reset();
              }
          })

  }

  return (
    <div className="2xl:px-[300px] mt-6 md:mt-[50px] bg-addCoffeeBg bg-cover bg-center">
        <button onClick={handleNavigate} className="flex items-center gap-3 ml-4 hover:bg-[#D2B48C] px-3 py-2 rounded-[10px]"><BsArrowLeftCircleFill className="text-[30px]"/> <p className="font-rancho text-[30px] text-[#374151]">Back to home</p></button>
      <div className="bg-[#F4F3F0] rounded-[5px] mt-6 md:mt-[50px] py-10 lg:py-[70px] px-4 lg:px-10 2xl:px-[112px]">
        <h1 className="font-rancho text-[30px] md:text-[45px] font-normal text-[#374151] text-center">Add New Coffee</h1>
        <p className="font-raleway mt-5 md:mt-8 text-[#1B1A1AB3] md:text-[18px] md:w-[80%] mx-auto text-center font-normal">
        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddCoffee} className="mt-8">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Chef</label>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Supplier</label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Taste</label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Details</label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Price</label>
              <input
                type="text"
                name="price"
                placeholder="Enter price"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 md:mb-4 font-raleway md:text-[20px] font-semibold text-[#1B1A1ACC]">Photo</label>
              <input
                type="text"
                name="photo"
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
