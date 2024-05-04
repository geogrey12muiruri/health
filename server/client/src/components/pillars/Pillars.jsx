import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaEnvelope, FaSearch, FaCalendar, FaAmbulance, FaUserMd, FaFlask, FaUser} from 'react-icons/fa';
import SymptomChecker from '../../components/carriculum/Carriculum';

const PillarsSection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center">
            <ProfileSection />
            
          </div>
          
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
      transition={{ delay: 0.2 }} // Delay the animation
    >
      <SymptomChecker />
    </motion.div>
  );
};
const ProfileSection = () => {
  return (
    <div className="flex items-center">
      <FaUser className="text-gray-600 text-lg cursor-pointer" />
      <p className="text-gray-600 text-sm ml-2">Hello Gedion</p>
    </div>
  );
};

const EmergencyServicesWithAnimation = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      className="bg-white p-6 rounded-lg shadow-md"
      transition={{ delay: 0.8 }} // Delay the animation
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
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3, // Adjust the delay as needed
        type: "spring",
        stiffness: 100,
        bounce: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center bg-blue-200 bg-opacity-75 rounded-lg p-4 mr-4 mb-4"
    >
      <Link to={link} className="flex items-center">
        <Icon className="text-gray-600 text-lg" />
      </Link>
      <p className="text-gray-800 mt-2 text-center">{title}</p>
    </motion.div>
  );
};


const DoctorsSectionWithAnimation = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      className="bg-white p-6 rounded-lg shadow-md overflow-x-auto"
      transition={{ delay: 1.8 }} // Delay the animation
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
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 + index * 0.1 }} // Delay each doctor card animation
          className="flex-shrink-0 w-48 lg:w-64 bg-gray-200 rounded-lg p-4 mr-4 mb-4"
        >
          <img src={doctor.image} alt={doctor.name} className="w-full h-32 lg:h-40 object-cover rounded-lg mb-2" />
          <div className="flex flex-col justify-center">
            <p className="text-gray-800 font-semibold">{doctor.name}</p>
            <p className="text-gray-600">{doctor.description}</p>
          </div>
        </motion.div>
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

