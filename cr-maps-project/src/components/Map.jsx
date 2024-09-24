import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Setting up custom icon for Leaflet marker
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map = () => {
  const [schools] = useState([
    { lat: 6.5244, long: 3.3792, name: 'School A' },
    { lat: 9.082, long: 8.6753, name: 'School B' },
  ]);

  const [selectedSchool, setSelectedSchool] = useState(null);

  return (
    <MapContainer
      center={[9.082, 8.6753]} // Default coordinates
      zoom={5}
      style={{ width: '100vw', height: '80vh' }}
    >
      {/* TileLayer from OpenStreetMap */}
     <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      
      {schools.map((school, index) => (
        <Marker
          key={index}
          position={[school.lat, school.long]}
          icon={customIcon}
          eventHandlers={{
            click: () => {
              setSelectedSchool(school);
            },
          }}
        >
          {selectedSchool && selectedSchool.name === school.name && (
            <Popup
              position={[school.lat, school.long]}
              onClose={() => setSelectedSchool(null)}
            >
              <div>
                <h2>{school.name}</h2>
                <p>Some info about this school</p>
              </div>
            </Popup>
          )}
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
