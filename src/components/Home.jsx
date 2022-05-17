import React, { useState, useEffect } from "react";
import "../css/home.css";
import YoutubeEmbed from "./youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import { NavLink, Link } from "react-router-dom";
import "swiper/components/navigation/navigation.min.css"; // Navigation module
import "swiper/components/pagination/pagination.min.css"; // Pagination module
import Modal, { submitted } from "./Modal";
import { serviceData } from "./HomeData/servicesData";
import { magazineData } from "./HomeData/magazineData";
import { customerData } from "./HomeData/customerData";
import "../css/preview.css";
import Footer from "./Footer";
import "../css/magazine.css";
import provideData from "./HomeData/provideData";
import projectData from "./HomeData/projectData";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const services = [
  {
    heading: "Home Interior Design",
    id: "interior",
    src: "./images/Services/interior.svg",
    description: "Click Here!",
  },
  {
    heading: "Retail store/ Hotel Interior Design",
    id: "cafe",
    src: "./images/Services/cafe.svg",
    description: "Click Here!",
  },
  {
    heading: "Restaurants/ Café/ QSR/ Food Truck",
    id: "store",
    src: "./images/Services/store.svg",
    description: "Click Here!",
  },
];

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!submitted) {
      setTimeout(() => {
        setIsOpen(true);
      }, 25000);
    }
  }, []);
  return (
    <>
      <meta name="title" content="Dreamcatcherzz Home" />
      <meta
        name="description"
        content="This is the home page of DreamCatcherzz website"
      />
      <meta
        name="keywords"
        content="DreamCatehrzz , dreamcatchers, designers, indian designers, best interior designs, dream home, home designs, modular designs"
      />

      <div className="h-screen" id="container">
        <Swiper
          slidesPerView={1}
          centeredSlides
          navigation={false}
          pagination={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="mySwiper1"
        >
          {serviceData.map((data, index) => {
            return (
              <SwiperSlide
                className="mySwiperSlide1 flex items-center justify-evenly lg:p-10 md:p-0 bg-gray-100 flex-wrap-reverse"
                key={index}
              >
                <div className="flex justify-items-start items-center flex-col p-5 lg:w-2/5 md:w-full">
                  <h2 className="font-bold text-2xl self-start">
                    {data.heading}
                  </h2>
                  <p className="text-lg my-1 self-start">{data.description}</p>
                  {data.link ? (
                    <button className="bg-red-600 text-white hover:bg-white hover:text-red-600 transition-all ease-in-out p-3 hover:border-red-600 border-2 rounded-lg my-2 self-start">
                      <NavLink to="/about">{data.buttonText}</NavLink>
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsOpen(true)}
                      className="bg-red-600 text-white hover:bg-white hover:text-red-600 transition-all ease-in-out p-3 hover:border-red-600 border-2 rounded-lg my-2 self-start"
                    >
                      <p>{data.buttonText}</p>
                    </button>
                  )}
                </div>
                <img
                  src={data.src}
                  alt="preview"
                  className="lg:w-1/2 md:w-full h-full"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex lg:justify-evenly md:justify-center align-center h-fit lg:p-10 md:p-5 w-full flex-wrap">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-center my-3 text-3xl w-full font-bold bg-red-500 text-white p-5">
              Our Happy Clients and Project Videos
            </h1>
          </div>
          <YoutubeEmbed />
        </div>
        <div className="w-full flex justify-center items-center">
          <h1 className="text-center my-3 text-3xl lg:w-1/2 md:w-full font-bold bg-red-500 text-white p-5 lg:rounded-md md:rounded-none">
            Why Choose Dreamcatcherzz?
          </h1>
        </div>
        <div className="w-full flex justify-evenly items-center flex-wrap">
          {provideData.map((data) => {
            return (
              <div className="flex flex-col w-2/5 lg:w-1/3 justify-center items-center lg:mx-5 mx-1 my-2 lg:my-5 provideDiv p-3 rounded-lg">
                <img
                  src={data.img}
                  alt="provideImg"
                  className="w-4/5 lg:h-60 h-20"
                />
                <p className="lg:text-lg text-sm font-bold text-center my-3 p-3 rounded-lg">
                  {data.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-center items-center lg:my-5 my-1">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-red-500 text-white hover:bg-white hover:text-red-500 transition-all ease-in-out p-3 text-xl hover:border-red-500 border-2 rounded-lg my-5 font-bold"
          >
            Contact Us
          </button>
        </div>
        <div className="flex items-center justify-center lg:my-5 my-2 font-bold bg-red-500 text-white p-5">
          <h1 className="text-3xl">Our Services </h1>
        </div>
        <div className="my-3">
          <h1 className="font-bold text-center text-2xl">What We Provide!</h1>
        </div>
        <div className="w-full flex flex-wrap justify-evenly">
          {services.map((service) => {
            return (
              <a
                className="lg:w-1/4 flex justify-center items-center mx-5 lg:my-4 my-1 md:w-2/5 sm:w-full  p-1 rounded-xl serviceDiv"
                href={`/services#${service.id}`}
              >
                <img
                  src={service.src}
                  alt="service"
                  className="lg:w-3/5 w-2/5 mr-2"
                  description="Service icon "
                />
                <div className="flex flex-col justify-around">
                  <h3 className="text-lg font-bold">{service.heading}</h3>
                  <span className="text-sm">{service.description}</span>
                </div>
              </a>
            );
          })}
        </div>
        <div className="my-3">
          <h1 className="font-bold text-center text-2xl">Our Projects</h1>
        </div>
        <Swiper
          slidesPerView={window.innerWidth <= 768 ? 1 : 3}
          spaceBetween={10}
          navigation={false}
          pagination={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className=" w-full my-3"
          loopFillGroupWithBlank={false}
        >
          {projectData.map((project, index) => {
            return (
              <SwiperSlide
                className="my-3 p-3 items-center justify-between rounded-lg flex flex-col shadow-slate-300 shadow-xl"
                key={index}
              >
                <img
                  src={project.src}
                  alt="Cafe"
                  className="w-full rounded-lg"
                />
                <p className="my-3">{project.description}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex justify-center items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-red-500 text-white hover:bg-white hover:text-red-500 transition-all ease-in-out p-3 text-xl hover:border-red-500 border-2 rounded-lg my-3 font-bold"
          >
            Contact the designers
          </button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
        </div>
        <div className="flex items-center my-5 justify-center font-bold bg-red-500 text-white p-5">
          <h1 className="text-3xl text-center"> Achievements </h1>
        </div>
        <Swiper
          slidesPerView={window.innerWidth <= 768 ? 1 : 3}
          spaceBetween={10}
          navigation={false}
          pagination={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className=" w-full my-5"
          loopFillGroupWithBlank={false}
        >
          {magazineData.map((magazine, index) => {
            return (
              <SwiperSlide
                className="p-3 my-3 rounded-lg flex flex-col shadow-slate-300 shadow-xl"
                key={index}
              >
                <p className=" mb-3 text-left italic font-bold bg-gray-100 rounded-b-xl text-xl p-5 w-full">
                  {magazine.mname}
                </p>
                <div className="text-center  w-full p-3 italic text-md rounded-t-xl ">
                  <img
                    src="./images/left-quote.png"
                    alt="left-quote"
                    className="block h-8 w-8"
                  />
                  <p className="quote p-3">{magazine.tagline}</p>
                  <img
                    src="./images/right-quote.png"
                    alt="left-quote"
                    className="h-8 w-8 ml-auto"
                  />
                </div>
                <a
                  href={magazine.link}
                  target="_blank"
                  className="text-center self-center bg-red-600 text-white hover:bg-red-500 p-3 rounded-lg"
                  rel="noreferrer"
                >
                  Read More
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex justify-center items-center w-full ">
          <a
            href="https://wa.me/919892144019"
            target="_blank"
            className="bg-red-500 text-white hover:bg-white hover:text-red-500 transition-all ease-in-out p-3 text-xl hover:border-red-500 border-2 rounded-lg my-3 font-bold flex justify-center items-center"
            rel="noreferrer"
          >
            <img
              src="./images/Footer/whatsapp.svg"
              alt="WhatsApp"
              className="h-7 w-7 mx-2"
            />
            <span>Give Us A Call</span>
          </a>
        </div>
        <div className="flex items-center my-5 justify-center font-bold bg-red-500 text-white p-5">
          <h1 className="text-3xl text-center"> Customer review </h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={false}
          pagination={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className=" w-full my-5 bg-gray-200 "
          loopFillGroupWithBlank={false}
        >
          {customerData.map((customer, index) => {
            return (
              <SwiperSlide
                className="flex justify-evenly items-center p-5 my-3 bg-gray-200 flex-wrap-reverse"
                key={index}
              >
                <div className="flex review-card flex-col justify-evenly p-3 lg:w-1/2 w-full rounded-lg bg-white">
                  <div className="flex justify-evenly items-center px-4 py-3 bg-red-500 w-full rounded-lg my-3">
                    <img
                      src={customer.pfpSrc}
                      alt="customer"
                      className="h-32 w-32"
                    />
                    <p className="font-bold text-lg text-white text-center">
                      {customer.cname}
                    </p>
                  </div>
                  <p className="text-center my-3">{customer.review}</p>
                  <button className="bg-red-500 text-white hover:bg-white border-2 hover:border-red-500 hover:text-red-500 rounded-lg transition-all ease-in-out w-1/2 self-center p-2 font-bold my-3">
                    {/* Add customer review playlist here... */}
                    <a href={customer.link} target="_blank" rel="noreferrer">
                      Watch Review
                    </a>
                  </button>
                </div>
                <div className="lg:w-1/3 md:w-full lg:inline md:hidden">
                  <img
                    src="./images/Customers/review_svg.png"
                    alt="svg"
                    className="h-full w-full"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Footer />
      </div>
    </>
  );
}

export default Home;
