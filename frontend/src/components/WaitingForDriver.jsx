import React from "react";
import "remixicon/fonts/remixicon.css";

const WaitingForDriver = (props) => {
  return (
    <div className="pt-3">
      <h5
        onClick={() => {
          props.setWaitingForDriverPanel(false);
        }}
        className="absolute top-0 w-full flex items-center justify-center text-2xl"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="mb-3 text-2xl font-semibold">Waiting for Driver</h2>

      <div className="flex flex-col gap-3 items-center">
        <div className="flex items-center w-full justify-between">
          <img
            className="h-20"
            src="data:image/jpeg;base64,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"
            alt="Driver Image"
          />
          <div>
            <h2 className="text-lg font-bold">Amandeep Singh</h2>
            <p className="text-sm font-bold">KA-01-HH-1234</p>
            <p className="text-sm">Maruti Suzuki</p>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default WaitingForDriver;
