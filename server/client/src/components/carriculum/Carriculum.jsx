import React, { useState } from 'react';
import crypto from 'crypto';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const uri = "https://authservice.priaid.ch/login";
    const secretKey = "i2KHk9s4PRd3r7BJw";
    const nonce = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const hashDigest = crypto.createHash('sha256').update(nonce + symptoms).digest('hex');
    const hmacDigest = crypto.createHmac('sha512', secretKey).update(uri + hashDigest).digest('base64');

    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer Mt2b5_GMAIL_COM_AUT:${hmacDigest}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ symptoms: symptoms })
    };

    try {
      const response = await fetch('https://healthservice.p.rapidapi.com/symptomchecker', requestOptions);
      const data = await response.json();
      setDiagnosis(data);
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Symptom Checker</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full h-32 p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter symptoms (separated by commas)"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {loading ? 'Loading...' : 'Check Symptoms'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {diagnosis && (
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Diagnosis:</h2>
          <ul>
            {diagnosis.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">Condition:</span> {item.name}<br />
                <span className="font-semibold">Probability:</span> {item.probability}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
