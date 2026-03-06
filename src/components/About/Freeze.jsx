'use client';

import React, { useEffect } from 'react';
import styles from './Freeze.module.css';

export const Freeze = () => {
  useEffect(() => {
    const originalHtmlStyle = document.documentElement.style.overflow;
    const originalBodyStyle = document.body.style.overflow;
    
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const preventDefault = (e) => e.preventDefault();

    const handleKeyDown = (e) => {
      const isDevTools = 
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === 'U');
        
      if (isDevTools) {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', preventDefault);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.documentElement.style.overflow = originalHtmlStyle;
      document.body.style.overflow = originalBodyStyle;
      window.removeEventListener('contextmenu', preventDefault);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.errorText} title="Resource was permanently removed.">
        <div>Error 410</div>
        <div>17.05.2019 — 06.03.2026</div>
      </div>
    </div>
  );
};
