import React from "react";
import logo from "../assets/img/IT24_LOGO-01.svg";

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
            <a href="" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
        <div>
          <ul className="d-flex gap-2">
            <li>
              <a href="/">Pagrindinis</a>
            </li>
            <li>
              <a href="/apie-mus">Apie mus</a>
            </li>
            <li>
              <a href="/paslaugos">Paslaugos</a>
            </li>
            <li>
              <a href="/kontaktai">Kontaktai</a>
            </li>
          </ul>
        </div>
        <p>&copy; 2024 IT24. Visos teisės zzz</p>
      </div>
    </footer>
  );
}
