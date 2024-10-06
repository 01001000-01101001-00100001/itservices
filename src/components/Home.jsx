import React from "react";
import illustration from "../assets/img/undraw.svg";

export default function Home() {
  return (
    <div>
      <section
        id="hero"
        className="container flex-row d-flex justify-content-between align-items-center"
      >
        <div className="hero__content">
          <h1 className="title">Company name</h1>
          <ul className="card-text">
            <li>
              Universalus puslapis visoms Jūsų IT problemoms ir paslaugoms
            </li>
            <li>Greiti ir efektyvūs IT problemų sprendimai</li>
            <li>
              <strong>Kainos ir kokybės santykis</strong> - jei radote pigiau,
              susisiekite su mumis ir mes pasiūlysime jums dar geresnę kainą!
            </li>
          </ul>
          <a href="/kontaktai" className="btn btn-primary">
            Susisiekite
          </a>
        </div>
        <div className="hero__img text-center">
          <img src={illustration} />
        </div>
      </section>

      <section id="about" className="container flex-column">
        <h5 className="section-subheading">Apie mus</h5>
        <h2 className="section-heading">Kas mes?</h2>
        <div className="features">
          <div className="feature">
            {/* <div className="feature__icon">
              <i className="fas fa-anchor"></i>
            </div>
            <h3 className="feature__title">Pirmas</h3> */}
            <p className="feature__text">
              ITpagalba24.lt – tai profesionalių IT paslaugų ir sprendimų
              komanda, teikianti greitą ir patikimą pagalbą, įsigilinant į
              kiekvieną problemą individualiai. Mūsų tikslas – užtikrinti ir
              atkurti sklandų jūsų IT įrenginių darbą bei pasiūlyti geriausios
              kokybės, efektyvius IT sprendimus ir paslaugas. Dirbame 24/7,
              todėl esame pasiruošę spręsti problemas bet kuriuo metu, kai jums
              reikia. Su ITpagalba24.lt galite būti ramūs – pasirūpinsime Jūsų
              IT lyg tai būtų mūsų :).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
