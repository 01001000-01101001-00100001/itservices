import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/IT24_LOGO-01.svg";
import { useEffect } from "react";

export default function Navigation() {
  useEffect(() => {
    const header = document.querySelector("header");
    const headerMenu = document.querySelector(".header__menu");
    const menuBtn = document.querySelector(".menu-btn");
    const headerMenuItems = headerMenu.querySelectorAll("li a");

    headerMenuItems.forEach((item) => {
      item.addEventListener("click", () => {
        headerMenu.classList.remove("show");
      });
    });

    const handleScroll = () => {
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
      }
    };

    const handleMenuToggle = () => {
      if (headerMenu) {
        headerMenu.classList.toggle("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    if (menuBtn) {
      menuBtn.addEventListener("click", handleMenuToggle);
    }

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (menuBtn) {
        menuBtn.removeEventListener("click", handleMenuToggle);
      }
    };
  }, []);

  return (
    <header>
      <div className="container flex-row d-flex justify-content-between align-items-center">
        <div className="header__logo">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
        </div>
        <nav>
          <ul className="header__menu d-flex flex-lg-row flex-column justify-content-lg-between align-items-center mb-0">
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
        </nav>
        <div className="right flex-center">
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div className="header__logo navbar-brand">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "50px", height: "50px" }}
              />
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Pagrindinis
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Apie mus
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Paslaugos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kontaktai">
                  Kontaktai
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </header>
  );
}
