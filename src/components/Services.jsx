import React from "react";
import "../css/service.css";
import Interior from "../Data/interior/Interior.jsx";
import ServiceHome from "../Data/Home/ServiceHome";
import Cafe from "../Data/cafe/Cafe";
import Kitchen from "../Data/Kitchen/Kitchen";
import Office from "../Data/Office/Office";
import Store from "../Data/Store/Store";
import { Link, animateScroll as scroll } from "react-scroll";
import Footer from "./Footer";

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
            <Link
              className="lg:w-1/4 flex justify-center items-center mx-5 my-3 md:w-2/5 sm:w-full cursor-pointer hover:bg-gray-200 p-2 rounded-xl"
              to={service.heading}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <img src={service.src} alt="service" className="w-3/5 mr-2" />
              <div className="flex flex-col justify-around">
                <h3 className="text-lg font-bold">{service.heading}</h3>
                <span className="text-sm">{service.description}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <Interior />
      <ServiceHome />
      <Cafe />
      <Kitchen />
      <Office />
      <Store />
      <div className="flex justify-center items-center w-full mb-5 p-5">
        <button
          onClick={scroll.scrollToTop}
          className="bg-red-600 text-white hover:bg-white hover:text-red-600 transition-all ease-in-out p-3 hover:border-red-600 border-2 rounded-lg"
        >
          Back to top
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
