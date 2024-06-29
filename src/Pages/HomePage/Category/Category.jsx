import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "../Category/Caregory.css";

// Swiper CSS file
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Swiper Image
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center">

        <div className="section_heading_one">
          <p>
            <i>---From 11:00am to 10:00pm---</i>
          </p>
        </div>

        <div className="section_heading_two">
          <span>ORDER ONLINE</span>
        </div>

      </div>

      <div className="slider_img_name pl-28">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h1>SALAD</h1>
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide2} alt="" />
            <h1>PIZZAS</h1>
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide3} alt="" />
            <h1>SOUPS</h1>
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide4} alt="" />
            <h1>DESSERTS</h1>
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide5} alt="" />
            <h1>SALAD</h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
