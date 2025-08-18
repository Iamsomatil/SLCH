import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Location {
  id: number;
  name: string;
  lat: number;
  lng: number;
  services: string[];
}

const locations: Location[] = [
  {
    id: 1,
    name: 'New York Office',
    lat: 40.7128,
    lng: -74.0060,
    services: ['Corporate Housing', 'Facility Management']
  },
  {
    id: 2,
    name: 'Los Angeles Office',
    lat: 34.0522,
    lng: -118.2437,
    services: ['Corporate Housing', 'Property Management']
  },
  {
    id: 3,
    name: 'Chicago Office',
    lat: 41.8781,
    lng: -87.6298,
    services: ['Facility Management', 'Maintenance Services']
  },
  {
    id: 4,
    name: 'Houston Office',
    lat: 29.7604,
    lng: -95.3698,
    services: ['Corporate Housing', 'Consulting']
  },
];

const MapComponent: React.FC = () => {
  return (
    <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[39.8283, -98.5795]} // Center of USA
        zoom={4}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-navy">{location.name}</h3>
                <div className="mt-2">
                  <p className="text-sm font-semibold text-gold">Services:</p>
                  <ul className="text-sm text-gray-600">
                    {location.services.map((service, index) => (
                      <li key={index}>• {service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;