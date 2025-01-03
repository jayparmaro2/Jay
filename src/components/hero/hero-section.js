import React from 'react';
import './hero-section.scss';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="hero-section-inner">
                        <div className="availble">
                            <img src="images/hero-img.png" alt="Available Icon" />
                            <div className="availble-content">
                                <div className="dot"></div>
                                <span>AVAILABLE FOR FREELANCER</span>
                            </div>
                        </div>
                        <h1>
                            I am Jay Parmar, a UI/UX designer and frontend developer
                            <span> creating high-performing, stunning websites.</span>
                        </h1>
                        <div className="hero-btn">
                            <button className="btn btn-primary">
                                Portfolio
                                <img src="images/icons/carret_right.svg" alt="Caret Right Icon" />
                            </button>
                            <button className="btn btn-secondary">
                                Scroll Down
                                <img src="images/icons/down_arrow.svg" alt="Down Arrow Icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;