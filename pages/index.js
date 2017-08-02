import Link from 'next/link';
import React from 'react';

// @components is an alias. see babelrc for module resolutions
import Header from '@components/Header';
import ImgSlider from '@components/Slider';
import HomePageBody from '@components/HomePageBody';
import Footer from '@components/Footer';

export default () => (
  <div>
    <div className="img-container">

      <div>
        <Header />
      </div>
      <div>
        <ImgSlider />
      </div>
      <div>
        <HomePageBody />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
);
