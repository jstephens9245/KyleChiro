import Link from 'next/link';
import React from 'react';

const Header = () => (
  <div className="header-container">

    {/* <div className="hamburger-layout">

      <div className="page-header-left">
        <Link href="/">
          <img className="logo-alignment" src="/static/logos/Header_Logo.png" />
        </Link>
      </div>
      <div className="burger-icon">

        <input className="burger-check" id="burger-check" type="checkbox" />
        <label htmlFor="burger-check" className="burger" />
        <nav id="navigation1" className="navigation">
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/"><a>FAQ</a></Link></li>
            <li><Link href="/"><a>About</a></Link></li>
          </ul>
        </nav>

      </div>
    </div> */}

    <div className="fullscreen-layout">

      <div className="page-header" >
        <Link href="/Services">
          <a className="link-style" >Home</a>
        </Link>
        <Link href="/FAQ">
          <a className="link-style" >FAQs</a>
        </Link>
        <Link href="/About">
          <a className="link-style" >About</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
