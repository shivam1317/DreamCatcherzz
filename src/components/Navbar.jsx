import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  const [icon, setIcon] = useState(true);
  const [show, setShow] = useState(true);
  const toggleFun = () => {
    setShow(!show);
    setIcon(!icon);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && !show) {
        setShow(true);
        console.log("i resizeedddd");
      } else if (window.innerWidth <= 768 && show) {
        setShow(false);
      }
    };
    if (window.innerWidth <= 768 && show) {
      let data = document.getElementsByClassName("toggle");
      for (let i = 0; i < data.length; i++) {
        data[i].addEventListener("click", () => {
          setShow(false);
        });
      }
    }
    window.addEventListener("load", hideMenu);
    return () => {
      window.removeEventListener("load", hideMenu);
    };
  });
  return (
    <div className="py-14">
      <nav className="flex z-10 fixed top-0 inset-x-0 items-center bg-white p-3 flex-wrap md:shadow-xl text-lg">
        <a href="/" className="p-2 mr-4 inline-flex items-center">
          <div className="unnamed">
            <img
              src="./images/dreamcatcherzz_logo.png"
              alt="Here"
              className="object-scale-down h-10 w-20"
            />
          </div>

          <div className="dreamcatcherzz">
            <img
              src="./images/dreamcatcherzz_name_logo.png"
              alt="name-logo"
              className="object-scale-down h-8 w-30 p-1"
            />
          </div>
        </a>
        <button
          className="mobile-menu-button text-black inline-flex p-3 border-black rounded lg:hidden ml-auto nav-toggler"
          data-target="#navigation"
          onClick={toggleFun}
        >
          {icon ? (
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        {show ? (
          <div
            className="mobile-menu shadow-xl lg:shadow-none top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto"
            id="navigation"
          >
            <div className="lg:inline-flex mb-4 lg:mb-0 lg:flex-row lg:ml-auto flex flex-col ">
              <NavLink
                to="/"
                className="krunal-ul toggle lg:inline-flex lg:w-auto px-3 py-2 rounded text-black font-bold hover:text-bold ml-5"
                activeClassName="active"
              >
                <span>Home</span>
              </NavLink>
              <NavLink
                to="/about"
                className="krunal-ul toggle lg:inline-flex lg:w-auto px-3 py-2 rounded text-black font-bold hover:text-bold ml-5"
                activeClassName="active"
              >
                <span>About</span>
              </NavLink>
              <NavLink
                to="/services"
                className="krunal-ul toggle lg:inline-flex lg:w-auto px-3 py-2 rounded text-black font-bold hover:text-bold ml-5"
                activeClassName="active"
              >
                <span>Services</span>
              </NavLink>
              <NavLink
                to="/faq"
                className="krunal-ul toggle lg:inline-flex lg:w-auto px-3 py-2 rounded text-black font-bold hover:text-bold ml-5"
                activeClassName="active"
              >
                <span>FAQ's</span>
              </NavLink>
              <Link
                to="/contact"
                className="toggle lg:inline-flex lg:w-auto px-3 py-2 rounded-2xl text-white font-bold ml-5 bg-red-600 border-2 hover:border-red-600 hover:bg-white hover:text-red-600 transition-all duration-500"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </div>
  );
}

export default Navbar;
