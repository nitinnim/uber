import React from "react";

const CaptainDetails = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            className="h-16 w-16 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf74Cbk7kq6GY5O4Tk-GR5kK9nvTPfJZbX7A&s"
            alt="Driver Image"
          />
          <h4 className="font-semibold">Amandeep Singh</h4>
        </div>
        <div>
          <h4 className="font-semibold">₹540.40</h4>
          <p className="text-sm text-gray-500">Total Earnings</p>
        </div>
      </div>

      <div className="w-full mt-4 flex items-center justify-between bg-gray-100 p-3 rounded-2xl">
        <div className="flex flex-col items-center">
          <i className="font-thin text-4xl ri-time-line"></i>
          <h3 className="font-semibold">10.2</h3>
          <p className="text-gray-500">Hours Online</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="font-thin text-4xl ri-speed-up-line"></i>
          <h3 className="font-semibold">10.2</h3>
          <p className="text-gray-500">Hours Online</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="font-thin text-4xl ri-booklet-line"></i>
          <h3 className="font-semibold">10.2</h3>
          <p className="text-gray-500">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
