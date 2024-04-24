import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage1 from "../../assets/back.jpg";
import backgroundImage2 from "../../assets/backgroundimage.jpg";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear", // Ensure linear transition
    fade: true, // Enable fade effect
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {/* First Slide with only background image */}
      <div className="relative py-16 md:py-20 lg:py-24 bg-cover bg-center bg-no-repeat bg-fixed bg-blend-overlay h-50 md:h-screen flex items-center">
        <img src={backgroundImage1} alt="Background 1" className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 max-w-5xl mx-auto px-4 text-center text-white font-mono">
          <div className="flex flex-col h-full justify-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Welcome to Medplus: Connecting Patients with Trusted Medical Professionals
            </h1>
            <p className="text-lg mb-8">
              Experience expert advice and personalized treatment from the comfort of your home.
            </p>
            <div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded mr-4">
                Learn More
              </button>
              <button className="bg-transparent hover:bg-white text-white font-semibold py-2 px-6 border border-white rounded">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Slide with background image and text */}
      <div className="relative py-16 md:py-20 lg:py-24 bg-cover bg-center bg-no-repeat bg-fixed bg-blend-overlay h-80 md:h-screen flex items-center">
        <img src={backgroundImage2} alt="Background 2" className="absolute inset-0 object-cover w-full h-full" />
        
        {/* Text and buttons */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 max-w-5xl mx-auto px-4 text-center text-white font-mono">
          <div className="flex flex-col h-full justify-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Join Our Network of Medical Professionals
            </h1>
            <p className="text-lg mb-8">
              Connect, collaborate, and share knowledge to enhance overall health.
            </p>
            <div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded mr-4">
                Learn More
              </button>
              <button className="bg-transparent hover:bg-white text-white font-semibold py-2 px-6 border border-white rounded">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default HeroSection;
