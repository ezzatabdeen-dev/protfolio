import styles from "./Footer.module.css";

export const Footer = ({data}) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`container ${styles.FooterContainer}`}>
      <div className={styles.FooterWrapper}>
        <footer className={styles.footer}>
          <div className={styles.content}>
            <p className="text-4">{data.name}</p>
            <span className="text-1 line-2">{data.text}</span>
            <p className={`${styles.copy} text-1`}>© {currentYear} {data.ownership}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
