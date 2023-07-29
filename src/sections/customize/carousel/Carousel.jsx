import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Carousel.module.sass';
import 'swiper/css';

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={3}
      breakpoints={{
        // when window width is >= 620px
        580: {
          spaceBetween: 8,
        },
        430: {
          slidesPerView: 3,
        },
        330: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        // when window width is >= 0px
      }}>
      <SwiperSlide>
        <div className={style.image__wrap}>
          <div className={`${style.image} ${style.image_one}`}></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.image__wrap}>
          <div className={`${style.image} ${style.image_two}`}></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.image__wrap}>
          <div className={`${style.image} ${style.image_three}`}></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.image__wrap}>
          <div className={`${style.image} ${style.image_four}`}></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Carousel;
