import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai'; // Import the plus icon

const AddSchoolForm = ({ setSchools }) => {
  const [schoolName, setSchoolName] = useState('');
  const [schoolLocation, setSchoolLocation] = useState({ lat: '', lon: '' });
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!schoolName || !schoolLocation.lat || !schoolLocation.lon || !address) {
      alert('Please fill in all fields');
      return;
    }

    const newSchool = {
      name: schoolName,
      lat: parseFloat(schoolLocation.lat),
      lon: parseFloat(schoolLocation.lon),
      address: address,
    };

    const existingSchools = JSON.parse(localStorage.getItem('schools')) || [];
    const updatedSchools = [...existingSchools, newSchool];

    localStorage.setItem('schools', JSON.stringify(updatedSchools));
    setSchools(updatedSchools);

    setSchoolName('');
    setSchoolLocation({ lat: '', lon: '' });
    setAddress('');
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="p-4 rounded-full bg-gradient-to-r from-green-500 to-indigo-500 text-white shadow-lg fixed top-5 right-5 z-50 transition duration-300 hover:opacity-80"
      >
        <AiOutlinePlus size={30} />
      </button>

      {isFormVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-4 rounded-lg shadow-lg border border-gray-300 mt-2"
        >
          <h2 className="text-xl font-bold mb-2">Add a New School</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="School Name"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              placeholder="Latitude"
              value={schoolLocation.lat}
              onChange={(e) => setSchoolLocation((prev) => ({ ...prev, lat: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              placeholder="Longitude"
              value={schoolLocation.lon}
              onChange={(e) => setSchoolLocation((prev) => ({ ...prev, lon: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
           
            <button
              type="submit"
              className="w-full p-2 bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-md hover:opacity-80 transition duration-300"
            >
              Add School
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default AddSchoolForm;
