import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";

export const Header = () => {
  return (
    <div className={`container borderBottom ${styles.headerContainer}`}>
      <header className={styles.header}>
        <div className={styles.wrapperLogo}>
          <Link href={"/"}>
            <Image
              src="/brand.svg"
              alt="Logo"
              width={200}
              height={100}
              className={styles.brand}
            />
          </Link>
        </div>
        <HeaderNavigation />
      </header>
    </div>
  );
};
