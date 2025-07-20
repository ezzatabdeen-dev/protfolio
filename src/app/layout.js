import "./globals.css";
import { Header, Footer } from "@/components/index";

export const metadata = {
  title: "Ezzat Abdeen",
  description:
    "Ezzat Abdeen is a seasoned full-stack web developer and entrepreneur with a strong background in Management Information Systems. With a BSc in MIS, Ezzat combines technical expertise with entrepreneurial acumen to deliver cutting-edge web applications and solutions. His skills encompass a wide range of web development technologies and entrepreneurial strategies, enabling him to lead projects from concept to completion.",
};

export default function LocaleLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="512x512" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Optional Meta for Theme */}
        <meta name="theme-color" content="#0071E0" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        {/* Script to block DevTools and right-click */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("contextmenu", (e) => e.preventDefault());

              document.addEventListener("keydown", function (e) {
                if (
                  e.key === "F12" ||
                  (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
                  (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") ||
                  (e.ctrlKey && e.key.toLowerCase() === "u") ||
                  (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c")
                ) {
                  e.preventDefault();
                }
              });

              document.addEventListener("dragstart", (e) => e.preventDefault());

              let devtoolsOpened = false;
              setInterval(() => {
                const start = performance.now();
                debugger;
                const duration = performance.now() - start;
                if (duration > 100) {
                  if (!devtoolsOpened) {
                    devtoolsOpened = true;
                    document.body.innerHTML = "";
                  }
                }
              }, 500);
            `,
          }}
        />
      </body>
    </html>
  );
}


/*
import "./globals.css";
import { Header, Footer } from "@/components/index";

export const metadata = {
  title: "Ezzat Abdeen",
  description:
    "Ezzat Abdeen is a seasoned full-stack web developer and entrepreneur with a strong background in Management Information Systems. With a BSc in MIS, Ezzat combines technical expertise with entrepreneurial acumen to deliver cutting-edge web applications and solutions. His skills encompass a wide range of web development technologies and entrepreneurial strategies, enabling him to lead projects from concept to completion.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "32x32" },
    ],
  },
};

export default function LocaleLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
 */


