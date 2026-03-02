import styles from "./Hero.module.css";
import Link from "next/link";
import { ProtectedImage } from "@/components/index";
import { FaPhoneAlt, FaDownload } from "react-icons/fa";

export const Hero = ({ data }) => {
  return (
    <div className={styles.HeroContainer}>
      <div className={styles.HeroWrapper}>
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
          
          <h1>{data.name}</h1>
          <p>{data.title}</p>
          <p style={{ fontSize: '0.9rem', marginTop: '-10px' }}>{data.description}</p>

          <div className={styles.buttonGroup}>
             <Link href="/Ezzat_Abdeen.pdf" download className={styles.cvBtn}>
              <FaDownload size={14} />
              {data.cv || "تحميل CV"}
            </Link>
            <Link href="#contact" className={styles.contactBtn}>
              <FaPhoneAlt size={14} />
              {data.contact || "تواصل معي"}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
