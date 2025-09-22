import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'


const Menu = () => {
    
  return (
    <div>
      <Helmet>
        <title>FoodOnTrack | Our Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"></Cover>
      
      
    </div>
  );
};

export default Menu;
