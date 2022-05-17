import { NavLink, Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="flex p-3 justify-evenly w-full flex-wrap bg-red-500 ">
        <div className="lg:p-5 md:p-2 flex flex-col justify-evenly items-center text-red-500  lg:w-1/5 lg:mx-1 md:mx-3 md:w-2/5 ">
          <p className="text-white font-bold text-xl text-center w-full p-3">
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
              rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
        <div className=" lg:p-5 md:p-2 lg:w-1/5 lg:mx-2 md:mx-3 md:w-2/5">
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
        <div className="p-5 lg:w-1/5 mx-4 md:w-2/5">
          <p className="p-3 text-white text-center font-bold text-xl">
            Services
          </p>
          <p className="p-3 text-white text-center font-bold">
            <a href="/services#interior">Home Interior Design</a>
          </p>
          <p className="p-3 text-white text-center font-bold">
            <a href="/services#store">Retail Store /Hotel Interior Design</a>
          </p>
          <p className="p-3 text-white text-center font-bold">
            <a href="/services#cafe">Restaurants / Café / QSR / Food Truck</a>
          </p>
          <p className="p-3 text-white text-center font-bold text-xl w-full">
            Additional Services:
          </p>
          <p className="p-3 text-white text-center font-bold">
            <a href="/services#unique">Vaastu & Energy Correction</a>
          </p>
          <p className="p-3 text-white text-center font-bold">Art & Décor</p>
          <p className="p-3 text-white text-center font-bold">
            <a href="/services#unique">Home organising</a>
          </p>
          <p className="p-3 text-white text-center font-bold">
            <a href="/services#unique">Branding</a>
          </p>
        </div>
        <div className="p-5 lg:w-1/5 h-full flex flex-col justify-evenly items-center mx-4 md:w-2/5">
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
          <a
            href="https://wa.me/919892144019"
            className="flex justify-center bg-white p-2 rounded-lg m-3"
          >
            <img
              src="./images/Footer/whatsapp.svg"
              alt="WhatsApp"
              className="h-7 w-7"
            />
            <span>+91-9892144019</span>
          </a>
          <p className="p-3 text-white text-center font-bold">
            Malad (West), Mumbai. 400067
          </p>
        </div>
        <p className="text-white text-center w-full font-bold text-xl my-3 flex justify-center items-center flex-col ">
          <p>Site Developed And Maintained By:-</p>
          <a
            href="https://triocoders.netlify.com"
            target="_blank"
            className="text-center bg-white p-4 rounded-md m-2 text-white developerBtn hover:text-gray-200"
            rel="noreferrer"
          >
            TrioCoders
          </a>
        </p>
      </div>
    </>
  );
};
export default Footer;
