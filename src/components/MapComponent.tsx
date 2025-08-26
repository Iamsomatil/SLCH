import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface Location {
  id: number;
  name: string;
  lat: number;
  lng: number;
  services: string[];
}

// Representative markers for nationwide coverage (subset for performance)
const locations: Location[] = [
  {
    id: 1,
    name: "Seattle, WA",
    lat: 47.6062,
    lng: -122.3321,
    services: ["Facility Services"],
  },
  {
    id: 2,
    name: "San Francisco, CA",
    lat: 37.7749,
    lng: -122.4194,
    services: ["Facility Services"],
  },
  {
    id: 3,
    name: "Los Angeles, CA",
    lat: 34.0522,
    lng: -118.2437,
    services: ["Facility Services"],
  },
  {
    id: 4,
    name: "Phoenix, AZ",
    lat: 33.4484,
    lng: -112.074,
    services: ["Facility Services"],
  },
  {
    id: 5,
    name: "Denver, CO",
    lat: 39.7392,
    lng: -104.9903,
    services: ["Facility Services"],
  },
  {
    id: 6,
    name: "Dallas, TX",
    lat: 32.7767,
    lng: -96.797,
    services: ["Facility Services"],
  },
  {
    id: 7,
    name: "Houston, TX",
    lat: 29.7604,
    lng: -95.3698,
    services: ["Facility Services"],
  },
  {
    id: 8,
    name: "Minneapolis, MN",
    lat: 44.9778,
    lng: -93.265,
    services: ["Facility Services"],
  },
  {
    id: 9,
    name: "Chicago, IL",
    lat: 41.8781,
    lng: -87.6298,
    services: ["Facility Services"],
  },
  {
    id: 10,
    name: "Atlanta, GA",
    lat: 33.749,
    lng: -84.388,
    services: ["Facility Services"],
  },
  {
    id: 11,
    name: "Miami, FL",
    lat: 25.7617,
    lng: -80.1918,
    services: ["Facility Services"],
  },
  {
    id: 12,
    name: "Tampa, FL",
    lat: 27.9506,
    lng: -82.4572,
    services: ["Facility Services"],
  },
  {
    id: 13,
    name: "Washington, DC",
    lat: 38.9072,
    lng: -77.0369,
    services: ["Facility Services"],
  },
  {
    id: 14,
    name: "New York, NY",
    lat: 40.7128,
    lng: -74.006,
    services: ["Facility Services"],
  },
  {
    id: 15,
    name: "Boston, MA",
    lat: 42.3601,
    lng: -71.0589,
    services: ["Facility Services"],
  },
];

const MapComponent: React.FC = () => {
  return (
    <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[39.8283, -98.5795]} // Center of USA
        zoom={4}
        style={{ height: "100%", width: "100%" }}
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
