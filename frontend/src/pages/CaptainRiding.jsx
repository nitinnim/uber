import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = (props) => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen">
      <div className="fixed p-4 flex items-center justify-between w-full">
        <img
          className="w-20"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="Uber Logo"
        />
        <Link
          to="/captain-login"
          className="w-4 h-4 p-5 flex items-center justify-center rounded-full bg-white"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="h-1/5 p-4 relative flex flex-col gap-3 bg-yellow-400 items-center"
        onClick={() => {
          setFinishRidePanel(true);
        }}
      >
        <h5 className="absolute top-0 w-full flex items-center justify-center text-2xl">
          <i className="ri-arrow-up-wide-line"></i>
        </h5>

        <div className="flex mt-8 items-center justify-between w-full px-5">
          <h3 className="font-semibold text-xl">4 KM Away</h3>
          <button className="bg-green-600 text-lg text-white font-semibold rounded-xl py-2 px-4">
            Complete Ride
          </button>
        </div>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed z-10 bottom-0 w-full translate-y-full px-3 py-8 bg-white"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
