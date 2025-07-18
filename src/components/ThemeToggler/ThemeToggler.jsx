// "use client";
// import { useEffect, useState } from "react";

// export default function ThemeToggler() {
//   const [theme, setTheme] = useState("");

//   useEffect(() => {
//     const saved = localStorage.getItem("theme");
//     if (saved) {
//       setTheme(saved);
//       document.documentElement.setAttribute("data-theme", saved);
//     } else {
//       const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//       const defaultTheme = prefersDark ? "dark" : "light";
//       setTheme(defaultTheme);
//       document.documentElement.setAttribute("data-theme", defaultTheme);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   return (
//     <button onClick={toggleTheme}>
//       {theme === "dark" ? "Light Mod" : "Dark Mod"}
//     </button>
//   );
// }