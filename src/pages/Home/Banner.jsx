import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../src/bannerStyles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import slide1 from "../../assets/images/banner/slide1.jpg";
import slide2 from "../../assets/images/banner/slide2.jpg";
import slide3 from "../../assets/images/banner/slide3.jpg";
import slide4 from "../../assets/images/banner/slide4.jpg";
import slide5 from "../../assets/images/banner/slide5.jpg";
import slide6 from "../../assets/images/banner/slide6.jpg";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoPlayTime = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="mb-10 mt-10 h-96 hight">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoPlayTime={onAutoPlayTime}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
        </SwiperSlide>

        <div
          className="autoplay-progress autoplay-progress svg"
          slot="container-end"
        >
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
