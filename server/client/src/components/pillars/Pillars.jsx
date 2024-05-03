import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaEnvelope, FaSearch, FaCalendar, FaAmbulance, FaUserMd, FaFlask } from 'react-icons/fa';
import SymptomChecker from '../../components/carriculum/Carriculum';

const PillarsSection = () => {
  return (
    <section className="py-10 bg-blue-200">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-6">Health Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SymptomChecker />
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
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaEnvelope, FaSearch, FaCalendar, FaAmbulance, FaUserMd, FaFlask } from 'react-icons/fa';
import SymptomChecker from '../../components/carriculum/Carriculum';

const PillarsSection = () => {
  return (
    <section className="py-10 bg-blue-200">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-6">Health Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SymptomCheckerWithAnimation />
            <EmergencyServicesWithAnimation />
            <DoctorsSectionWithAnimation />
          </div>
        </div>
      </div>
      <MobileNavbar />
    </section>
  );
};

const slideInVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const SymptomCheckerWithAnimation = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <SymptomChecker />
    </motion.div>
  );
};

const EmergencyServicesWithAnimation = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <EmergencyServices />
    </motion.div>
  );
};

const EmergencyServices = () => {
  return (
    <div>
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

const DoctorsSectionWithAnimation = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      className="bg-white p-6 rounded-lg shadow-md overflow-x-auto"
    >
      <DoctorsSection />
    </motion.div>
  );
};

const DoctorsSection = () => {
  const doctors = [
    { name: "Doctor 1", image: "doctor1.jpg", description: "Description of Doctor 1" },
    { name: "Doctor 2", image: "doctor2.jpg", description: "Description of Doctor 2" },
    { name: "Doctor 3", image: "doctor3.jpg", description: "Description of Doctor 3" },
    { name: "Doctor 4", image: "doctor4.jpg", description: "Description of Doctor 4" },
    { name: "Doctor 5", image: "doctor5.jpg", description: "Description of Doctor 5" }
  ];

  return (
    <div className="flex flex-nowrap flex-wrap lg:flex-no-wrap">
      {doctors.map((doctor, index) => (
        <div key={index} className="flex-shrink-0 w-48 lg:w-64 bg-gray-200 rounded-lg p-4 mr-4 mb-4">
          <img src={doctor.image} alt={doctor.name} className="w-full h-32 lg:h-40 object-cover rounded-lg mb-2" />
          <div className="flex flex-col justify-center">
            <p className="text-gray-800 font-semibold">{doctor.name}</p>
            <p className="text-gray-600">{doctor.description}</p>
          </div>
        </div>
      ))}
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
