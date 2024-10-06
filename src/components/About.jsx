import React from "react";

export default function About() {
  return (
    <section className="container flex-column">
      <h5 className="section-subheading">Apie mus</h5>
      <h2 className="section-heading">Kas mes?</h2>
      <div className="features">
        <div className="feature">
          {/* <div className="feature__icon">
              <i className="fas fa-anchor"></i>
            </div>
            <h3 className="feature__title">Pirmas</h3> */}
          <p className="feature__text">
            „ITpagalba24“ – jauna ir ambicinga įmonė, siūlanti paprastus, bet
            efektyvius IT problemų sprendimus bei profesionalų kompiuterių
            remontą. Mūsų paslaugos skirtos tiems, kurie ieško greitų ir
            patikimų sprendimų kasdienėms IT problemoms – nuo kompiuterių
            diagnostikos iki operacinės sistemos diegimo ar puslapių kūrimo.
            Siekiame suteikti aukštą aptarnavimo kokybę ir padėti spręsti jūsų
            IT iššūkius paprastai ir aiškiai. Esame pasiryžę augti kartu su
            jumis ir siūlyti patikimą IT pabalbą.
          </p>
        </div>
        <div className="feature">
          {/* <div className="feature__icon">
              <i className="fas fa-anchor"></i>
            </div>
            <h3 className="feature__title">Pirmas</h3> */}
          <p className="feature__text">
            Esame tikri, kad galime ne tik išspręsti Jūsų IT problemas, bet ir
            pasiūlyti geriausią kainos ir kokybės santykį rinkoje. Mūsų komanda
            kiekvieną užduotį vertina kaip galimybę, o ne sunkumą. Mes tikime,
            kad kiekvienas iššūkis yra proga tobulėti ir augti. Tad su
            entuziazmu priimsime Jūsų IT iššūkius ir paversime juos sprendimais,
            kurie padės Jums dirbti dar efektyviau.
          </p>
        </div>
      </div>
    </section>
  );
}
