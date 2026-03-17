"use client";
import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    const track = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();

        const message = `
🌟 زائر جديد لموقعك!
📍 الموقع: ${data.city}, ${data.country_name}
🌐 الـ IP: ${data.ip}
🏢 الشبكة: ${data.org}
📱 الجهاز: ${navigator.userAgent.includes("Mobi") ? "Mobile" : "Desktop"}
⏰ الوقت: ${new Date().toLocaleString('ar-EG')}
        `;

        await fetch(`https://api.telegram.org/bot8242773675:AAE0rNakvY0NDmetFoCqdW232hNQwTfGvlo/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: '1258295812',
            text: message,
          }),
        });
      } catch (e) { console.error(e); }
    };
    track();
  }, []);

  return null;
}
