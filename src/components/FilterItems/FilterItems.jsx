import style from "./FilterItems.module.css";
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function FilterItems() {
  return (
    <section className={style.filter_items_main}>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className={style.container_items}
      >
        <SwiperSlide className={style.text_wrapper}>Slide 1</SwiperSlide>
        <SwiperSlide className={style.text_wrapper}>Slide 1</SwiperSlide>
        <SwiperSlide className={style.text_wrapper}>Slide 1</SwiperSlide>
        <SwiperSlide className={style.text_wrapper}>Slide 1</SwiperSlide>
        <SwiperSlide className={style.text_wrapper}>Slide 1</SwiperSlide>
        <SwiperSlide className={style.text_wrapper}>Slide 1</SwiperSlide>
        <SwiperSlide className={style.text_wrapper}>Slide 1</SwiperSlide>
        <SwiperSlide className={style.text_wrapper}>Slide 1</SwiperSlide>
      </Swiper>
    </section>
  );
}

export default FilterItems;
