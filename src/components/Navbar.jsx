import navLogo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-navBg h-[120px] flex justify-center items-center">
      <div className="flex items-center gap-4">
        <div>
          <img src={navLogo} className="w-[75px] h-[90px]" alt="" />
        </div>
        <div>
            <h1 className="text-[40px] lg:text-[60px] font-rancho text-white">Espresso Emporium</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
