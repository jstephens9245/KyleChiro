import Link from 'next/link';
import React from 'react';

const Footer = () => (
  <div className="footerimg-container">
    <div className="footer-container">
      <Link href="/webmaster">
        <a className="footer-text" >Web Master</a>
      </Link>
      <p className="footer-email">Contact Us at Kvchiro_dc@yahoo.com</p>
    </div>
  </div>
);

export default Footer;
