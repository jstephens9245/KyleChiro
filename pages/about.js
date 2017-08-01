import Link from 'next/link';
import React from 'react';

// @components is an alias. see babelrc for module resolutions
import Header from '@components/Header';
import ImgSlider from '@components/Slider';
import AboutBody from '@components/AboutBody';
import Footer from '@components/Footer';

export default () => (
  <div >
    <div>
      <Header />
    </div>
    {/* <div>
      <ImgSlider />
    </div> */}
    <div>
      <AboutBody />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);
