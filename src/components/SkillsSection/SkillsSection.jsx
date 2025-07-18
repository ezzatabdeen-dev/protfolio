"use client";
import styles from "./SkillsSection.module.css";
import { useState } from "react";
import {
  RiCodeSSlashLine,
  RiDatabase2Line,
  RiServerLine,
  RiCloudyLine,
  RiGitBranchLine,
  RiTeamLine,
  RiMoneyDollarCircleLine,
  RiBarChart2Line,
  RiFlagLine,
  RiLightbulbLine,
} from "react-icons/ri";

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const skills = {
    technical: [
      {
        name: "Full-Stack Development",
        icon: <RiCodeSSlashLine />,
      },
      {
        name: "Database Design",
        icon: <RiDatabase2Line />,
      },
      {
        name: "Server-Side Development",
        icon: <RiServerLine />,
      },
      {
        name: "Cloud Computing",
        icon: <RiCloudyLine />,
      },
      {
        name: "Version Control",
        icon: <RiGitBranchLine />,
      },
    ],
    business: [
      {
        name: "Strategic Planning",
        icon: <RiLightbulbLine />,
      },
      {
        name: "Team Leadership",
        icon: <RiTeamLine />,
      },
      {
        name: "Financial Management",
        icon: <RiMoneyDollarCircleLine />,
      },
      {
        name: "Market Analysis",
        icon: <RiBarChart2Line />,
      },
      {
        name: "Marketing Strategy",
        icon: <RiFlagLine />,
      },
    ],
  };

  return (
    <div className={`container ${styles.skillsContainer}`}>
      <div className={styles.skillsWrapper}>
        <div className={styles.skillsTitle}>
          <h2 className="text-6">Key Skills</h2>
        </div>

        <div className={`borderBottom ${styles.tabs}`}>
          <button
            className={`text-2 ${styles.tabButton} ${
              activeTab === "technical" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("technical")}
          >
            Technical
          </button>
          <button
            className={`text-2 ${styles.tabButton} ${
              activeTab === "business" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("business")}
          >
            Business/Management
          </button>
        </div>

        <div className={styles.skillsGrid}>
          {skills[activeTab].map((skill, index) => (
            <div
              className={`borderFull text-2 ${styles.skillCard}`}
              key={index}
            >
              <span className={`text-4 ${styles.skillIcon}`}>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
