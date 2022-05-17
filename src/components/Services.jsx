import React from "react";
import "../css/service.css";
import Interior from "../Data/interior/Interior.jsx";
import Cafe from "../Data/cafe/Cafe";
import Store from "../Data/Store/Store";
import { Link, animateScroll as scroll } from "react-scroll";
import Footer from "./Footer";
import { useEffect } from "react";
import Unique from "../Data/UniqueServices/Unique";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <meta name="title" content="Services" />
      <meta
        name="description"
        content="This is the service page of DreamCatcherzz team website"
      />
      <div>
        <Interior />
        <Cafe />
        <Store />

        <Unique />
        <div className="flex justify-center items-center w-full mb-3 p-5">
          <button
            onClick={scroll.scrollToTop}
            className="bg-red-600 text-white hover:bg-white hover:text-red-600 transition-all ease-in-out p-3 hover:border-red-600 border-2 rounded-lg"
          >
            Back to top
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
