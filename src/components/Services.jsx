import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      {/* <div className="container">
        <h2>Mūsų paslaugos</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <div class="card h-100">
              <div className="card-header d-flex justify-content-between">
                <h5 className="mb-0">Pagr. paslaugos</h5>
                <div>👨🏻‍💻</div>
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <ul className="card-text">
                  <li>Internetinės svetainės/el. parduotuvės kūrimas</li>
                  <li>SEO</li>
                  <li>Logotipo ir firminio stiliaus dizainas</li>
                  <li>Grafinis dizainas</li>
                  <li>Socialinių tinklų paskyrų valdymas</li>
                  <li>
                    Reklaminių kampanijų kūrimas (Google Ads, Facebook Ads)
                  </li>
                  <li>Video montavimas ir animacija</li>
                  <li>Turinio kūrimas (tekstai, tinklaraščiai, straipsniai)</li>
                  <li>Elektroninių laiškų marketingo kampanijos</li>
                  <li>Duomenų analizė ir verslo analitika</li>
                  <li>UI/UX dizaino kūrimas</li>
                  <li>Prezentacijų ir ataskaitų kūrimas</li>
                </ul>
                <Link to="/kontaktai" className="btn btn-primary">
                  Susisiekite
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="card h-100">
              <div className="card-header d-flex justify-content-between">
                <h5 className="mb-0">Techninės problemos</h5>
                <div>🛠️</div>
              </div>
              <div class="card-body d-flex flex-column justify-content-between">
                <ul className="card-text">
                  <li>Kompiuteris neįsijungia </li>
                  <li>Kietųjų diskų problemos</li>
                  <li>„Windows“ mėlynasis ekranas (BSOD)</li>
                  <li>Neveikia ekranas </li>
                  <li>Suletėjęs darbas </li>
                  <li>Kompiuteris išsijungia arba persikrauna atsitiktinai </li>
                  <li>
                    Lietimui jautrus ekranas neveikia (planšetės/telefonai)
                  </li>
                  <li>Sugadintas BIOS/UEFI </li>
                  <li>Kitos paslaugos</li>
                </ul>
                <Link to="/kontaktai" className="btn btn-primary">
                  Susisiekite
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="card h-100">
              <div className="card-header d-flex justify-content-between">
                <h5 className="mb-0">
                  Programinės įrangos problemos (Windows)
                </h5>
                <div>📂</div>
              </div>
              <div class="card-body d-flex flex-column justify-content-between">
                <ul className="card-text">
                  <li>Klaidos dėl trūkstamų .dll failų </li>
                  <li>Programos neatsidaro arba stringa </li>
                  <li>„Microsoft Office“ problemos </li>
                  <li>Sugadinti Windows sisteminiai failai </li>
                  <li>
                    Windows prisijungimo problemos (pamirštas slaptažodis){" "}
                  </li>
                  <li>Negalima prisijungti prie tinklo/interneto </li>
                  <li>Windows neaptinka USB įrenginių </li>
                  <li>Windows aktyvavimo problemos </li>
                  <li>Prarasti failai arba atsitiktinis ištrynimas </li>
                </ul>
                <Link to="/kontaktai" className="btn btn-primary">
                  Susisiekite
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="card h-100">
              <div className="card-header d-flex justify-content-between">
                <h5 className="mb-0">
                  Programinės įrangos problemos (Android)
                </h5>
                <div>📱</div>
              </div>
              <div class="card-body d-flex flex-column justify-content-between">
                <ul className="card-text">
                  <li>Telefonas neįsijungia </li>
                  <li>Android OS neatsinaujina </li>
                  <li>„Google Play Store“ neveikia</li>
                  <li>Lietimui jautrus ekranas nereaguoja </li>
                  <li>Android telefonas užstringa/lėtai veikia </li>
                  <li>Mobilusis ryšys neveikia </li>
                  <li>Prarasti duomenys arba nuotraukos (netyčia ištrinti) </li>
                </ul>
                <Link to="/kontaktai" className="btn btn-primary">
                  Susisiekite
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="card h-100">
              <div className="card-header d-flex justify-content-between">
                <h5 className="mb-0">Programinės įrangos problemos (iOS)</h5>
                <div>📱</div>
              </div>
              <div class="card-body d-flex flex-column justify-content-between">
                <ul className="card-text">
                  <li>iPhone neįsijungia</li>
                  <li>„Face ID“/„Touch ID“ neveikia</li>
                  <li>iOS atnaujinimo problemos</li>
                  <li>Nepavyksta sukurti atsarginių kopijų iCloud</li>
                  <li>Žinutės negaunamos arba neatsiunčiamos</li>
                  <li>iPhone užstringa arba lėtai veikia</li>
                  <li>Kamera neveikia iPhone</li>
                </ul>
                <Link to="/kontaktai" className="btn btn-primary">
                  Susisiekite
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="card h-100">
              <div className="card-header d-flex justify-content-between">
                <h5 className="mb-0">Išorinių įrenginių problemos</h5>
                <div>🖱️⌨️</div>
              </div>
              <div class="card-body d-flex flex-column justify-content-between">
                <ul className="card-text">
                  <li>Spausdintuvas nespausdina</li>
                  <li>Išorinis kietasis diskas neaptiktas</li>
                  <li>Internetinė kamera neveikia</li>
                  <li>Neaptiktas išorinis mikrofonas</li>
                  <li>Monitorius rodo neteisingą raišką</li>
                  <li>Du monitoriai neveikia tinkamai</li>
                  <li>Projektoriaus prijungimo problemos</li>
                </ul>
                <Link to="/kontaktai" className="btn btn-primary">
                  Susisiekite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section id="services">
        <div className="container">
          <h5 className="section-subheading">paslaugos</h5>
          <h2 className="section-heading">Apie mūsų teikiamas paslaugas</h2>
          <div className="services">
            <Link to="/kontaktai" className="service">
              <div className="service__icon">
                <div>👨🏻‍💻</div>
              </div>
              <h3 className="services__title">Pagr. paslaugos</h3>
              <ul className="card-text service__text">
                <li>Internetinės svetainės/el. parduotuvės kūrimas</li>
                <li>SEO</li>
                <li>Logotipo ir firminio stiliaus dizainas</li>
                <li>Grafinis dizainas</li>
                <li>Socialinių tinklų paskyrų valdymas</li>
                <li>Reklaminių kampanijų kūrimas (Google Ads, Facebook Ads)</li>
                <li>Video montavimas ir animacija</li>
                <li>Turinio kūrimas (tekstai, tinklaraščiai, straipsniai)</li>
                <li>Elektroninių laiškų marketingo kampanijos</li>
                <li>Duomenų analizė ir verslo analitika</li>
                <li>UI/UX dizaino kūrimas</li>
                <li>Prezentacijų ir ataskaitų kūrimas</li>
              </ul>
              <div className="arrow-icon">
                <span>Susisiekite </span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
            <Link to="/kontaktai" className="service">
              <div className="service__icon">
                <div>🛠️</div>
              </div>
              <h3 className="services__title">Pagr. paslaugos</h3>
              <ul className="card-text service__text">
                <li>Kompiuteris neįsijungia </li>
                <li>Kietųjų diskų problemos</li>
                <li>„Windows“ mėlynasis ekranas (BSOD)</li>
                <li>Neveikia ekranas </li>
                <li>Suletėjęs darbas </li>
                <li>Kompiuteris išsijungia arba persikrauna atsitiktinai </li>
                <li>Lietimui jautrus ekranas neveikia (planšetės/telefonai)</li>
                <li>Sugadintas BIOS/UEFI </li>
                <li>Kitos paslaugos</li>
              </ul>
              <div className="arrow-icon">
                <span>Susisiekite </span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
            <Link to="/kontaktai" className="service">
              <div className="service__icon">
                <div>📂</div>
              </div>
              <h3 className="services__title">
                Programinės įrangos problemos (Windows)
              </h3>
              <ul className="card-text service__text">
                <li>Klaidos dėl trūkstamų .dll failų </li>
                <li>Programos neatsidaro arba stringa </li>
                <li>„Microsoft Office“ problemos </li>
                <li>Sugadinti Windows sisteminiai failai </li>
                <li>Windows prisijungimo problemos (pamirštas slaptažodis) </li>
                <li>Negalima prisijungti prie tinklo/interneto </li>
                <li>Windows neaptinka USB įrenginių </li>
                <li>Windows aktyvavimo problemos </li>
                <li>Prarasti failai arba atsitiktinis ištrynimas </li>
              </ul>
              <div className="arrow-icon">
                <span>Susisiekite </span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
            <Link to="/kontaktai" className="service">
              <div className="service__icon">
                <div>📱</div>
              </div>
              <h3 className="services__title">
                Programinės įrangos problemos (Android)
              </h3>
              <ul className="card-text service__text">
                <li>Telefonas neįsijungia </li>
                <li>Android OS neatsinaujina </li>
                <li>„Google Play Store“ neveikia</li>
                <li>Lietimui jautrus ekranas nereaguoja </li>
                <li>Android telefonas užstringa/lėtai veikia </li>
                <li>Mobilusis ryšys neveikia </li>
                <li>Prarasti duomenys arba nuotraukos (netyčia ištrinti) </li>
              </ul>
              <div className="arrow-icon">
                <span>Susisiekite </span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
            <Link to="/kontaktai" className="service">
              <div className="service__icon">
                <div>📱</div>
              </div>
              <h3 className="services__title">
                Programinės įrangos problemos (iOS)
              </h3>
              <ul className="card-text service__text">
                <li>iPhone neįsijungia</li>
                <li>„Face ID“/„Touch ID“ neveikia</li>
                <li>iOS atnaujinimo problemos</li>
                <li>Nepavyksta sukurti atsarginių kopijų iCloud</li>
                <li>Žinutės negaunamos arba neatsiunčiamos</li>
                <li>iPhone užstringa arba lėtai veikia</li>
                <li>Kamera neveikia iPhone</li>
              </ul>
              <div className="arrow-icon">
                <span>Susisiekite </span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
            <Link to="/kontaktai" className="service">
              <div className="service__icon">
                <div>🖱️⌨️</div>
              </div>
              <h3 className="services__title">Išorinių įrenginių problemos</h3>
              <ul className="card-text service__text">
                <li>Spausdintuvas nespausdina</li>
                <li>Išorinis kietasis diskas neaptiktas</li>
                <li>Internetinė kamera neveikia</li>
                <li>Neaptiktas išorinis mikrofonas</li>
                <li>Monitorius rodo neteisingą raišką</li>
                <li>Du monitoriai neveikia tinkamai</li>
                <li>Projektoriaus prijungimo problemos</li>
              </ul>
              <div className="arrow-icon">
                <span>Susisiekite </span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
