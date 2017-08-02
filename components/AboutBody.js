import Link from 'next/link';
import React from 'react';

const AboutBody = () => (
  <div className="about-container">
    <div className="about-text">
      <h2 className="about-title" >Dr. Kyle Stull</h2>

      <p className="about-paragraph">
        Dr. Kyle graduated from Palmer College of Chiropractic with honors  in
        February of 2005 and immediately opened Kalamazoo Valley Chiropractic to
        begin teaching and serving the community with true health principles.
        Dr. Kyle’s goal as a chiropractor is to educate people how the body functions
        so that wise decisions can be made for their health as well as the health
        of their families.
      </p>
      <p className="about-paragraph">
        Outside the office Dr. Kyle loves spending every second that he can with
        his beautiful wife Katie and their amazing twins Wyatt and Ella.  As a
        family, they have chosen to live the chiropractic wellness lifestyle and
        place their personal health as a top priority, and are always certain to
        get their weekly chiropractic check- ups.
      </p>
    </div>
    <div className="about-img">
      <img className="office-img" src="../static/family.jpg" />
    </div>

    <div className="about-img-reverse">
      <img className="office-img" src="../static/people1.jpg" />
    </div>
    <div className="about-text">
      <h2 className="about-title" >Our Office</h2>
      <p className="about-paragraph">
          Our office focuses on the important relationship between the spine and the
          nervous system.  One of the most basic ideas in chiropractic is that dysfunction
          in the spine, called vertebral subluxation, can lead to dysfunction within
          the nervous system-and since the nervous system controls and coordinates
          all the systems of the body, vertebral subluxations can have a wide ranging
          effect on the body’s health.
        </p>
      <p className="about-paragraph">
          To check for Vertebral Subluxation our office utilizes a computerized test
          or scan consisting of thermal and surface electromyography (SEMG), X-ray or
          spinographs as well as static and motion palpation of the spine.
        </p>
    </div>
    <div className="about-img">
      <img className="office-img" src="../static/Office3.jpg" />
    </div>

    <div className="about-img-reverse">
      <img className="office-img" src="../static/Office.jpg" />
    </div>
    <div className="about-text">
      <h2 className="about-title" >Benefits of Chiropractic</h2>
      <p className="about-paragraph">
          In our current health care system most people wait until they have symptoms
          before they go to a doctor.  The problem is, once symptoms occur the disease
          or sickness has been in the body for some time.  It stands to reason that
          symptoms are a very poor way to measure health.
        </p>
      <p className="about-paragraph">
          Health is really about one thing-function.  How well you are functioning
          determines how truly well you are and your nerve system controls function.
          This is where chiropractic is different.   Our unique contribution is that
          we look beyond the symptom and search for the original cause:  lack of life!
          Daily stress can cause the bones that protect your nerve system to misalign
          putting pressure and stress on these nerves, interfering with the body’s
          normal ability to function.  Chiropractic adjustments work to restore function
          and health to the spine and nerve system allowing for more life.  This is
          why so many different states of health and people of all ages have been
          helped through chiropractic care.
        </p>
    </div>
    <div className="about-img-final">
      <h3 className="about-title" >Before</h3>
      <img className="office-img" src="../static/xray-spine.jpg" />
    </div>
    <div className="about-img-reverse">
      <h3 className="about-title" >After</h3>
      <img className="office-img" src="../static/xray-spine2.jpg" />
    </div>
  </div>
);

export default AboutBody;
