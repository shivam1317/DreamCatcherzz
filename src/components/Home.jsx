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
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!submitted) {
      setTimeout(() => {
        setIsOpen(true);
      }, 15000);
    }
  }, []);
  return (
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
        className="mySwiper1 p-3"
      >
        {serviceData.map((data, index) => {
          return (
            <SwiperSlide
              className="mySwiperSlide1 flex items-center justify-evenly p-10 bg-gray-100 flex-wrap-reverse"
              key={index}
            >
              <div className="flex justify-items-start items-center flex-col p-5 lg:w-2/5 md:w-full">
                <h2 className="font-bold text-2xl self-start">
                  This is heading
                </h2>
                <p className="text-lg my-1 self-start">{data.description}</p>
                <button className="bg-red-600 text-white hover:bg-white hover:text-red-600 transition-all ease-in-out p-3 hover:border-red-600 border-2 rounded-lg my-2 self-start">
                  <NavLink to="/contact">{data.buttonText}</NavLink>
                </button>
              </div>
              <img
                src={data.src}
                alt="preview"
                className="lg:w-1/2 md:w-full h-full rounded-xl"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex lg:justify-evenly md:justify-center align-center h-fit lg:p-10 md:p-5 w-full flex-wrap">
        <YoutubeEmbed />
        <div className="inline h-auto  lg:my-auto my-10 lg:w-1/3 md:w-full text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga error
          odit et nihil placeat deleniti! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellat tenetur ipsa nesciunt hic cum, nulla iure,
          cupiditate, quo corporis obcaecati ad. Officia, perspiciatis id
          molestiae distinctio maiores perferendis quod alias.
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <h1 className="text-center my-5 text-3xl lg:w-1/2 md:w-full font-bold bg-red-500 text-white p-5 rounded-xl">
          Why Choose Dreamcatcherzz?
        </h1>
      </div>
      <div className="w-full flex justify-evenly items-center flex-wrap">
        {provideData.map((data) => {
          return (
            <div className="flex flex-col lg:w-1/3 md:w-full justify-center items-center lg:mx-5 md:mx-2 my-5 provideDiv p-3 rounded-lg">
              <img src={data.img} alt="provideImg" className="w-4/5 h-60" />
              <p className="text-lg font-bold text-center my-3 p-3 rounded-lg">
                {data.text}
              </p>
            </div>
          );
        })}
      </div>
      {/* <div>
        <button onClick={() => setIsOpen(true)}>Open modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </div> */}
      <div className="flex items-center justify-between my-5  font-bold bg-red-500 text-white p-5">
        <h1 className="text-3xl">Our Services </h1>
        <button className=" lg:inline-flex lg:w-auto rounded-2xl text-white font-bold ml-5 bg-transparent border-2 hover:border-white hover:bg-white hover:text-red-500 transition-all duration-500 md:text-center p-3">
          <NavLink to="/services">Show All Services</NavLink>
        </button>
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
        className=" w-full my-10"
        loopFillGroupWithBlank={false}
      >
        {serviceData.map((service, index) => {
          return (
            <SwiperSlide
              className="my-3 p-3 items-center justify-between rounded-lg flex flex-col shadow-slate-300 shadow-xl"
              key={index}
            >
              <img src={service.src} alt="Cafe" className="w-full rounded-lg" />
              <p className="my-3">{service.description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-500 text-white hover:bg-white hover:text-red-500 transition-all ease-in-out p-3 text-xl hover:border-red-500 border-2 rounded-lg my-5 font-bold"
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
              <div className="text-center bg-blue-500 text-white w-full p-3 italic text-md rounded-t-xl ">
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
              <p className=" mb-3 text-right italic font-bold bg-gray-100 rounded-b-xl text-xl p-5 w-full">
                {magazine.mname}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
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
        className=" w-full my-5"
        loopFillGroupWithBlank={false}
      >
        {customerData.map((customer, index) => {
          return (
            <SwiperSlide
              className="flex justify-evenly items-center p-5 my-3 bg-gray-200 flex-wrap-reverse"
              key={index}
            >
              <div className="flex review-card flex-col justify-evenly p-4 lg:w-1/3 md:w-full rounded-lg bg-white">
                <div className="flex justify-evenly items-center px-4 py-3 bg-red-500 w-full rounded-lg my-3">
                  <img
                    src={customer.pfpSrc}
                    alt="customer"
                    className="h-12 w-12 rounded-full"
                  />
                  <p className="font-bold text-lg text-white text-center">
                    {customer.cname}
                  </p>
                </div>
                <p className="text-center my-3">{customer.review}</p>
                <button className="bg-red-500 text-white hover:bg-white border-2 hover:border-red-500 hover:text-red-500 rounded-lg transition-all ease-in-out w-1/2 self-center p-2 font-bold my-3">
                  {/* Add customer review playlist here... */}
                  <a
                    href="https://youtube.com/playlist?list=PL0dEcKCNDuvx1bkv73gXHYxBV13nAyImC"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Watch video
                  </a>
                </button>
              </div>
              <div className="lg:w-1/3 md:w-full lg:inline md:hidden">
                <img
                  src="./images/Customers/review_svg.svg"
                  alt="svg"
                  className="h-fit"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Footer />
    </div>
  );
}

export default Home;
