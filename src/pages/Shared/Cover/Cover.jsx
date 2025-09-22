import { Parallax } from "react-parallax";
const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[700px]"
        
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              ট্রেনে ভ্রমণের সময় স্বাদে ভরপুর ও গরম খাবারের অভিজ্ঞতা নিয়ে আসে
              FoodOnTrack। মেনুতে রয়েছে গরুর কালা ভুনা, মিষ্টি রস মালাই, খাসির
              পায়া, ঝোল হাঁস কারি ও সুগন্ধি চিকেন বিরিয়ানি।
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
