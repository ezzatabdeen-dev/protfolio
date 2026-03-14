import styles from "./Experience.module.css";
import {
  FaChartBar,
  FaKeyboard,
  FaFileAlt,
  FaCheckDouble,
} from "react-icons/fa";

export const Experience = ({ data }) => {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "chart":
        return <FaChartBar className={styles.iconBlue} />;
      case "keyboard":
        return <FaKeyboard className={styles.iconGreen} />;
      case "file":
        return <FaFileAlt className={styles.iconPurple} />;
      case "check":
        return <FaCheckDouble className={styles.iconOrange} />;
      default:
        return <FaFileAlt />;
    }
  };

  return (
    <div className={`container ${styles.ExperienceContainer}`}>
      <div className={styles.ExperienceWrapper}>
        <section id="experience" className={styles.ExperienceItem}>
          <h2 className={`${styles.sectionTitle} text-5 line-5 sectionTitlBbefore`}>{data.title}</h2>

          <div className={styles.experienceGrid}>
            {data.items.map((item) => (
              <div key={item.id} className={styles.experienceCard}>
                <div className={styles.iconWrapper}>
                  {renderIcon(item.icon)}
                </div>
                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
