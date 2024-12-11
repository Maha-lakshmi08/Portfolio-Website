import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/Portfolio Images 1.png';
import Portfolio2 from '../../assets/Portfolio images 2.png';
import Portfolio3 from '../../assets/Portfolio Images 3.png';
import Portfolio4 from '../../assets/Portfolio Images 4.png';
import Portfolio5 from '../../assets/Portfolio Images 5.png';
import Portfolio6 from '../../assets/Portfolio images 2.png';
import { Link } from 'react-scroll';


const Works = () => {
  return (
    <section id='works'>
          <span className="worksTitle"> My Portfolio</span>
          <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.  I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence. </span>
          <div className="worksImgs">
             <img src={Portfolio1} alt="" className="worksImg" />
             <img src={Portfolio2} alt="" className="worksImg" />
             <img src={Portfolio3} alt="" className="worksImg" />
             <img src={Portfolio4} alt="" className="worksImg" />
             <img src={Portfolio5} alt="" className="worksImg" />
             <img src={Portfolio6} alt="" className="worksImg" />
          </div>
          <Link to="download-section">
                    <button className="btn">See More</button>
                </Link>
    </section>
  )
}

export default Works;






