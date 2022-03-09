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
import "../css/preview.css";

import "../css/magazine.css";
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
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper1 p-3"
      >
        {serviceData.map((data) => {
          return (
            <SwiperSlide className="mySwiperSlide1 flex items-center justify-evenly p-10 bg-gray-100 flex-wrap-reverse">
              <div className="flex justify-items-start items-center flex-col p-5 lg:w-2/5 md:w-full">
                <h2 className="font-bold text-2xl self-start">
                  This is heading
                </h2>
                <p className="text-lg my-1 self-start">{data.description}</p>
                <button className="bg-red-600 text-white hover:bg-white hover:text-red-600 transition-all ease-in-out p-3 hover:border-red-600 border-2 rounded-lg my-2 self-start">
                  {data.buttonText}
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
      <div className="flex lg:justify-evenly md:justify-between align-center h-fit  p-10 w-full flex-wrap">
        <YoutubeEmbed />
        <div className="inline h-auto  lg:my-auto my-10 lg:w-1/3 md:w-full text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga error
          odit et nihil placeat deleniti! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellat tenetur ipsa nesciunt hic cum, nulla iure,
          cupiditate, quo corporis obcaecati ad. Officia, perspiciatis id
          molestiae distinctio maiores perferendis quod alias.
        </div>
      </div>
      {/* <div>
        <button onClick={() => setIsOpen(true)}>Open modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </div> */}
      <div className="flex items-center justify-between my-5  font-bold bg-red-500 text-white p-5">
        <h1 className="text-3xl">Our Services </h1>
        <button className=" lg:inline-flex lg:w-auto rounded-2xl text-white font-bold ml-5 bg-transparent border-2 hover:border-white hover:bg-white hover:text-red-500 transition-all duration-500">
          <NavLink to="/services" className="p-4 ">
            {" "}
            Show All Services{" "}
          </NavLink>
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
        {serviceData.map((service) => {
          return (
            <SwiperSlide className="my-3 p-3 items-center justify-between rounded-lg flex flex-col shadow-slate-300 shadow-xl">
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
        {magazineData.map((magazine) => {
          return (
            <SwiperSlide className=" p-3 my-3 rounded-lg flex flex-col shadow-slate-300 shadow-xl">
              <p className=" quote mt-3 text-center bg-blue-500 text-white w-full p-5 italic text-md rounded-t-xl ">
                "{magazine.tagline}"
              </p>
              <p className=" mb-3 text-right italic font-bold bg-gray-100 rounded-b-xl text-xl p-5 w-full">
                {magazine.mname}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Home;
