import styles from "./AboutHero.module.css";
import { ProtectedImage } from "@/components/index";

export const AboutHero = () => {
  return (
    <>
      <div className={`container ${styles.aboutHeroContainer}`}>
        <div className={styles.aboutHeroWrapper}>
          <div className={styles.aboutHeroTopContent}>
            <div className={styles.imageWrapper}>
              <ProtectedImage
                src="/api/image/profile-pic1.svg"
                alt="Ezzat Abdeen"
                width={160}
                height={160}
                className={styles.profileImage}
                priority
              />
            </div>

            <div className={styles.wrapperTopContentInfo}>
              <h1 className={`${styles.name} text-6`}>Ezzat Abdeen</h1>
              <h2 className={`${styles.title} text-3 line-3`}>
                Full-Stack Web Developer & Entrepreneur
              </h2>
              <p className={`${styles.subtitle} text-3 line-3`}>
                Experienced full-stack web developer and entrepreneur with a
                passion for creating innovative web solutions.
              </p>
            </div>
          </div>

          <div className={styles.aboutHeroBottomContent}>
            <h3 className={`text-6`}>About</h3>
            <p className={`text-3 line-3`}>
              Ezzat Abdeen is a seasoned full-stack web developer and
              entrepreneur with a strong background in Management Information
              Systems. With a BSc in MIS, Ezzat combines technical expertise
              with entrepreneurial acumen to deliver cutting-edge web
              applications and solutions. His skills encompass a wide range of
              web development technologies and entrepreneurial strategies,
              enabling him to lead projects from concept to completion.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
