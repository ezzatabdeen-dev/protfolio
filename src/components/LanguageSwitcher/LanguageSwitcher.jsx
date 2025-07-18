"use client";
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = pathname.startsWith('/en') ? 'ar' : 'en';
    router.push(`/${nextLocale}`);
  };

  return (
    <button onClick={toggleLocale}>
      🌐 {pathname.startsWith('/en') ? 'Arabic' : 'English'}
    </button>
  );
}
