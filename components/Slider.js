import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

const settings = {
  // dots: true,
  // centerMode: true,
  infinite: true,
  speed: 2000,
  autoplaySpeed: 7000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  // arrows: true,
};

// let ImgSliding = null
// async function Sliders() {
//   ImgSliding = await (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div className="slide">
//           {console.log(<img className="slide-tile" src="../static/gibson.jpg" />)}
//           <img className="slide-tile" src="../static/gibson.jpg" />
//           <img className="slide-tile" src="../static/killian.jpg" />
//           <img className="slide-tile" src="../static/killian2.jpg" />
//         </div>
//         <div className="slide">
//           <img className="slide-tile2" src="../static/Office1.JPG" />
//           <img className="slide-tile2" src="../static/Office2.JPG" />
//         </div>
//         <div className="slide">
//           <img className="slide-tile2" src="../static/people1.JPG" />
//           <img className="slide-tile2" src="../static/people2.JPG" />
//         </div>
//
//       </Slider>
//     </div>
//   );
//   console.log(ImgSliding);
//
//   return ImgSliding
// }
// Sliders();
// export default class extends React.Component {
//   render () {
//     return <div>
//       {ImgSliding === null ? null : ImgSliding }
//     </div>
//   }
// }

const ImgSlider = () => (
  <div className="slider-container">
    <Slider {...settings}>
      <div className="slide">
        <img className="slide-tile" src="../static/gibson.jpg" />
        <img className="slide-tile" src="../static/killian.jpg" />
        <img className="slide-tile" src="../static/killian2.jpg" />
      </div>
      <div className="slide">
        <img className="slide-tile2" src="../static/Office1.JPG" />
        <img className="slide-tile2" src="../static/Office2.JPG" />
      </div>
      <div className="slide">
        <img className="slide-tile2" src="../static/people1.JPG" />
        <img className="slide-tile2" src="../static/people2.JPG" />
      </div>

    </Slider>
  </div>
);

export default ImgSlider;
