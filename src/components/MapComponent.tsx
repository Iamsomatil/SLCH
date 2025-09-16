import React, { useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom marker icon
const createMarkerIcon = (color = '#00008B') => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; transform: translate(-6px, -6px);"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
    popupAnchor: [0, -6]
  });
};

// State centers and abbreviations
const stateCenters = [
  { name: 'Alabama', abbr: 'AL', lat: 32.806671, lng: -86.79113 },
  { name: 'Alaska', abbr: 'AK', lat: 61.370716, lng: -152.404419 },
  { name: 'Arizona', abbr: 'AZ', lat: 33.729759, lng: -111.431221 },
  { name: 'Arkansas', abbr: 'AR', lat: 34.969704, lng: -92.373123 },
  { name: 'California', abbr: 'CA', lat: 36.116203, lng: -119.681564 },
  { name: 'Colorado', abbr: 'CO', lat: 39.059811, lng: -105.311104 },
  { name: 'Connecticut', abbr: 'CT', lat: 41.597782, lng: -72.755371 },
  { name: 'Delaware', abbr: 'DE', lat: 39.318523, lng: -75.507141 },
  { name: 'Florida', abbr: 'FL', lat: 27.766279, lng: -81.686783 },
  { name: 'Georgia', abbr: 'GA', lat: 33.040619, lng: -83.643074 },
  { name: 'Hawaii', abbr: 'HI', lat: 21.094318, lng: -157.498337 },
  { name: 'Idaho', abbr: 'ID', lat: 44.240459, lng: -114.478828 },
  { name: 'Illinois', abbr: 'IL', lat: 40.349457, lng: -88.986137 },
  { name: 'Indiana', abbr: 'IN', lat: 39.849426, lng: -86.258278 },
  { name: 'Iowa', abbr: 'IA', lat: 42.011539, lng: -93.210526 },
  { name: 'Kansas', abbr: 'KS', lat: 38.5266, lng: -96.726486 },
  { name: 'Kentucky', abbr: 'KY', lat: 37.66814, lng: -84.670067 },
  { name: 'Louisiana', abbr: 'LA', lat: 31.169546, lng: -91.867805 },
  { name: 'Maine', abbr: 'ME', lat: 44.693947, lng: -69.381927 },
  { name: 'Maryland', abbr: 'MD', lat: 39.063946, lng: -76.802101 },
  { name: 'Massachusetts', abbr: 'MA', lat: 42.230171, lng: -71.530106 },
  { name: 'Michigan', abbr: 'MI', lat: 43.326618, lng: -84.536095 },
  { name: 'Minnesota', abbr: 'MN', lat: 45.694454, lng: -93.900192 },
  { name: 'Mississippi', abbr: 'MS', lat: 32.741646, lng: -89.678696 },
  { name: 'Missouri', abbr: 'MO', lat: 38.456085, lng: -92.288368 },
  { name: 'Montana', abbr: 'MT', lat: 46.921925, lng: -110.454353 },
  { name: 'Nebraska', abbr: 'NE', lat: 41.12537, lng: -98.268082 },
  { name: 'Nevada', abbr: 'NV', lat: 38.313515, lng: -117.055374 },
  { name: 'New Hampshire', abbr: 'NH', lat: 43.452492, lng: -71.563896 },
  { name: 'New Jersey', abbr: 'NJ', lat: 40.298904, lng: -74.521011 },
  { name: 'New Mexico', abbr: 'NM', lat: 34.840515, lng: -106.248482 },
  { name: 'New York', abbr: 'NY', lat: 42.165726, lng: -74.948051 },
  { name: 'North Carolina', abbr: 'NC', lat: 35.630066, lng: -79.806419 },
  { name: 'North Dakota', abbr: 'ND', lat: 47.528912, lng: -99.784012 },
  { name: 'Ohio', abbr: 'OH', lat: 40.388783, lng: -82.764915 },
  { name: 'Oklahoma', abbr: 'OK', lat: 35.565342, lng: -96.928917 },
  { name: 'Oregon', abbr: 'OR', lat: 44.572021, lng: -122.070938 },
  { name: 'Pennsylvania', abbr: 'PA', lat: 40.590752, lng: -77.209755 },
  { name: 'Rhode Island', abbr: 'RI', lat: 41.680893, lng: -71.51178 },
  { name: 'South Carolina', abbr: 'SC', lat: 33.856892, lng: -80.945007 },
  { name: 'South Dakota', abbr: 'SD', lat: 44.299782, lng: -99.438828 },
  { name: 'Tennessee', abbr: 'TN', lat: 35.747845, lng: -86.692345 },
  { name: 'Texas', abbr: 'TX', lat: 31.054487, lng: -97.563461 },
  { name: 'Utah', abbr: 'UT', lat: 40.150032, lng: -111.862434 },
  { name: 'Vermont', abbr: 'VT', lat: 44.045876, lng: -72.710686 },
  { name: 'Virginia', abbr: 'VA', lat: 37.769337, lng: -78.169968 },
  { name: 'Washington', abbr: 'WA', lat: 47.400902, lng: -121.490494 },
  { name: 'West Virginia', abbr: 'WV', lat: 38.491226, lng: -80.954453 },
  { name: 'Wisconsin', abbr: 'WI', lat: 44.268543, lng: -89.616508 },
  { name: 'Wyoming', abbr: 'WY', lat: 42.755966, lng: -107.30249 },
];

interface Location {
  id: number | string;
  name: string;
  lat: number;
  lng: number;
  services: string[];
  type: 'state' | 'location';
  abbr?: string;
}

