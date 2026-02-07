import styles from "./Header.module.css";
import { Logo, HeaderNavigation } from "@/components/index";

export const Header = ({ dict }) => {
  return (
    <div className={`container borderBottom ${styles.headerContainer}`}>
      <header className={styles.header}>
        <Logo />
        <HeaderNavigation dict={dict} />
      </header>
    </div>
  );
};
