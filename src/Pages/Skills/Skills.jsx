import React, { useState } from 'react';
import "./skills.css"
import first1 from "../../assets/first1.jpg";
import second2 from "../../assets/second2.jpg";
import third3 from "../../assets/third3.jpg";


const Skills = () => {
    return(
        <section className='major'>
            <div className="contain">
                <span>
                    <hr className='hr'/>
                    <p className='pp'>
                        CHECK OUT MY SKILLS <i className="fa fa-arrow-down"></i>
                    </p>
                </span>
            </div>
            <div className="sub">
                <h1 className='skill'>My Skills</h1>
                <h3 className='special'>I specialize in a range of skills that help bring ideas to life</h3>
            </div>
            {/* SKILLS ICONS */}
            <div className="icons">
            <div className="icon">
                {/* <img src={third3} alt="Chris" className="image" /> */}
            </div>
            </div>

        </section>
    );
};
export default Skills;