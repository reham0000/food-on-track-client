import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Extra from "../Extra/Extra";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import SpecialItems from "../SpecialItems/SpecialItems";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Extra></Extra>
            <PopularMenu></PopularMenu>
            <SpecialItems></SpecialItems>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;