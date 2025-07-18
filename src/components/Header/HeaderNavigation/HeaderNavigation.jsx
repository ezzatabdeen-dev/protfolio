"use client";
import styles from "../Header.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiMenuLine,
  RiCloseFill,
} from "react-icons/ri";

export const HeaderNavigation = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const dataNav = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Projects", path: "/projects" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Resume", path: "/resume" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const filteredNav = isMounted
    ? dataNav.filter((link) => {
        if (pathname === "/") {
          return link.name !== "Home";
        } else {
          return link.name !== "Resume";
        }
      })
    : [];

  return (
    <>
      {/* Desktop Navigation */}
      <div className={styles.wraberNav}>
        <nav className={styles.headerNavigation}>
          <ul>
            {filteredNav.map((link) => {
              const isActive =
                pathname === "/"
                  ? link.name === "Resume"
                  : pathname === link.path;

              return (
                <li key={link.id} className={isActive ? styles.active : ""}>
                  <Link href={link.path} className={`text-2`}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.dteails}>
          <ul>
            <li className={`borderFull`}>
              <RiGithubFill className={`text-5`} />
              <span className={"pattern"}></span>
            </li>
            <li className={`borderFull`}>
              <RiLinkedinFill className={`text-5`} />
              <span className={"pattern"}></span>
            </li>
          </ul>
        </div>

        {pathname !== "/" && (
          <div className={styles.profileImg}>
            <Image
              src="/profile-pic1.svg"
              alt="Logo"
              width={100}
              height={100}
              className={styles.brand}
            />
          </div>
        )}

        {/* Open menu button on mobile */}
        <button
          onClick={toggleMenu}
          className={styles.menuButton}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <RiCloseFill size={28} /> : <RiMenuLine size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        <ul>
          {dataNav
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
                <li
                  key={link.id}
                  className={isActive ? styles.active : ""}
                  onClick={toggleMenu}
                >
                  <Link href={link.path} className={`text-2`}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </>
  );
};
