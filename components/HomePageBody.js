import Link from 'next/link';
import React from 'react';

const HomeBody = () => (
  <div className="homepage-body-container">
    <div className="homepage-text">
      Our office focuses on the important relationship between the spine and the
      nervous system.  One of the most basic ideas in chiropractic is that dysfunction
      in the spine, called vertebral subluxation, can lead to dysfunction within
      the nervous system-and since the nervous system controls and coordinates
      all the systems of the body, vertebral subluxations can have a wide ranging
      effect on the body’s health.
    </div>
    <div className="homepage-img">
      <img className="office-img" src="../static/Building.png" />
    </div>

    <div className="homepage-img-reverse">
      <img className="office-img" src="../static/scanner3.png" />
    </div>
    <div className="homepage-text">
      Checking for Vertebral Subluxation our office utilizes a computerized test
      or scan consisting of thermal and surface electromyography (SEMG), X-ray or
      spinographs as well as static and motion palpation of the spine.
    </div>
  </div>
);

export default HomeBody;
