import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

import "swiper/components/navigation/navigation.min.css"; // Navigation module
import "swiper/components/pagination/pagination.min.css"; // Pagination module
import { storeData } from "./storeData";
import "../data.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Store = () => {
  return (
    <>
      <div className="mt-20 w-full mb-5" id="Store">
        <h1 className="text-center my-5 text-3xl font-bold bg-red-500 text-white p-5 ">
          Retail Stores
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
          className="mySwiper w-full mt-10"
          loopFillGroupWithBlank={false}
        >
          {storeData.map((data, index) => {
            return (
              <SwiperSlide
                className="mySwiperSlide p-3 items-center justify-between rounded-lg flex flex-col shadow-slate-300 shadow-lg"
                key={index}
              >
                <img
                  src={data.src}
                  alt="Office"
                  className="w-full rounded-lg"
                />
                <p className="my-3">{data.description}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
export default Store;
