import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box" data-aos="zoom-out-down" data-aos-duration="1000">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">Follow The Organization and Still Learning about Web Develeopment</span>
        </div>

        <div className="about__box" data-aos="zoom-out-down" data-aos-duration="1500">
        <i class='bx bx-briefcase-alt-2 about__icon'></i>
            <h3 className="about__title">Hobby</h3>
            <span className="about__subtitle">Manajemen Planning and Some Sports</span>
        </div>
        
        <div className="about__box" data-aos="zoom-out-down" data-aos-duration="2000">
            <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info