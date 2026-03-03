import "../globals.css";
import { notFound } from "next/navigation";
import { Header, Freeze } from "@/components/index";
import { getDictionary } from "@/lib/getDictionary";

export const metadata = {
  title: "Ezzat Abdeen",
  description:
    "Ezzat Abdeen is a seasoned full-stack web developer and entrepreneur with a strong background in Management Information Systems. With a BSc in MIS, Ezzat combines technical expertise with entrepreneurial acumen to deliver cutting-edge web applications and solutions. His skills encompass a wide range of web development technologies and entrepreneurial strategies, enabling him to lead projects from concept to completion.",
};

export default async function RootLayout({ children, params }) {
  const { lang } = await params;

  if (!["ar", "en"].includes(lang)) {
    notFound();
  }

  const dir = lang === "ar" ? "rtl" : "ltr";
  const dict = getDictionary(lang);

  return (
    <html lang={lang} dir={dir}>
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
        
        <Header dict={dict} />
        {children}
      </body>
    </html>
  );
}
