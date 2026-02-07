import styles from "./Skills.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFileExcel,
  FaFileWord,
  FaTable,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb } from "react-icons/si";
import { HiOutlineCode, HiOutlineDesktopComputer } from "react-icons/hi";

export const Skills = ({ data }) => {
  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case "html & css":
        return (
          <>
            <FaHtml5 color="#e34f26" /> <FaCss3Alt color="#1572b6" />
          </>
        );
      case "javascript":
        return <FaJs color="#f7df1e" />;
      case "react":
        return <FaReact color="#61dafb" />;
      case "next.js":
        return <SiNextdotjs color="#000000" />;
      case "node.js":
        return <FaNodeJs color="#339933" />;
      case "mongodb":
        return <SiMongodb color="#47a248" />;
      case "microsoft excel":
        return <FaFileExcel color="#1d6f42" />;
      case "microsoft word":
        return <FaFileWord color="#2b579a" />;
      case "تنظيم البيانات":
        return <FaTable color="#8e44ad" />;
      default:
        return <FaDatabase />;
    }
  };

  return (
    <div className={`container ${styles.SkillsContainer}`}>
      <div className={styles.SkillsWrapper}>
        <section id="skills" className={`${styles.SkillsItem}`}>
          <h2 className={`${styles.mainTitle} text-6 line-6 sectionTitlBbefore`}>{data.title}</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.cardHeader}>
                <span className={styles.headerIcon}>
                  <HiOutlineCode />
                </span>
                <h3 className="text-3">{data.webTitle}</h3>
              </div>
              <div className={styles.skillsList}>
                {data.webSkills.map((skill, idx) => (
                  <div key={idx} className={styles.skillRow}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.iconBox}>
                      {getIcon(skill.name)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.cardHeader}>
                <span className={`${styles.headerIcon} ${styles.officeIcon}`}>
                  <HiOutlineDesktopComputer />
                </span>
                <h3 className="text-3">{data.officeTitle}</h3>
              </div>
              <div className={styles.skillsList}>
                {data.officeSkills.map((skill, idx) => (
                  <div key={idx} className={styles.skillRowOffice}>
                    <div className={styles.officeText}>
                      <span className={`${styles.skillName}`}>{skill.name}</span>
                      <p className={`${styles.skillDesc}`}>{skill.desc}</p>
                    </div>
                    <span className={`${styles.iconBox}`}>
                      {getIcon(skill.name)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
