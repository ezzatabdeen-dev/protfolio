import styles from "./Interests.module.css";
import { FaCode, FaLaptopCode, FaDatabase, FaBriefcase } from "react-icons/fa";

export const Interests = ({ data }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case "code":
        return <FaCode />;
      case "laptop":
        return <FaLaptopCode />;
      case "database":
        return <FaDatabase />;
      case "briefcase":
        return <FaBriefcase />;
      default:
        return null;
    }
  };

  return (
    <div className={`container ${styles.InterestsContainer}`}>
      <div className={styles.InterestsWrapper}>
        <section id="interests">
          <h2 className={`${styles.sectionTitle} tex-5 line-5 sectionTitlBbefore`}>{data.title}</h2>

          <div className={styles.interestsGrid}>
            {data.items.map((item, idx) => (
              <div
                key={idx}
                className={`${styles.interestCard} ${styles[item.color]}`}
              >
                <div className={styles.iconBox}>{getIcon(item.icon)}</div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
