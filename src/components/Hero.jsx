import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"

function Hero() {
  return (
    <div className="hero">
      <h1 className="heroh1">
        YuTunes + YuPods
      </h1>

      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={img1} alt="img1" /></SwiperSlide>
      <SwiperSlide><img src={img3} alt="img3" /></SwiperSlide>
      <SwiperSlide><img src={img3} alt="img3" /></SwiperSlide>
      
      ...
    </Swiper>
    </div>
  );
}

export default Hero;
