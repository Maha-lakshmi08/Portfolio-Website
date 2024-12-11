import React from 'react';
import './clients.css';
import clientpic from '../../assets/tabler_brand-mcdonalds.png';
import clientpicture from '../../assets/Vector.png';

const Clients = () => {
    return (
        <section id="clients">
            <span className="clientPageTitle">My Clients</span>
            <span className="clientDesc">
                I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with include
            </span>

            <div className="clientImgs">
                <img src={clientpic} alt="Client" className="clientImg" />
                <img src={clientpicture} alt="Client" className="clientImg" />
                <img src={clientpic} alt="Client" className="clientImg" />
                <img src={clientpicture} alt="Client" className="clientImg" />
            </div>

           
        </section>
    );
}

export default Clients;
