import React from "react";
import { Link } from "react-router-dom";
import { BsHouseDoor, BsPlusSquare, BsSearch, BsChatDots } from "react-icons/bs";
import collaborationImage from "../../assets/collaboration.jpg";

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow flex justify-around items-center py-2">
      <Link to="/" className="text-2xl text-gray-500">
        <BsHouseDoor />
      </Link>
      <Link to="/add-post" className="text-2xl text-gray-500">
        <BsPlusSquare />
      </Link>
      <Link to="/search" className="text-2xl text-gray-500">
        <BsSearch />
      </Link>
      <Link to="/chats" className="text-2xl text-gray-500">
        <BsChatDots />
      </Link>
    </nav>
  );
};

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

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </section>
  );
};

export default CollaborationHeroSection;
