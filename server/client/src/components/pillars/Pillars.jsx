import React from "react";
import { faHome, faEnvelope, faSearch, faCalendar, faAmbulance, faUserMd, faBookMedical } from 'react-icons/fa';

const PillarsSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-6">Health Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SymptomsInput />
            <EmergencyServices />
            <DoctorsSection />
          </div>
        </div>
      </div>
      <MobileNavbar />
    </section>
  );
};

const SymptomsInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, like sending the symptoms to a backend server
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">Connect to a Doctor</h3>
      <p className="text-gray-700 mb-4">Hi John, how are you feeling today? Let's connect you to a doctor.</p>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full h-32 p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter symptoms separated by commas..."
        ></textarea>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Check Symptoms
        </button>
      </form>
    </div>
  );
};

const EmergencyServices = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">Services</h3>
      <div className="flex flex-wrap">
        <EmergencyServiceItem icon={faAmbulance} title="Emergency Services" />
        <EmergencyServiceItem icon={faUserMd} title="See a Doctor" />
        <EmergencyServiceItem icon={faBookMedical} title="Book Imaging and Labs" />
        {/* Add more emergency services here */}
      </div>
    </div>
  );
};

const EmergencyServiceItem = ({ icon, title }) => {
  return (
    <div className="flex-shrink-0 bg-gray-200 rounded-lg p-4 mr-4 mb-4">
      {icon} {/* Render the Font Awesome icon */}
      <p className="text-gray-800">{title}</p>
    </div>
  );
};

const DoctorsSection = () => {
  // Assume you have doctor data here
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">Our Doctors</h3>
      {/* Render doctors */}
    </div>
  );
};

const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-around items-center md:hidden">
      <a href="#home">
        <FaHome className="text-gray-600 text-lg cursor-pointer" />
      </a>
      <a href="#messages">
        <FaEnvelope className="text-gray-600 text-lg cursor-pointer" />
      </a>
      <a href="#search">
        <FaSearch className="text-gray-600 text-lg cursor-pointer" />
      </a>
      <a href="#bookings">
        <FaCalendar className="text-gray-600 text-lg cursor-pointer" />
      </a>
    </div>
  );
};

export default PillarsSection;
