import Link from 'next/link';
import React from 'react';

const Footer = () => (
  <div className="footer-container">
    <Link href="/FAQ">
      <a className="footer-text" >Web Master</a>
    </Link>
    <p className="footer-email">Contact Us at Kvchiro_dc@yahoo.com</p>
  </div>
);

export default Footer;
