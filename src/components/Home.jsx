import React, { useState, useEffect } from "react";
import "../css/home.css";
import YoutubeEmbed from "./youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

import "swiper/components/navigation/navigation.min.css"; // Navigation module
import "swiper/components/pagination/pagination.min.css"; // Pagination module
import Modal, { submitted } from "./Modal";
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!submitted) {
      setTimeout(() => {
        setIsOpen(true);
      }, 10000);
    }
  }, []);
  return (
    <div className="h-screen" id="container">
      <Swiper
        slidesPerView={1}
        centeredSlides
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper1"
      >
        <SwiperSlide className="mySwiperSlide1">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="random" />
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide1">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="random" />
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide1">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="random" />
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide1">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="random" />
        </SwiperSlide>
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
      <div>
        <button onClick={() => setIsOpen(true)}>Open modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </div>
    </div>
  );
}

export default Home;
