import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faBookMedical, faHospital, faEllipsisH, faHome, faEnvelope, faSearch, faCalendar } from "@fortawesome/free-solid-svg-icons";

const PillarsSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-6">Health Services</h2>
          <UserGreeting />
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

const UserGreeting = () => {
  const [symptoms, setSymptoms] = useState("");

  const handleSymptomsChange = (e) => {
    setSymptoms(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle symptom submission
    console.log("Symptoms:", symptoms);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-2">Hi John Doe, how are you feeling today?</h3>
      <p className="text-gray-700 mb-4">Let's connect you to a doctor.</p>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full h-32 p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Add symptoms separated by commas..."
          value={symptoms}
          onChange={handleSymptomsChange}
        ></textarea>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Check Symptoms
        </button>
      </form>
    </div>
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
        <EmergencyServiceItem icon={faHospital} title="Emergency Services" />
        <EmergencyServiceItem icon={faUserMd} title="See a Doctor" />
        <EmergencyServiceItem icon={faBookMedical} title="Book Imaging and Labs" />
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEllipsisH} className="text-gray-600 text-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const EmergencyServiceItem = ({ icon, title }) => {
  return (
    <div className="flex-shrink-0 bg-gray-200 rounded-lg p-4 mr-4 mb-4">
      <FontAwesomeIcon icon={icon} className="text-gray-600 text-lg" />
      <p className="text-gray-800">{title}</p>
    </div>
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
      <div className="flex overflow-x-auto">
        {doctors.map((doctor, index) => (
          <div key={index} className="flex-shrink-0 w-64 bg-gray-200 mr-4 rounded-lg p-4">
            <img src={doctor.image} alt={doctor.name} className="w-full h-40 object-cover rounded-lg mb-2" />
            <p className="text-gray-800 font-semibold">{doctor.name}</p>
            <p className="text-gray-600">{doctor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-around items-center md:hidden">
      <a href="#home">
        <FontAwesomeIcon icon={faHome} className="text-gray-600 text-lg cursor-pointer" />
      </a>
      <a href="#messages">
        <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 text-lg cursor-pointer" />
      </a>
      <a href="#search">
        <FontAwesomeIcon icon={faSearch} className="text-gray-600 text-lg cursor-pointer" />
      </a>
      <a href="#bookings">
        <FontAwesomeIcon icon={faCalendar} className="text-gray-600 text-lg cursor-pointer" />
      </a>
    </div>
  );
};

export default PillarsSection;
