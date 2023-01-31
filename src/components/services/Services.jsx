import React, {useState} from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <div data-aos="zoom-out-down" data-aos-duration="1000">
        <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
        </div>

      <div className="services__container container grid">
        <div className="services__content" data-aos="zoom-out-down" data-aos-duration="1500">
            <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Web <br/> Designer</h3>
        </div>

        <span className="services__button" onClick={() => toggleTab(1)}>
            View More 
            <i className="uil uil-arrow-right services__button-icon"></i></span>

        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i onClick={() =>toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Web Designer</h3>
                <p className="services__modal-description">Web design skills and interactions using Javascript and Frameworks</p>

                <ul className="service__modal-services grid">
                    <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">I develop the user interface.</p>
                    </li>

                    <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Web page development.</p>
                    </li>

                    <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">I create ux element interactions.</p>
                    </li>

                    <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Design of products or application for clients.</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>

      <div className="services__content" data-aos="zoom-out-down" data-aos-duration="2000">
        <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Data <br /> Excel</h3>
        </div>

        <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

        <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i onClick={() =>toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Data Excel</h3>
                <p className="services__modal-description">Input some of data to excel with formula for work.</p>

                <ul className="service__modal-services grid">
                    <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Input data to excel.</p>
                    </li>

                    <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">I using excel formulas like if, lookup, count, etc.</p>
                    </li>

                    <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Making tabel and Form using pivot.</p>
                    </li>

                    <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">I create automatic formulas using macro.</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>

      <div className="services__content" data-aos="zoom-out-down" data-aos-duration="2500">
            <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Drafter <br /> Designer</h3>
        </div>

        <span className="services__button" onClick={() => toggleTab(3)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

        <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i onClick={() =>toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Drafter Designer</h3>
                <p className="services__modal-description">Work and train skills in drawing building construction designs for 6 months in companies.</p>

                <ul className="service__modal-services grid">
                    <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">I input data using microsoft excel.</p>
                    </li>

                    <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Making memos using microsoft word.</p>
                    </li>

                    <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Drafting construction drawings or layouting which requires accuracy with AutoCAD and SketchUp.</p>
                        </li>

                    <li className="uil uil-check-circle services__modal-icon">
                        <p className="services__modal-info">Work on the company's project according to the tender.</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Services