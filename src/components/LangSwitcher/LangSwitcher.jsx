"use client";
import styles from "./LangSwitcher.module.css";

export const LangSwitcher = ({ checked, onToggle }) => {
  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          className={styles.input}
          checked={checked}
          onChange={onToggle}
        />
        <div className={styles.slider}>
          <span className={`${styles.label} ${!checked ? styles.active : ""}`}>
            EN
          </span>
          <span className={`${styles.label} ${checked ? styles.active : ""}`}>
            AR
          </span>
          <div className={styles.toggle}></div>
        </div>
      </label>
    </div>
  );
};
