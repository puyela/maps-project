import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import localSchools from '../data/Schools_data.json'; // Local JSON data
import { motion } from 'framer-motion';
import { RiMapPinFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

// Custom icons for Leaflet markers
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const redIcon = new L.DivIcon({
  className: 'custom-marker',
  html: `<div style='color: red; font-size: 24px;'>${ReactDOMServer.renderToString(<RiMapPinFill />)}</div>`,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState([4.958, 8.3269]); // Default: Calabar, Nigeria
  const [schools, setSchools] = useState(localSchools); // Initialize with local JSON data
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [chartData, setChartData] = useState([]);
  const navigate = useNavigate();

  // Update chart data when schools data changes
  useEffect(() => {
    setChartData(
      schools.map((school, index) => ({
        name: school.name || `School ${index + 1}`,
        count: 1, // Example count value for each school
      }))
    );
  }, [schools]);

  return (
    <div className="relative">
      {/* Leaflet Map */}
      <MapContainer
        center={currentLocation}
        zoom={13}
        style={{ width: '100vw', height: '80vh' }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* Current location marker */}
        <Marker position={currentLocation} icon={redIcon}>
          <Popup>
            <div>
              <h2 className="font-bold">You are here</h2>
              <p>Current location: Calabar or your actual location.</p>
            </div>
          </Popup>
        </Marker>

        {/* Markers for schools */}
        {schools.map((school, index) => (
          school.lat && school.lon && (
            <Marker
              key={index}
              position={[school.lat, school.lon]}
              icon={customIcon}
              eventHandlers={{
                click: () => setSelectedSchool(school),
              }}
            >
              {selectedSchool && selectedSchool.name === school.name && (
                <Popup
                  position={[school.lat, school.lon]}
                  onClose={() => setSelectedSchool(null)}
                >
                  <div>
                    <h2 className="font-bold">{school.name}</h2>
                    <p>{school.location}</p>
                  </div>
                </Popup>
              )}
            </Marker>
          )
        ))}
      </MapContainer>

      {/* Legend for Marker Colors */}
      <div className="absolute bottom-4 left-4 bg-white p-4 rounded shadow-lg z-10">
        <h4 className="font-bold">Marker Legend</h4>
        <ul>
          <li>
            <span className="inline-block w-4 h-4 bg-red-500 mr-2 rounded-full"></span>
            You are here
          </li>
          <li>
            <span className="inline-block w-4 h-4 bg-gray-500 mr-2 rounded-full"></span>
            School
          </li>
        </ul>
      </div>

      {/* Bar Chart Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full mt-8 bg-white p-4 rounded-lg shadow-lg border border-gray-300"
      >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="url(#colorCount)" />
            <defs>
              <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4caf50" stopOpacity={1} />
                <stop offset="100%" stopColor="#3f51b5" stopOpacity={1} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate('/')} // Navigate to home
        className="p-4 rounded-full bg-gradient-to-r from-green-500 to-indigo-500 text-white shadow-lg fixed top-5 left-14 z-50 transition duration-300 hover:opacity-80"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Map;
