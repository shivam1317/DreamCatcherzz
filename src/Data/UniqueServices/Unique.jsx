import React from "react";

const Unique = () => {
  return (
    <div>
      <h1 className="text-center my-5 text-3xl font-bold bg-red-500 text-white p-3 ">
        Our Unique Services
      </h1>
      <div className="flex items-center justify-around flex-wrap">
        <p className="p-8 mx-3 font-bold text-xl rounded-lg bg-gray-100 my-3">
          1. Art & Decor
        </p>
        <p className="p-8 mx-3 font-bold text-xl rounded-lg bg-gray-100 my-3 text-center">
          2. Vastu & Energy Correction{" "}
        </p>
        <p className="p-8 mx-3 font-bold text-xl rounded-lg bg-gray-100 my-3">
          3. Brading
        </p>
      </div>
    </div>
  );
};

export default Unique;
