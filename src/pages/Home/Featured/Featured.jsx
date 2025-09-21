import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check It Out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pt-12 pb-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Oct 20, 2025</p>
          <p className="uppercase">Know more about us!</p>
          <p>
            This website is an online railway food ordering platform that makes train journeys more enjoyable and convenient. Passengers can browse through a wide range of meals, snacks, and beverages, and place their orders directly from their mobile or laptop. The food is freshly prepared, hygienic, and delivered right to the train seat, ensuring both quality and comfort. With timely delivery, secure payment options, and reliable customer support, the website provides a hassle-free dining experience on the move. It transforms railway travel into a more comfortable and flavorful journey.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
<SectionTitle heading="Check It Out"></SectionTitle>;