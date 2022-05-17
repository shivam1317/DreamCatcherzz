import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import "swiper/components/navigation/navigation.min.css"; // Navigation module
import "swiper/components/pagination/pagination.min.css"; // Pagination module
import { interiorData } from "./interiorData";
import "../data.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Interior = () => {
  return (
    <>
      <div className="my-5 w-full" id="interior">
        <h1 className="text-center my-3 text-3xl font-bold bg-red-500 text-white p-5 ">
          Home Interior Design
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
          className="mySwiper w-full my-3"
          loopFillGroupWithBlank={false}
        >
          {interiorData.map((data, index) => {
            return (
              <SwiperSlide
                className="mySwiperSlide p-2 items-center justify-between rounded-lg flex flex-col shadow-slate-300 shadow-lg"
                key={index}
              >
                <img
                  src={data.src}
                  alt="Interior"
                  className="w-full rounded-lg"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex justify-center items-center w-full">
          <h1 className="text-lg font-bold mt-3 mb-8">Home Interior Designs</h1>
        </div>
      </div>
    </>
  );
};
export default Interior;
