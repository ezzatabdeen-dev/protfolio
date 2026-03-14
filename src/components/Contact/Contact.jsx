"use client";
import { useState } from "react";
import styles from "./Contact.module.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

export const Contact = ({ data }) => {
  const [isSending, setIsSending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "36f9a2d0-d1f5-4b61-8e75-13046a339d37");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setShowPopup(true);
        e.target.reset();
      } else {
        alert(data.alerts.error);
      }
    } catch (error) {
      alert(data.alerts.serverError);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={`container ${styles.ContactContainer}`}>
      <div className={styles.ContactWrapper}>
        <section id="contact">
          <h2 className={`${styles.sectionTitle} text-5 line-5`}>{data.title}</h2>
          <p className={styles.sectionDesc}>{data.description}</p>

          <div className={styles.contentGrid}>
            <div className={styles.infoCards}>
              <a href={`mailto:${data.email}`} className={styles.infoCard}>
                <div className={styles.iconBox}>
                  <FaEnvelope />
                </div>
                <div className={styles.cardTexts}>
                  <span>{data.emailLabel}</span>
                  <p>{data.email}</p>
                </div>
              </a>
              <a href={`tel:${data.phone}`} className={styles.infoCard}>
                <div className={styles.iconBox}>
                  <FaPhoneAlt />
                </div>
                <div className={styles.cardTexts}>
                  <span>{data.phoneLabel}</span>
                  <p>{data.phone}</p>
                </div>
              </a>
            </div>

            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder={data.form.name}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder={data.form.email}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder={data.form.message}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSending}
              >
                {isSending ? data.alerts.sending : data.form.send}
                <FaPaperPlane className={styles.sendIcon} />
              </button>
            </form>
          </div>
        </section>
      </div>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <FaCheckCircle className={styles.checkIcon} />
            <h3>{data.alerts.successTitle}</h3>
            <p>{data.alerts.successDesc}</p>
            <button
              onClick={() => setShowPopup(false)}
              className={styles.closePopupBtn}
            >
              {data.alerts.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
