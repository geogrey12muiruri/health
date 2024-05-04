import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaEnvelope, FaSearch, FaCalendar, FaAmbulance, FaUserMd, FaFlask, FaUser} from 'react-icons/fa';
import SymptomChecker from '../../components/carriculum/Carriculum';
import doctorImage from './assets/Screenshot_2024-04-29-19-14-47-115_com.whatsapp-edit.jpg';

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

const doctors = [
    { name: "Doctor 1", image: doctorImage, description: "Description of Doctor 1" },
    { name: "Doctor 2", image: doctorImage, description: "Description of Doctor 2" },
    { name: "Doctor 3", image: doctorImage, description: "Description of Doctor 3" },
    { name: "Doctor 4", image: doctorImage, description: "Description of Doctor 4" },
    { name: "Doctor 5", image: doctorImage, description: "Description of Doctor 5" }
];

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
