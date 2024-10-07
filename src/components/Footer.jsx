import React from "react";
import logo from "../assets/img/IT24_LOGO-01.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container">
      <div className="footer__bottom">
        <div className="footer__logo d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="footer__bottom-icons">
            <p className="m-0">Sekite mus</p>
            <a href="https://www.facebook.com" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
        <div>
          <ul className="d-flex gap-2">
            <li>
            <Link to="/">Pagrindinis</Link>
            </li>
            <li>
            <Link to="/apie-mus">Apie mus</Link>
            </li>
            <li>
            <Link to="/paslaugos">Paslaugos</Link>
            </li>
            <li>
            <Link to="/kontaktai">Kontaktai</Link>
            </li>
          </ul>
        </div>
        <p>&copy; 2024 ITpagalba24. Visos teisės saugomos. Bendraukime paštu: susisiekime@itpagalba24.lt</p>
      </div>
    </footer>
  );
}
