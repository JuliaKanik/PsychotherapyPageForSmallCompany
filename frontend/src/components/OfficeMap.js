import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet library

const OfficeMap = () => {
  // Office location coordinates
  const officeLocation = [53.420553086915, 14.562204930765638];

  // Custom icon for the map marker
  const officeIcon = new L.Icon({
    iconUrl: '/office-icon.png', // Replace with your icon URL
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <MapContainer center={officeLocation} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={officeLocation} icon={officeIcon}>
        <Popup>Przystan Terapeutyczna</Popup>
      </Marker>
    </MapContainer>
  );
};

export default OfficeMap;
