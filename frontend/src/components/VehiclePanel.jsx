import React from "react";
import "remixicon/fonts/remixicon.css";

const VehiclePanel = (props) => {
  return (
    <div>
      <h2 className="mb-5 text-2xl font-semibold">Choose a Vehicle</h2>
      <h2
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
        className="absolute top-7 right-6 text-2xl"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h2>
      <div
        onClick={() => {
          props.setConfirmRidePanelOpen(true);
        }}
        className="flex border-2 border-gray-200 active:border-black mb-2 rounded-xl w-full items-center p-3 justify-between"
      >
        <img
          className="h-12 ml-[-3]"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="w-1/2">
          <h2 className="font-medium text-base">
            Uber Go{" "}
            <span className="text-xs">
              <i className="ri-user-fill"></i>4
            </span>
          </h2>
          <h3 className="font-medium text-sm">2 mins away</h3>
          <p className="font-normal text-xs">Affordable, compact rides</p>
        </div>

        <h2 className="font-semibold text-lg">₹193.20</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanelOpen(true);
        }}
        className="flex border-2 border-gray-200 active:border-black mb-2 rounded-xl w-full items-center p-3 justify-between"
      >
        <img
          className="h-12 ml-[-3]"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png"
          alt="Car Image"
        />

        <div className="w-1/2">
          <h2 className="font-medium text-base">
            Moto{" "}
            <span className="text-xs">
              <i className="ri-user-fill"></i>1
            </span>
          </h2>
          <h3 className="font-medium text-sm">3 mins away</h3>
          <p className="font-normal text-xs">Affordable motorcycle rides</p>
        </div>

        <h2 className="font-semibold text-lg">₹65.17</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanelOpen(true);
        }}
        className="flex border-2 border-gray-200 active:border-black mb-2 rounded-xl w-full items-center p-3 justify-between"
      >
        <img
          className="h-12 ml-[-3]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFabRnJZ8deGXJSKA1QjN45920WytRrdFsA&s"
          alt="Car Image"
        />

        <div className="w-1/2">
          <h2 className="font-medium text-base">
            UberAuto{" "}
            <span className="text-xs">
              <i className="ri-user-fill"></i>3
            </span>
          </h2>
          <h3 className="font-medium text-sm">2 mins away</h3>
          <p className="font-normal text-xs">Affordable, Auto rides</p>
        </div>

        <h2 className="font-semibold text-lg">₹113.22</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
