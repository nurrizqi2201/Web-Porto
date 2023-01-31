import React from 'react';
import './footer.css';
import CV from '../../assets/Nurrizqi_CV.pdf'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">NURRIZQI WEBSITE</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href={CV} className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://instagram.com/nurrizqigp/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://facebook.com/Nurrizqi"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://github.com/nurrizqi2201/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

          <span className="footer__copy">
            &#169; Nurrizqi Website. All rights reserved
          </span>
      </div>
    </footer>
  )
}

export default Footer
