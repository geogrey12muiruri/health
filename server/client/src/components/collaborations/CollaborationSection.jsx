import React from "react";
import collaborationImage from "../../assets/collaboration.jpg";


const CollaborationHeroSection = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <img src={collaborationImage} alt="Collaboration" className="absolute inset-0 object-cover w-full h-full z-0" />

      <div className="relative z-10">
        {/* Hero Text */}
        <div className="container mx-auto px-4 text-center py-20 text-white">
          <h1 className="text-4xl font-bold mb-4">Collaborating with Top-Notch Experts</h1>
          <p className="text-lg mb-8">Delivering Quality Training to Our Learners Worldwide</p>
        </div>

        {/* Video Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Watch Our Collaboration in Action</h2>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationHeroSection;
