"use client";
import styles from "./Footer.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/index";
import { BiLogoGmail } from "react-icons/bi";
import { RiGithubFill, RiLinkedinFill, RiFacebookFill } from "react-icons/ri";

export const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const dataLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Projects", path: "/projects" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Resume", path: "/resume" },
  ];

  const dataSocial = [
    { id: 1, name: "ezzatabdeen.dev@gmail.com", path: "https://mail.google.com/mail/u/ezzatabdeen.dev@gmail.com", icon: BiLogoGmail },
    { id: 2, name: "linkedin.com/in/ezzatabdeen-dev", path: "https://www.linkedin.com/in/ezzatabdeen-dev/", icon: RiLinkedinFill },
    { id: 3, name: "github.com/ezzatabdeen-dev", path: "https://github.com/ezzatabdeen-dev", icon: RiGithubFill },
    { id: 4, name: "facebook.com/ezzatabden.dev", path: "https://facebook.com/ezzatabden.dev", icon: RiFacebookFill },
  ];

  return (
    <footer className={`container ${styles.FooterContainer}`}>
      <div className={styles.FooterWrapper}>
        <div className={`borderBottom borderTop ${styles.wraperContent}`}>
          <div className={styles.leftContent}>
            <Logo />
            <p className={`text-2`}>Full-Stack Web Developer & Entrepreneur</p>
          </div>
          <div className={styles.MiddleContent}>
            <h4 className={`text-3 bold`}>Resources</h4>
            <div className={styles.resourcesItems}>
              {dataLinks
                .filter((link) => {
                  if (pathname === "/") {
                    return link.name !== "Home";
                  } else {
                    return link.name !== "Resume";
                  }
                })
                .map((link) => {
                  const isActive =
                    pathname === "/"
                      ? link.name === "Resume"
                      : pathname === link.path;
                  return (
                    <a key={link.id} href={link.path} className={`text-2`}>
                      {link.name}
                    </a>
                  );
                })}
            </div>
          </div>
          <div className={styles.RightContent}>
            <h4 className={`text-3 bold`}>Contact Us</h4>
            <div className={styles.social}>
              {dataSocial.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.id}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2`}
                  >
                    <span className={styles.wraperLinksIcon}>
                      <Icon className={`text-3`} />
                    </span>
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <p className={`text-2 textCenter`}>
          © {currentYear} Ezzat Abdeen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
