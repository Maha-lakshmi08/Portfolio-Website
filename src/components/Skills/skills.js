import React from'react';
import './skills.css';
import UIDesign from '../../assets/UI Design Logo.png';
import WebDesign from '../../assets/website design logo.png';
import AppDesign from '../../assets/App Design Logo.png';

const Skills =() => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc"> I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.  I have a strong understanding of design and a keen eye for detail.  I am proficient in HTML,CSS and Javascript as well as design software such as Adobe Photoshop and illustrator.</span>
        <div className="skillBars">
          <div className="skillBar">
              <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
              <div className="skillBarText">
                  <h2>UI/UX Design</h2>
                  <p>I design intuitive user interfaces and experiences that prioritize user needs.  My goal is to create products that are not only visually appealing but also easy to navigate</p>
              </div>
          </div>
          <div className="skillBar">
              <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
              <div className="skillBarText">
                  <h2>Website Design</h2>
                  <p>I built modern, responsive websites that are visuallys tunning and functionally robust.  Whether you need a fresh design or a complete overhaul,  II ensure that each website meets the latest standards and trends.</p>
              </div>
          </div>
          <div className="skillBar">
              <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
              <div className="skillBarText">
                  <h2>App Design</h2>
                  <p>I specialize in designing user-friendly and visually appealing mobile applications.  My focus is on creating seamless, intuitive experiences that cater to the needs of users across different devices and platforms.</p>
              </div>
          </div>
        </div>
          

    </section>
  )
}


export default Skills;