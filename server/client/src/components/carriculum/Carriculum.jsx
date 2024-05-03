import React, { useState } from "react";
import axios from "axios";

const ConnectDoctorComponent = ({ userName, profileImage }) => {
  const [symptoms, setSymptoms] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleInputChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`API_ENDPOINT/symptoms=${symptoms}`);
      setRecommendation(response.data.recommendation);
    } catch (error) {
      console.error("Error fetching recommendation:", error);
      setRecommendation("Error fetching recommendation. Please try again later.");
    }
  };

  return (
    <div className="bg-blue-200 p-4 rounded-md shadow-md">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-lg font-bold">Hi {userName}, how are you feeling?</h3>
          <p>Let's connect you to a doctor.</p>
        </div>
        {profileImage && (
          <img src={profileImage} alt="User profile" className="w-10 h-10 rounded-full" />
        )}
      </div>
      <div className="mb-2">
        <input
          type="text"
          value={symptoms}
          onChange={handleInputChange}
          placeholder="Enter your symptoms (separated by commas)"
          className="w-full h-12 border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
      {recommendation && (
        <div className="mt-2">
          <h4 className="text-md font-bold mb-1">Recommended Doctor:</h4>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default ConnectDoctorComponent;
