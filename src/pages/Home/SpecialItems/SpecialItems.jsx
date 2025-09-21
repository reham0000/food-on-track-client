import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import goru from '../../../assets/home/Gorur Kala Bhuna.jpg'
import khashi from '../../../assets/home/Khashir paya.jpg'
import hash from '../../../assets/home/jhol hash.jpg'
const SpecialItems = () => {
  return (
    <>
    <SectionTitle
            heading="CHEF RECOMMENDS"
            subHeading="Should Try"
        ></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mb-16">
        

        <div className="card bg-base-100 w-96 shadow-xl mx-auto">
          <figure className="px-10 pt-10">
            <img
              src={goru}
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Gorur Kala Bhuna</h2>
            <p>Gorur Kala Bhuna is a traditional Bangladeshi beef dish, rich, spicy, flavorful, and deeply aromatic.</p>
            <div className="card-actions">
              <button className="btn bg-yellow-300">CHEF RECOMMENDS </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl mx-auto">
          <figure className="px-10 pt-10">
            <img
              src={khashi}
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Khashir Paya</h2>
            <p>Khashir Paya is a traditional Bangladeshi soup, made from goat trotters, slow-cooked, spicy, nutritious, aromatic.</p>
            <div className="card-actions">
              <button className="btn bg-yellow-300">CHEF RECOMMENDS</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl mx-auto">
          <figure className="px-10 pt-10">
            <img
              src={hash}
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Jhol Hash Curry</h2>
            <p>Jhol Hash Curry is a Bengali duck dish, slow-cooked in light gravy, spicy, aromatic, and flavorful.</p>
            <div className="card-actions">
              <button className="btn bg-yellow-300">CHEF RECOMMENDS</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialItems;
