import React from 'react'; 
import './intro.css';
import bg from '../../assets/profile.png';
import { Link } from 'react-scroll';
import twitter from '../../assets/Twitter logo.png';
import LinkedIn from '../../assets/Linked In.png';
import github from '../../assets/github.png';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello It's Me</span>
                <span className="introtext">Jeeva</span>
                <span className="introName">And I'm a UI/UX Designer</span>
                <p className="introPara">
                    I am a skilled and passionate web designer with <br/> experience in creating visually appealing and user-friendly websites.  </p>

                <div className="socialmedialogos">
                 <a href="https://twitter.com/" target="_blank">
                   <img src={twitter} alt="twitter" className="socialmedialogo" /> 
                 </a>
                 <a href="https://linkedin.com/" target="_blank">
                   <img src={LinkedIn} alt="LinkedIn" className="socialmedialogo" />
                   </a>
                   <a href="https://github.com/" target="_blank">
                   <img src={github} alt="github" className="socialmedialogo" />
                   </a>

                  

                 
                </div>

                <Link to="download-section">
                    <button className="btn">Download CV</button>
                </Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
