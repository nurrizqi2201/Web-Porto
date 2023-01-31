import React, {useState} from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section" id='qualification'>
      <div data-aos="zoom-out-down" data-aos-duration="1000">  
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      </div>

      <div className="qualification__container container" >
        <div className="qualification__tabs" data-aos="zoom-out-down" data-aos-duration="1500">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{' '}
            Education
          </div>
          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{' '}
            Experience
          </div>
        </div>

        <div className="qualification__sections" data-aos="zoom-out-down" data-aos-duration="1500">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Student</h3>
                <span className="qualification__subtitle">
                SD NEGERI 02 SIDANEGARA CILACAP
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2005 – 2011
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Student</h3>
                <span className="qualification__subtitle">
                SMP NEGERI 1 PURBALINGGA
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2011 – 2014
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Student - IPS</h3>
                <span className="qualification__subtitle">
                SMA NEGERI 1 PURBALINGGA
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2014 – 2017
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Student</h3>
                <span className="qualification__subtitle">
                  JENDERAL SOEDIRMAN UNIVERSITY
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - Present
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Drafter Designer</h3>
                <span className="qualification__subtitle">
                  KONJAYA CILACAP COMPANY
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Internship</h3>
                <span className="qualification__subtitle">
                  Padamara sub-district of Purbalingga
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">
                  Learn and Still Learning
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
