import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

const settings = {
  // dots: true,
  // centerMode: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  arrows: true,
};

const ImgSlider = () => (
  <div className="slider-container">
    <Slider {...settings}>
      <div className="slide"><h3>1</h3></div>
      <div className="slide"><h3>2</h3></div>
      <div className="slide"><h3>3</h3></div>
      <div className="slide"><h3>4</h3></div>
      <div className="slide"><h3>5</h3></div>
      <div className="slide"><h3>6</h3></div>
    </Slider>
  </div>
);

export default ImgSlider;
