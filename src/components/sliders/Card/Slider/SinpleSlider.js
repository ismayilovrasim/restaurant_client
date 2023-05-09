import React from 'react';
import Slider from "react-slick";

const Carousel = ({ className, children }) => {

    var settingsMain = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2350,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2300,

        autoplay: true,
        fade: true,
    };

    return (
        <div className="w-100">
            <Slider {...settingsMain} className={`w-100 head-slider slick-dots-style ${className ? className : ''}`}>{children}</Slider>
        </div>
    )
}

export default Carousel;