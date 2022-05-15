import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

import "swiper/components/navigation/navigation.min.css"; // Navigation module
import "swiper/components/pagination/pagination.min.css"; // Pagination module
import { cafeData } from "./cafeData";
import "../data.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Cafe = () => {
  return (
    <>
      <div className="my-8 w-full" id="cafe">
        <h1 className="text-center my-5 text-3xl font-bold bg-red-500 text-white p-3 ">
          Cafe Restaurants QSR
        </h1>
        <Swiper
          slidesPerView={window.innerWidth <= 768 ? 1 : 3}
          spaceBetween={10}
          navigation={true}
          pagination={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper w-full my-5"
          loopFillGroupWithBlank={false}
        >
          {cafeData.map((data, index) => {
            return (
              <SwiperSlide
                className="mySwiperSlide p-2 items-center justify-between rounded-lg flex flex-col shadow-slate-300 shadow-lg"
                key={index}
              >
                <img src={data.src} alt="Cafe" className="w-full rounded-lg" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
export default Cafe;
