import styles from "./About.module.css";

export const About = ({ data }) => {
  return (
    <div className={`container ${styles.AboutContainer}`}>
      <div className={styles.AboutoWrapper}>
        <section id="about" className={styles.AboutItem}>
          <h2 className="text-5 line-5 sectionTitlBbefore">{data.title}</h2>
          <p className="text-3 line-3">{data.text}</p>
        </section>
      </div>
    </div>
  );
};