// Convert state centers to locations
const stateLocations: Location[] = stateCenters.map((state, index) => ({
  id: `state-${state.abbr}`,
  name: state.name,
  lat: state.lat,
  lng: state.lng,
  services: ["Nationwide Coverage"],
  type: 'state' as const,
  abbr: state.abbr
}));

// Add major cities as additional locations
const cityLocations: Location[] = [
  {
    id: 'city-1',
    name: "Seattle, WA",
    lat: 47.6062,
    lng: -122.3321,
    services: ["Facility Services"],
    type: 'location' as const
  },
  {
    id: 'city-2',
    name: "San Francisco, CA",
    lat: 37.7749,
    lng: -122.4194,
    services: ["Facility Services"],
    type: 'location' as const
  },
  {
    id: 'city-3',
    name: "New York, NY",
    lat: 40.7128,
    lng: -74.006,
    services: ["Facility Services"],
    type: 'location' as const
  },
  {
    id: 'city-4',
    name: "Chicago, IL",
    lat: 41.8781,
    lng: -87.6298,
    services: ["Facility Services"],
    type: 'location' as const
  },
  {
    id: 'city-5',
    name: "Houston, TX",
    lat: 29.7604,
    lng: -95.3698,
    services: ["Facility Services"],
    type: 'location' as const
  }
];

const allLocations = [...stateLocations, ...cityLocations];

const MapComponent = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(4);
  
  // Create a ref to store the map instance
  const mapRef = React.useRef<L.Map>(null);
  
  // Handle zoom level changes
  const updateZoom = () => {
    if (mapRef.current) {
      setZoomLevel(mapRef.current.getZoom());
    }
  };

  // Custom marker icon based on type
  const getMarkerIcon = (type: 'state' | 'location') => {
    const size = zoomLevel > 5 ? 12 : zoomLevel > 4 ? 10 : 8;
    const color = type === 'state' ? '#00008B' : '#F7941D';
    
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: ${color}; width: ${size}px; height: ${size}px; border-radius: 50%; border: 2px solid white; transform: translate(-${size/2}px, -${size/2}px);"></div>`,
      iconSize: [size, size],
      iconAnchor: [size/2, size/2],
      popupAnchor: [0, -size/2]
    });
  };

  // Handle state selection
  const handleStateSelect = (stateAbbr: string) => {
    const state = stateLocations.find(s => s.abbr === stateAbbr);
    if (state && mapRef.current) {
      mapRef.current.flyTo([state.lat, state.lng], 6, {
        duration: 1.5
      });
      setSelectedState(stateAbbr);
    }
  };

  return (
    <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-xl">
      <MapContainer
        center={[39.8283, -98.5795]}
        zoom={4}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
        ref={mapRef}
        zoomSnap={0.5}
        whenCreated={(map) => {
          mapRef.current = map;
          updateZoom();
        }}
        onZoomEnd={updateZoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* State markers */}
        {stateLocations.map((location) => (
          <Marker
            key={`state-${location.abbr}`}
            position={[location.lat, location.lng]}
            icon={getMarkerIcon('state')}
            eventHandlers={{
              click: () => handleStateSelect(location.abbr!)
            }}
          >
            <Popup className="custom-popup" closeButton={false}>
              <div className="space-y-1 min-w-[180px]">
                <h4 className="font-semibold text-blue-800">{location.name}</h4>
                <div className="text-sm text-gray-600">
                  {location.services.join(", ")}
                </div>
                <button 
                  className="mt-2 text-xs text-blue-600 hover:underline"
                  onClick={() => handleStateSelect(location.abbr!)}
                >
                  Zoom to {location.abbr}
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
        
        {/* City markers - only show when zoomed in */}
        {zoomLevel > 4 && cityLocations.map((location) => (
          <Marker
            key={`city-${location.id}`}
            position={[location.lat, location.lng]}
            icon={getMarkerIcon('location')}
          >
            <Popup className="custom-popup" closeButton={false}>
              <div className="space-y-1 min-w-[180px]">
                <h4 className="font-semibold text-orange-600">{location.name}</h4>
                <div className="text-sm text-gray-600">
                  {location.services.join(", ")}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        
        {/* Highlight selected state */}
        {selectedState && (() => {
          const state = stateLocations.find(s => s.abbr === selectedState);
          return state ? (
            <Circle
              center={[state.lat, state.lng]}
              radius={zoomLevel * 10000}
              pathOptions={{
                fillColor: '#00008B',
                fillOpacity: 0.1,
                color: '#00008B',
                weight: 1,
                opacity: 0.5
              }}
              eventHandlers={{
                click: () => setSelectedState(null)
              }}
            />
          ) : null;
        })()}
      </MapContainer>
      
      {/* State selector for mobile */}
      <div className="absolute top-4 left-4 z-[1000] bg-white p-3 rounded-lg shadow-md max-w-[200px]">
        <h4 className="font-semibold text-sm mb-2">Select a State</h4>
        <select 
          className="w-full p-2 border rounded text-sm"
          value={selectedState || ''}
          onChange={(e) => handleStateSelect(e.target.value)}
        >
          <option value="">All States</option>
          {stateLocations.map(state => (
            <option key={state.abbr} value={state.abbr}>
              {state.name}
            </option>
          ))}
        </select>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-4 right-4 z-[1000] bg-white p-3 rounded-lg shadow-md text-sm">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-[#00008B] border border-white"></div>
          <span>State Coverage</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#F7941D] border border-white"></div>
          <span>Major Locations</span>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
