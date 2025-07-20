import styles from "./Header.module.css";
import { Logo } from "@/components/index";
import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";

export const Header = () => {
  return (
    <div className={`container borderBottom ${styles.headerContainer}`}>
      <header className={styles.header}>
        <Logo />
        <HeaderNavigation />
      </header>
    </div>
  );
};
