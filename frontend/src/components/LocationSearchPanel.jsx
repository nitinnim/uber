import React from 'react'
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
  const sampleData = [
    "24A shreyians coding school, vinay nagar, Bhopal",
    "24B shreyians coding school, vinay nagar, Bhopal",
    "24C shreyians coding school, vinay nagar, Bhopal",
    "24D shreyians coding school, vinay nagar, Bhopal",
  ];

  return (
    <div>
      {sampleData.map((elem) => (
        <div
          onClick={() => {
            props.setVehiclePanelOpen(true);
            props.setPanelOpen(false);
          }}
          key={elem}
          className="flex gap-4 border-2 p-3 my-2 border-gray-50 active:border-black rounded-xl items-center justify-start"
        >
          <h2 className="bg-[#eee] w-14 h-10 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h2 className="font-medium">{elem}</h2>
        </div>
      ))}
    </div>
  );
}

export default LocationSearchPanel
