import styles from "./Logo.module.css";
import Link from "next/link";
import { ProtectedImage } from "@/components/index";

export const Logo = () => {
  return (
    <div className={styles.wrapperLogo}>
      <Link href={"/"}>
        <ProtectedImage
          src="/brand.svg"
          alt="Logo"
          width={200}
          height={100}
          className={styles.brand}
          priority
        />
      </Link>
    </div>
  );
};
