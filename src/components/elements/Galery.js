import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../../assets/img/Image'


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';


const Galery = () => {
    return (
            <div className="container">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <img src={Image.SliderFood1} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Image.SliderFood2} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Image.SliderFood3} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Image.SliderFood4} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Image.SliderFood5} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Image.SliderFood6} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Image.SliderFood7} alt="slide_image" />
                    </SwiperSlide>

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        );
    }


export default Galery;