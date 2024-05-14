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
    <div className="mb-10  h-96 hight ">
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
        <SwiperSlide
          className="bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${slide1})`,
            backgroundPosition: "center ",
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <p className="text-xl lg:text-2xl font-bold text-white p-6 drop-shadow-lg  w-2/3 bg-cyan-900 bg-opacity-60">
            Discover elegance and sophistication in our Presidential Suite,
            featuring opulent furnishings, exclusive amenities, and personalized
            service for an unforgettable stay.
          </p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${slide2})`,
            backgroundPosition: "center ",
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <p className="text-xl lg:text-2xl font-bold text-white p-6 drop-shadow-lg w-2/3 bg-cyan-900 bg-opacity-60">
            Indulge in luxury with our Executive Suite, offering breathtaking
            sea views, a spacious living area, and a private balcony for your
            ultimate relaxation.
          </p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${slide3})`,
            backgroundPosition: "center ",
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <p className="text-xl lg:text-2xl font-bold text-white p-6 drop-shadow-lg w-2/3 bg-cyan-900 bg-opacity-60">
            Experience comfort and convenience in our Standard Double Room,
            featuring a cozy atmosphere, modern amenities, and a tranquil
            ambiance for a perfect getaway.
          </p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${slide4})`,
            backgroundPosition: "center ",
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <p className="text-xl lg:text-2xl font-bold text-white p-6 drop-shadow-lg w-2/3 bg-cyan-900 bg-opacity-60">
            Escape to serenity in our Deluxe Single Room with City View,
            boasting stylish décor, a comfortable queen bed, and panoramic views
            of the bustling city skyline.
          </p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${slide5})`,
            backgroundPosition: "center ",
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <p className="text-xl lg:text-2xl font-bold text-white p-6 drop-shadow-lg w-2/3 bg-cyan-900 bg-opacity-60">
            Treat your family to a memorable stay in our Family Suite with
            Garden View, complete with spacious accommodations, a private
            terrace, and easy access to lush greenery.
          </p>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${slide6})`,
            backgroundPosition: "center ",
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <p className="text-xl lg:text-2xl font-bold text-white p-6 drop-shadow-lg w-2/3 bg-cyan-900 bg-opacity-60">
            Unwind in style in our Luxury Penthouse with Private Pool, offering
            unparalleled luxury with a king-size bed, a private pool, and
            breathtaking panoramic views.
          </p>
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
