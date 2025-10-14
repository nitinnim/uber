import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import ConfirmRide from "../components/ConfirmRide";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");

  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false);
  const confirmRidePanelRef = useRef(null);

  const [vehicleFoundPanel, setVehicleFoundPanel] = useState(false);
  const vehicleFoundRef = useRef(null);

  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );

  useGSAP(
    function () {
      if (confirmRidePanelOpen) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanelOpen]
  );

  useGSAP(
    function () {
      if (vehicleFoundPanel) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFoundPanel]
  );

  useGSAP(
    function () {
      if (waitingForDriverPanel) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriverPanel]
  );

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        className="absolute w-20 left-5 top-5"
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt="Uber Logo"
      />

      {/* This is a temporary map image */}
      <div className="h-screen w-screen">
        <img
          className="h-full w-full"
          src="https://www.uberpeople.net/attachments/img_0601-png.90223/"
          alt="Map Image"
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h2 className="text-2xl font-semibold">Find a trip</h2>
          <h2
            onClick={() => setPanelOpen(false)}
            ref={panelCloseRef}
            className="absolute opacity-0 top-7 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h2>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className=""
          >
            <div className="h-16 w-1 rounded-full bg-gray-800 absolute left-10 top-[48%]"></div>
            <input
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              onClick={() => setPanelOpen(true)}
              className="border px-12 py-2 bg-[#eee] text-base rounded w-full mt-6"
              type="text"
              placeholder="Your pickup location"
            />
            <input
              value={dropOff}
              onChange={(e) => setDropOff(e.target.value)}
              onClick={() => setPanelOpen(true)}
              className="border px-12 py-2 bg-[#eee] text-base rounded w-full mt-4"
              type="text"
              placeholder="Your drop-off location"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-[0%]">
          <LocationSearchPanel
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bottom-0 w-full px-3 py-8 translate-y-full bg-white"
      >
        <VehiclePanel
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
        />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed z-10 bottom-0 w-full translate-y-full px-3 py-8 bg-white"
      >
        <ConfirmRide
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          setVehicleFoundPanel={setVehicleFoundPanel}
        />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed z-10 bottom-0 w-full translate-y-full px-3 py-8 bg-white"
      >
        <LookingForDriver setVehicleFoundPanel={setVehicleFoundPanel} />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed z-10 bottom-0 w-full translate-y-full px-3 py-8 bg-white"
      >
        <WaitingForDriver setWaitingForDriverPanel={setWaitingForDriverPanel} />
      </div>
    </div>
  );
};

export default Home;
