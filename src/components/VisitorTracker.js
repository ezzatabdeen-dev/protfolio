"use client";
import { useEffect } from 'react';

export const VisitorTracker = () => {
  useEffect(() => {
    const track = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();

        // 1. Device detection
        const ua = navigator.userAgent;
        let deviceModel = "Unknown Device";
        if (/android/i.test(ua)) deviceModel = "Android Phone";
        else if (/iPhone/i.test(ua)) deviceModel = "iPhone";
        else if (/Windows/i.test(ua)) deviceModel = "Windows PC";
        else if (/Mac/i.test(ua)) deviceModel = "MacBook/iMac";

        // 2. Google Maps Link (Using latitude and longitude)
        const googleMapsUrl = `https://www.google.com/maps?q=${data.latitude},${data.longitude}`;

        // 3. Clean English Message
        const message = `
New Visitor Alert
----------------------
Location: ${data.city}, ${data.region}, ${data.country_name}
Map: ${googleMapsUrl}
IP Address: ${data.ip}
Network: ${data.org}
Device: ${deviceModel}
Browser: ${ua.split(' ').pop()}
Time: ${new Date().toLocaleString('en-US')}
        `;

        await fetch(`https://api.telegram.org/bot8242773675:AAE0rNakvY0NDmetFoCqdW232hNQwTfGvlo/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: '1258295812',
            text: message,
          }),
        });
      } catch (e) { 
        console.error("Tracking failed", e); 
      }
    };
    track();
  }, []);

  return null;
}
