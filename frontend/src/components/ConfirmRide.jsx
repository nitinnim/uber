import React from "react";
import "remixicon/fonts/remixicon.css";

const ConfirmRide = (props) => {
  return (
    <div className="pt-3">
      <h5
        onClick={() => {
          props.setConfirmRidePanelOpen(false);
        }}
        className="absolute top-0 w-full flex items-center justify-center text-2xl"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="mb-3 text-2xl font-semibold">Confirm Your Ride</h2>

      <div className="flex flex-col gap-3 items-center">
        <img
          className="h-20 -mt-4"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="Car Image"
        />

        <div className="w-full flex flex-col">
          <div className="flex gap-5 items-center p-2 border-b-1 border-gray-500">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h2 className="text-lg font-medium">562/11-A</h2>
              <p className="text-sm">Kaikondrahali, Bengaluru, Karnataka</p>
            </div>
          </div>

          <div className="flex gap-5 items-center p-2 border-b-1 border-gray-500">
            <i className="text-lg ri-map-pin-3-fill"></i>
            <div>
              <h2 className="text-lg font-medium">562/11-A</h2>
              <p className="text-sm">Kaikondrahali, Bengaluru, Karnataka</p>
            </div>
          </div>

          <div className="flex gap-5 items-center p-2">
            <i className="text-lg ri-money-rupee-circle-line"></i>
            <div>
              <h2 className="text-lg font-medium">195.40</h2>
              <p className="text-sm">Cash Cash</p>
            </div>
          </div>
        </div>

        <button
          className="w-full bg-green-600 text-lg text-white font-semibold rounded-xl py-2"
          onClick={() => {
            props.setVehicleFoundPanel(true);
            props.setConfirmRidePanelOpen(false);
          }}
        >
          Confirm Your Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
