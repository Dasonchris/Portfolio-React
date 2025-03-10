import React from 'react';
import "../Pages/Home.css";
import chrisImage from '../assets/chris.jpg'

const Home = () => {
    return (
        <div className='main'>
            <div className="home">
                <div className="left">
                    <h3 className='greetings'>
                        Hello, I'm <br /> <span>Chris.</span>
                    </h3>
                    <div className="about-me">
                        <p className='me'>
                            I'm a Software Developer living in Ghana, Ho-Volta Region.
                            I focus on Front-end development.
                        </p>
                    </div>
                    <div className="help">
                        <div className="h5">
                            <div className="sub">
                            I can help you out with:
                            </div>
                            
                            <ul>
                                <li>Software</li>
                                <li>Projects</li>
                                <li>and more....</li>
                            </ul>
                        </div>
                        <div className="socials">
                            <h5 className='handle'>
                                Follow me on:
                            </h5>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/chris" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </a>
                                <a href="https://www.facebook.com/chris" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i> Facebook
                                </a>
                                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-whatsapp"></i> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="image">
                    <img src={chrisImage} alt="Chris" className="image" />
                    <div className="waving-hand">👋</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

