import React from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  return (
    <div className="">
      <h5
        onClick={() => {
          props.setConfirmRidePopUpPanel(false);
        }}
        className="absolute top-0 w-full flex items-center justify-center text-2xl"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="my-3 text-2xl font-semibold">
        Confirm this ride to Start
      </h2>

      <div className="flex flex-col gap-3 items-center">
        <div className="bg-yellow-400 w-full rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="h-12 w-12 object-cover rounded-full"
              src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
              alt="Car Image"
            />
            <h3 className="font-semibold text-lg">Amisha Patel</h3>
          </div>
          <div>
            <h3 className="font-semibold text-lg">2.5 KM</h3>
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

        <div className="mt-4 w-full">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              type="text"
              placeholder="Enter OTP"
              className="bg-[#eeeeee] font-mono rounded w-full px-4 py-3 mb-4 placeholder:text-base"
            />
            <Link
              to="/captain-riding"
              className="bg-green-600 text-lg block w-full text-center text-white font-semibold rounded-xl py-2"
            >
              Confirm
            </Link>
            <button
              className="w-full bg-red-600 text-lg mt-4 text-white font-semibold rounded-xl py-2"
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setRidePopUpPanel(false);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
