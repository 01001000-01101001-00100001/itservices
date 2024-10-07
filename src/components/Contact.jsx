import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false); // State to track sending status

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Start spinner

    emailjs
      .sendForm("service_mpt9f2m", "template_g2u5dcf", form.current, {
        publicKey: "8WaNXLAoz9OR89Cpn",
      })
      .then(
        () => {
          toast.success(
            "Žinutė sėkmingai išsiųsta, su jumis susisieksime per artimiausias valandas!",
            { position: "top-center", className: "toast-message" }
          );
          e.target.reset();
        },
        () => {
          toast.error(
            "Atsiprašome, bet žinutės išsiųsti nepavyko, prašome susisiekti su mumis nurodytu el. paštu.",
            { position: "top-center", className: "toast-message" }
          );
        }
      )
      .finally(() => {
        setIsSending(false); // Stop spinner
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <h5 className="section-subheading">Kontaktai</h5>
        <h2 className="section-heading">
          Susisiekite su mumis jums patogiu būdu
        </h2>
        <p>
          Norėdami užsisakyti paslaugą, prašome su mumis susisiekti, kad
          galėtume susitarti paslaugos/projekto detales.
        </p>
        <div className="contact">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <h3>Parašykite žinutę</h3>
            <input
              type="text"
              name="user_name"
              placeholder="Jūsų vardas"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Jūsų el. paštas"
              required
            />
            <input type="text" name="user_phone" placeholder="Jūsų Tel. Nr." />
            <textarea
              rows="5"
              name="message"
              placeholder="Jūsų žinutė"
              required
            ></textarea>

            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSending}
            >
              {isSending ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  Siunčiama...
                </>
              ) : (
                "Siųsti žinutę"
              )}
            </button>
          </form>
          <div className="contact__details">
            <h3>Kontaktai</h3>
            <div className="details">
              <div className="detail">
                <div className="detail__icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="detail__content">
                  <h3>Tel. Nr</h3>
                  <p>+123456789</p>
                </div>
              </div>
              <div className="detail">
                <div className="detail__icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="detail__content">
                  <h3>El. paštas</h3>
                  <p>susisiekime@itpagalba24.lt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          toastClassName="toast-container"
          bodyClassName="toast-body"
        />
      </div>
    </section>
  );
}
