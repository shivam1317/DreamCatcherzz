import React from "react";
import "../css/service.css";
import Interior from "../Data/interior/Interior.jsx";
import ServiceHome from "../Data/Home/ServiceHome";
import Cafe from "../Data/cafe/Cafe";
import Kitchen from "../Data/Kitchen/Kitchen";
import Office from "../Data/Office/Office";
import Store from "../Data/Store/Store";

const services = [
  {
    heading: "Interior",
    src: "./images/Services/interior.svg",
    description: "We will design your interior",
  },
  {
    heading: "Home",
    src: "./images/Services/Bedroom.svg",
    description: "We will make your bedroom looks beautiful",
  },
  {
    heading: "Cafe",
    src: "./images/Services/cafe.svg",
    description: "We also design cafe",
  },
  {
    heading: "Kitchen",
    src: "./images/Services/kitchen.jpg",
    description: "We also design kitchen and it's interior",
  },
  {
    heading: "Office",
    src: "./images/Services/office.jpg",
    description: "We also decorate your office",
  },
  {
    heading: "Store",
    src: "./images/Services/store.jpg",
    description: "We also decorate your store",
  },
];

const Services = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold bg-red-500 text-white p-5 ">
        What we provide
      </h1>
      <div className="w-full flex flex-wrap justify-evenly">
        {services.map((service) => {
          return (
            <div className="lg:w-1/4 flex justify-center items-center mx-5 my-3 md:w-2/5 sm:w-full">
              <img src={service.src} alt="service" className="w-3/5 mr-2" />
              <div className="flex flex-col justify-around">
                <h3 className="text-lg font-bold">{service.heading}</h3>
                <span className="text-sm">{service.description}</span>
              </div>
            </div>
          );
        })}
      </div>
      <Interior />
      <ServiceHome />
      <Cafe />
      <Kitchen />
      <Office />
      <Store />
    </div>
  );
};

export default Services;
