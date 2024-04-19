import React from "react";
import accreditationImage from "../../assets/accreditation.jpg";

const AccreditationSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Accreditation</h2>
            <p className="text-gray-700">
              We are proud to be fully accredited to provide technical training in Kenya. Our accreditation ensures that our
              programs meet the highest standards of quality and that our students receive a recognized and valuable education.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={accreditationImage} alt="Accreditation" className="w-full rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
