import React, { useState } from 'react';
import "./skills.css"
import html5 from "../../assets/html5.png";
import CSS from "../../assets/CSS (1).png";
import JS from "../../assets/JS.png";
import REACT from "../../assets/REACT.png";


const Skills = () => {
    return(
        <section className='major'>
            <div className="contain">
                <span>
                    <hr className='hr'/>
                    <p className='pb'>
                        CHECK OUT MY SKILLS <i className="fa fa-arrow-down"></i>
                    </p>
                </span>
            </div>
            <div className="sub">
                <h1 className='skill'>My Skills</h1>
                <h2 className='special'>I specialize in a range of skills that help bring ideas to life</h2>
            </div>
    {/* SKILLS ICONS */}
<div className="icons">
  <div className="icon">
    <div className="html">
      <button className="icon-button">
        <img src={html5} alt="HTML5" className="HTML2" />
        <h3 className="h5">HTML5</h3>
      </button>
    </div>
    {/* CSS STYLING */}
    <div className="css">
      <button className="icon-button">
        <img src={CSS} alt="CSS3" className="CSS2" />
        <h3 className="c3">CSS3</h3>
      </button>
    </div>
    {/* JAVASCRIPT */}
    <div className="js">
      <button className="icon-button">
        <img src={JS} alt="JavaScript" className="JS3" />
        <h3 className="JJ">JAVASCRIPT</h3>
      </button>
    </div>
    {/* REACT */}
    <div className="React">
      <button className="icon-button">
        <img src={REACT} alt="React" className="REACT4" />
        <h3 className="RR">REACT</h3>
      </button>
    </div>
  </div>
</div>

        </section>
    );
};
export default Skills;