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
        <Link href="/">
          {/* <a className="link-style" >Home</a> */}
          <img className="logo" src="../static/KVChiroLogo.jpg" />
        </Link>
        <p className="mission-statement" >
          "To Educate and Inspire members of our practice and community
          with concepts of Chiropractic, Health, and Lifetime Family Wellness."
        </p>
        <Link href="/about">
          <a className="link-style" >About</a>
        </Link>
        <Link href="https://www.google.com/maps/place/Kalamazoo+Valley+Chiropractic/@42.2006033,-85.6832984,19z/data=!4m5!3m4!1s0x0:0x468c705686f9387c!8m2!3d42.2007623!4d-85.6830248">
          <a target="_blank" className="link-style" >Find Us</a>
        </Link>
        <Link href="/">
          <a className="link-style" >Home</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
