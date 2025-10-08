import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="flex justify-center mb-10 mt-10">
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
    </div>
  );
};

export default OrderTab;
