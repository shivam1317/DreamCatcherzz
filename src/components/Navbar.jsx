import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && !show) {
        setShow(true);
        console.log("i resizeedddd");
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <div>
      <nav className="flex items-center bg-gray-50 p-3 flex-wrap">
        <a href="#" className="p-2 mr-4 inline-flex items-center">
          <div className="unnamed">
            <img
              src="./images/unnamed.jpg"
              alt="Here"
              className="object-scale-down h-10 w-20"
            />
          </div>

          <span className="text-xl text-black font-bold uppercase tracking-wide">
            DreamCatcherzz
          </span>
        </a>
        <button
          className="mobile-menu-button text-black inline-flex p-3 hover:bg-gray-500 rounded lg:hidden ml-auto nav-toggler"
          data-target="#navigation"
          onClick={() => setShow(!show)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        {show ? (
          <div
            className="mobile-menu top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto"
            id="navigation"
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col ">
              <a
                href="#"
                className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black hover:text-bold hover:bg-gray-500 ml-5"
              >
                <span>Home</span>
              </a>
              <a
                href="#"
                className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black hover:text-bold hover:bg-gray-500 ml-5"
              >
                <span>About</span>
              </a>
              <a
                href="#"
                className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black hover:text-bold hover:bg-gray-500 ml-5"
              >
                <span>Enquiry</span>
              </a>
              <a
                href="#"
                className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-black hover:text-bold hover:bg-gray-500 ml-5"
              >
                <span>FAQ's</span>
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </div>
  );
}

export default Navbar;
