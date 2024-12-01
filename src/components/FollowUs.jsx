import itemOne from "../assets/item-one.png"
import itemTwo from "../assets/item-two.png"
import itemThree from "../assets/item-three.png"
import itemFour from "../assets/item-four.png"
import itemFive from "../assets/item-five.png"
import itemSix from "../assets/item-six.png"
import itemSeven from "../assets/item-seven.png"
import itemEight from "../assets/item-eight.png"
import AOS from 'aos';
import { useEffect } from "react"

const FollowUs = () => {

    useEffect(() => {
        AOS.init({
          duration: 2000, 
          once: true, 
          offset: 120, 
        });
    
        
        return () => AOS.refresh();
      }, []);
    return (
        <div className="mt-10 lg:mt-[120px] px-4 lg:px-6 2xl:px-[300px]">
            <p className="font-raleway text-[#1B1A1A] text-[20px] text-center">Follow Us Now</p>
            <h2 className="mt-2 text-[40px] md:text-[55px] text-[#331A15] font-rancho text-center" data-aos="flip-left">Follow on Instagram</h2>
            <div className="mt-[30px] lg:mt-[48px] grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                <div data-aos="zoom-in-up"><img className="h-full w-full" src={itemOne} alt="" /></div>
                <div data-aos="zoom-in-up"><img className="h-full w-full" src={itemTwo} alt="" /></div>
                <div data-aos="zoom-in-up"><img className="h-full w-full" src={itemThree} alt="" /></div>
                <div data-aos="zoom-in-up"><img className="h-full w-full" src={itemFour} alt="" /></div>
                <div data-aos="zoom-in-up"><img className="h-full w-full" src={itemFive} alt="" /></div>
                <div data-aos="zoom-in-up"><img className="h-full w-full" src={itemSix} alt="" /></div>
                <div data-aos="zoom-in-up"><img className="h-full w-full" src={itemSeven} alt="" /></div>
                <div data-aos="zoom-in-up"><img className="h-full w-full" src={itemEight} alt="" /></div>
            </div>
        </div>
    );
};

export default FollowUs;