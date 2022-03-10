import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex p-3 justify-evenly  flex-wrap bg-red-500 ">
        <div className="lg:p-5 md:p-2 flex flex-col justify-evenly items-center text-red-500  lg:w-1/5 lg:mx-5 md:mx-3 md:w-2/5 ">
          <p className="text-white font-bold text-xl text-center w-full">
            Social Media
          </p>
          <p className="flex justify-evenly bg-white p-3 my-3 rounded-lg mx-3 w-full">
            <img
              src="./images/Footer/Instagram.svg"
              alt="Instagram"
              className="h-5 w-5"
            />
            <a
              href="https://www.instagram.com/dreamcatcherzz_design/"
              target="_blank"
            >
              Instagram
            </a>
          </p>
          <p className="flex justify-evenly bg-white p-3 my-3 rounded-lg mx-3 w-full">
            <img
              src="./images/Footer/Youtube.svg"
              alt="YouTube"
              className="h-5 w-5"
            />
            <a
              href="https://www.youtube.com/c/DreamcatcherzzDesign"
              target="_blank"
            >
              YouTube
            </a>
          </p>
          <p className="flex justify-evenly bg-white p-3 my-3 rounded-lg mx-3 w-full">
            <img
              src="./images/Footer/linkedin.svg"
              alt="LinkedIn"
              className="h-5 w-5"
            />
            <a
              href="https://www.linkedin.com/in/kashyap-rawat-a0869614/"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
          <p className="flex justify-evenly bg-white p-3 my-3 rounded-lg mx-3 w-full">
            <img
              src="./images/Footer/facebook.svg"
              alt="Facebook"
              className="h-5 w-5"
            />
            <a
              href="https://www.facebook.com/dreamcatcherzzdesign/?ti=as"
              target="_blank"
            >
              Facebook
            </a>
          </p>
        </div>
        <div className=" lg:p-5 md:p-2 lg:w-1/5 lg:mx-5 md:mx-3 md:w-2/5">
          <p className="p-3 text-white text-center text-xl font-bold">
            Quick Access
          </p>
          <p className="p-3 text-white text-center font-bold ">
            <a href="/">Home</a>
          </p>
          <p className="p-3 text-white text-center font-bold">
            <a href="/about">About</a>
          </p>
          <p className="p-3 text-white text-center font-bold">
            <a href="/services">Services</a>
          </p>
          <p className="p-3 text-white text-center font-bold">
            <a href="/faq">FAQ's</a>
          </p>
          <p className="p-3 text-white text-center font-bold">
            <a href="/contact">Contact Us</a>
          </p>
        </div>
        <div className="p-5 lg:w-1/5 mx-5 md:w-2/5">
          <p className="p-3 text-white text-center font-bold text-xl">
            Services
          </p>
          <p className="p-3 text-white text-center font-bold">Home Interiors</p>
          <p className="p-3 text-white text-center font-bold">Art & Decor</p>
          <p className="p-3 text-white text-center font-bold">
            Store Interior/Exterior
          </p>
          <p className="p-3 text-white text-center font-bold">
            Restorents/Cafe/Qsr's
          </p>
          <p className="p-3 text-white text-center font-bold">
            Vastu & Energy Correction
          </p>
        </div>
        <div className="p-5 lg:w-1/5 h-full flex flex-col justify-evenly items-center mx-5 md:w-2/5">
          <p className="p-3 text-white text-center font-bold text-xl">
            Contact Us
          </p>

          <p className="flex justify-evenly bg-white p-5 rounded-lg m-3">
            <img
              src="./images/Footer/email.png"
              alt="email"
              className="h-5 w-5 mx-3"
            />
            <span>dreamcatcherzzdesign@gmail.com</span>
          </p>
          <p className="flex justify-center bg-white p-2 rounded-lg m-3">
            <img
              src="./images/Footer/whatsapp.svg"
              alt="WhatsApp"
              className="h-7 w-7"
            />
            <span>+91-9892144019</span>
          </p>
          <p className="p-3 text-white text-center font-bold">
            Malad (West), Mumbai. 400067
          </p>
        </div>
        <hr className="border-2 border-white w-full" />
        <p className="text-white text-center w-full font-bold text-2xl my-3">
          Made by :- TrignoOs Group
        </p>
      </div>
    </>
  );
};
export default Footer;
