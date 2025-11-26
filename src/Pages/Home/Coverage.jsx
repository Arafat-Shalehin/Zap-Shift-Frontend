import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  // console.log(serviceCenters);
  const mapRef = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));

    if(district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 14);
    }
  }
  return (
    <div className="bg-white rounded-lg p-10 shadow">
      <h1 className="text-secondary text-3xl font-bold">We are available in 64 districts</h1>
      {/* Search */}
      <div>
        <form onSubmit={handleSearch}>
          <label className="input my-5 rounded-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input 
            type="search" 
            placeholder="Search" 
            name="location" 
            className="grow" />
            <button type="submit" className="bg-primary text-secondary font-semibold
            px-6 py-2.5 rounded-full relative left-3">
              Search
            </button>
          </label>
        </form>
        <hr className="mb-10 mt-5 border-gray-300"/>
      </div>
      {/* Map */}
      <h1 className="mb-5 text-secondary text-2xl font-semibold">We deliver almost all over Bangladesh</h1>
      <div className="w-full h-[400px]">
        <MapContainer
          className="h-[400px]"
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br />
                Service Area : {center.covered_area.join(", ")}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
