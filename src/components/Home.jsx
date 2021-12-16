import React from "react";
import "../css/home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

import "swiper/components/navigation/navigation.min.css"; // Navigation module
import "swiper/components/pagination/pagination.min.css"; // Pagination module
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Home() {
  return (
    <div className="h-screen" id="container">
      <Swiper
        slidesPerView={1}
        centeredSlides
        navigation={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="mySwiperSlide">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="random" />
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="random" />
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="random" />
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="random" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
