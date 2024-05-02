import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faBookMedical, faHospital, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const PillarsSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-6">Health Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HealthTips />
            <EmergencyServices />
            <DoctorsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

const HealthTips = () => {
  // Assuming health tips are fetched from somewhere
  const healthTips = ["Health Tip 1", "Health Tip 2", "Health Tip 3"];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-center mb-4">
        {/* Health tips carousel or slider goes here */}
        <div className="flex overflow-x-auto">
          {healthTips.map((tip, index) => (
            <div key={index} className="flex-shrink-0 w-64 bg-gray-200 mr-4 rounded-lg p-4">
              <p className="text-gray-800">{tip}</p>
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
      <div className="flex overflow-x-auto">
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
    <div className="flex-shrink-0 bg-gray-200 rounded-lg p-4 mr-4">
      <FontAwesomeIcon icon={icon} className="text-gray-600 text-lg" />
      <p className="text-gray-800">{title}</p>
    </div>
  );
};

const DoctorsSection = () => {
  // Assuming doctor data is fetched from somewhere
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

export default PillarsSection;
