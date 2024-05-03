import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaEnvelope, FaSearch, FaCalendar, FaAmbulance, FaUserMd, FaFlask } from 'react-icons/fa';

const PillarsSection = () => {
  return (
    <section className="py-10 bg-blue-200">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-6">Health Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HealthTipsCarousel />
            <EmergencyServices />
            <DoctorsSection />
          </div>
        </div>
      </div>
      <MobileNavbar />
    </section>
  );
};

const HealthTipsCarousel = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const healthTips = ["Health Tip 1", "Health Tip 2", "Health Tip 3"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex === healthTips.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [healthTips.length]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-center mb-4">
        {/* Health tips carousel with fade effect */}
        <div className="relative">
          {healthTips.map((tip, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentTipIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-gray-200 rounded-lg p-4">{tip}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EmergencyServices = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">Services</h3>
      <div className="flex flex-wrap">
        <EmergencyServiceItem icon={FaAmbulance} title="Ambulance" link="/ambulance" />
        <EmergencyServiceItem icon={FaUserMd} title="See Doctor" link="/doctor" />
        <EmergencyServiceItem icon={FaFlask} title="Lab & Radiology" link="/lab-radiology" />
      </div>
    </div>
  );
};


const EmergencyServiceItem = ({ icon: Icon, title, link }) => {
  return (
    <Link to={link} className="flex-shrink-0 bg-blue-200 bg-opacity-75 rounded-lg p-4 mr-4 mb-4">
      <Icon className="text-gray-600 text-lg" />
      <p className="text-gray-800">{title}</p>
    </Link>
  );
};


const DoctorsSection = () => {
  const doctors = [
    { name: "Doctor 1", image: "doctor1.jpg", description: "Description of Doctor 1" },
    { name: "Doctor 2", image: "doctor2.jpg", description: "Description of Doctor 2" },
    { name: "Doctor 3", image: "doctor3.jpg", description: "Description of Doctor 3" }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">Our Doctors</h3>
      <div className="flex flex-wrap justify-center">
        {doctors.map((doctor, index) => (
          <div key={index} className="flex-shrink-0 w-48 md:w-64 bg-gray-200 mr-4 mb-4 rounded-lg p-4">
            <img src={doctor.image} alt={doctor.name} className="w-full h-32 md:h-40 object-cover rounded-lg mb-2" />
            <p className="text-gray-800 font-semibold text-sm md:text-base">{doctor.name}</p>
            <p className="text-gray-600 text-xs md:text-sm">{doctor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-around items-center md:hidden">
      <Link to="/home">
        <FaHome className="text-gray-600 text-lg cursor-pointer" />
      </Link>
      <Link to="/messages">
        <FaEnvelope className="text-gray-600 text-lg cursor-pointer" />
      </Link>
      <Link to="/search">
        <FaSearch className="text-gray-600 text-lg cursor-pointer" />
      </Link>
      <Link to="/bookings">
        <FaCalendar className="text-gray-600 text-lg cursor-pointer" />
      </Link>
    </div>
  );
};

export default PillarsSection;
