import styles from "./Hero.module.css";
import Link from "next/link";
import { ProtectedImage } from "@/components/index";
import { FaPhoneAlt, FaDownload } from "react-icons/fa";

export const Hero = ({ data }) => {
  return (
    <div className={`container ${styles.HeroContainer}`}>
        <section id="hero" className={styles.HeroWrapper}>
          <div className={styles.imageWrapper}>
            <ProtectedImage
              src="/myImage.jpeg"
              alt={data.name}
              width={160}
              height={160}
              className={styles.profileImage}
              priority
            />
          </div>

          <h1 className="text-7 line-7">{data.name}</h1>
          <p className="text-4 line-4">{data.title}</p>
          <p className="text-4 line-4">{data.description}</p>

          <div className={styles.buttonGroup}>
            <Link href="/Ezzat_Abdeen.pdf" download className={styles.cvBtn}>
              <FaDownload className="text-1" />
              {data.cv || "تحميل CV"}
            </Link>
            <Link href="#contact" className={styles.contactBtn}>
              <FaPhoneAlt className="text-1" />
              {data.contact || "تواصل معي"}
            </Link>
          </div>
        </section>
    </div>
  );
};
