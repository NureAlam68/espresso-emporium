import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/")
  }

  return (
    <div className="bg-banner bg-cover bg-center h-[60vh] lg:h-[70vh] xl:h-[800px] flex items-center justify-end px-2 md:px-[20px] xl:px-[307px]">
      <div className="lg:w-[724px] h-[224px]">
        <h1 className="text-white font-rancho text-[28px] md:text-[55px] text-center lg:text-left">Would you like a Cup of Delicious Coffee?</h1>
        <p className="mt-4 text-sm md:text-base text-white font-raleway text-center lg:text-left">
          It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button onClick={handleNavigate} className="font-rancho block mx-auto lg:flex text-[24px] lg:mx-0 bg-[#E3B577] px-[22px] py-[9px] mt-8 hover:bg-transparent hover:text-white hover:border">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
