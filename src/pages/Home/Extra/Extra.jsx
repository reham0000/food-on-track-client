import bg from '../../../assets/home/chef-service.jpg'

const Extra = () => {
    return (
    
        <div className="flex justify-center items-center mb-16 bg-gray-100">
      {/* Container */}
      <div className="relative overflow-hidden border  rounded-md">
        
        {/* Background Image */}
        <img
          src={bg}
          alt="Food"
          className="w-full h-full object-cover"
        />

        {/* Overlay Card */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white/95 shadow-lg p-16 max-w-4xl text-center">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              FoodOnTrack
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              FoodOnTrack is an online railway food service that lets passengers order meals easily during their journey. It offers fresh, hygienic, and diverse food options delivered right to your train seat. With simple ordering and timely delivery, it makes travel more comfortable and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Extra;