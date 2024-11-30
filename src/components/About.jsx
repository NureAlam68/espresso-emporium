import badge from "../assets/aboutBadge.png";
import coffee from "../assets/aboutCoffee.png";
import cup from "../assets/aboutCup.png";
import pot from "../assets/aboutPot.png";

const About = () => {
  return (
    <div className="bg-[#ECEAE3] 2xl:h-[300px]">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 px-5 py-5 2xl:px-[300px] 2xl:py-[55px] gap-10">
      <div className="h-[190px] lg:h-full w-[300px] lg:w-[230px] xl:w-[300px] mx-auto">
        <div className="flex justify-center md:justify-start">
          <img src={cup} alt="" />
        </div>
        <h2 className="text-[#331A15] text-[35px] font-rancho mt-4 text-center md:text-left">
          Awesome Aroma
        </h2>
        <p className="font-raleway text-[#1B1A1A] mt-2 text-center md:text-left">
          You will definitely be a fan of the design & aroma of your coffee
        </p>
      </div>
      <div className="h-[190px] w-[300px] lg:w-[230px] xl:w-[300px] mx-auto">
        <div className="flex justify-center md:justify-start">
          <img src={badge} alt="" />
        </div>
        <h2 className="text-[#331A15] text-[35px] font-rancho mt-4 text-center md:text-left">
          High Quality
        </h2>
        <p className="font-raleway text-[#1B1A1A] mt-2 text-center md:text-left">
          We served the coffee to you maintaining the best quality
        </p>
      </div>
      <div className="h-[190px] w-[300px] lg:w-[230px] xl:w-[300px] mx-auto">
        <div className="flex justify-center md:justify-start">
          <img src={coffee} alt="" />
        </div>
        <h2 className="text-[#331A15] text-[35px] font-rancho mt-4 text-center md:text-left">
        Pure Grades
        </h2>
        <p className="font-raleway text-[#1B1A1A] mt-2 text-center md:text-left">
        The coffee is made of the green coffee beans which you will love
        </p>
      </div>
      <div className="h-[190px] w-[300px] lg:w-[230px] xl:w-[300px] mx-auto">
        <div className="flex justify-center md:justify-start">
          <img src={pot} alt="" />
        </div>
        <h2 className="text-[#331A15] text-[35px] font-rancho mt-4 text-center md:text-left">
        Proper Roasting
        </h2>
        <p className="font-raleway text-[#1B1A1A] mt-2 text-center md:text-left">
        Your coffee is brewed by first roasting the green coffee beans
        </p>
      </div>
      </div>
    </div>
  );
};

export default About;
