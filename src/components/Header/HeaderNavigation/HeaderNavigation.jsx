"use client";
import styles from "../Header.module.css";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { RiMenuLine, RiCloseFill } from "react-icons/ri";
import { LangSwitcher } from "@/components/index";

export const HeaderNavigation = ({ dict }) => {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "ar";
  const toggleLang = lang === "ar" ? "en" : "ar";
  const [activeHash, setActiveHash] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const isEnglish = lang === "en";

  const handleToggleLang = () => {
    router.push(`/${toggleLang}${window.location.hash}`);
  };

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
    { id: 1, label: dict.nav.about, href: "#about" },
    { id: 2, label: dict.nav.education, href: "#education" },
    { id: 3, label: dict.nav.skills, href: "#skills" },
    { id: 4, label: dict.nav.experience, href: "#experience" },
    { id: 5, label: dict.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveHash(window.location.hash);
    }
  }, []);

  return (
    <>
      {/* Desktop */}
      <div className={styles.wraberNav}>
        <nav className={styles.headerNavigation}>
          <ul>
            {dataNav.map((link) => {
              const isActive = activeHash === link.href;

              return (
                <li key={link.id} className={isActive ? styles.active : ""}>
                  <Link
                    href={`/${lang}${link.href}`}
                    className="text-3 fontWeight"
                    onClick={() => setActiveHash(link.href)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.desktopLang}>
          <LangSwitcher checked={isEnglish} onToggle={handleToggleLang} />
        </div>

        <button
          onClick={() => setMenuOpen((p) => !p)}
          className={styles.menuButton}
        >
          {menuOpen ? <RiCloseFill size={28} /> : <RiMenuLine size={28} />}
        </button>
      </div>

      {/* Mobile */}
      <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        <ul className={`borderBottom`}>
          {dataNav.map((link) => {
            const isActive = activeHash === link.href;

            return (
              <li
                key={link.id}
                className={isActive ? styles.active : ""}
                onClick={() => {
                  setActiveHash(link.href);
                  setMenuOpen(false);
                }}
              >
                <Link
                  href={`/${lang}${link.href}`}
                  className="text-3 fontWeight"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.wraberLangSwitcher}>
          <LangSwitcher
            checked={isEnglish}
            onToggle={() => {
              handleToggleLang();
              setMenuOpen(false);
            }}
          />
        </div>
      </nav>
    </>
  );
};
