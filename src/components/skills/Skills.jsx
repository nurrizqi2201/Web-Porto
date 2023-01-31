import React from 'react';
import "./skill.css";
import Frontend from './Frontend';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <div data-aos="zoom-out-down" data-aos-duration="1000">
        <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
        </div>

      <div className="skills__container container grid" data-aos="zoom-out-down" data-aos-duration="1500">
        <Frontend />
      </div>
    </section>
  )
}

export default Skills