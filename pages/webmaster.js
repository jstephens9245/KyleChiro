import Link from 'next/link';
import React from 'react';

// @components is an alias. see babelrc for module resolutions
import Header from '@components/Header';
import JoeStephens from '@components/JoeStephens';
import Footer from '@components/Footer';

export default () => (
  <div >
    <div>
      <Header />
    </div>
    <div>
      <JoeStephens />
    </div>
  </div>
);
