import About from "../components/About";
import Banner from "../components/Banner";
import FollowUs from "../components/FollowUs";
import PopularProduct from "../components/PopularProduct";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <PopularProduct></PopularProduct>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;