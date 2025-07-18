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
