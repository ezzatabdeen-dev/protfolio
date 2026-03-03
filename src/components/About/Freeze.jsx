'use client';

import React, { useEffect } from 'react';
import styles from './Freeze.module.css';

export const Freeze = () => {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const preventDefault = (e) => e.preventDefault();

    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === 'U')
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', preventDefault);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      window.removeEventListener('contextmenu', preventDefault);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <h1 className={styles.errorText}>
        Error 410
      </h1>
    </div>
  );
};
