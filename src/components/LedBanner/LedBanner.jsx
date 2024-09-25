import React from 'react';
import styles from './LedBanner.module.css';

function LedBanner({ text }) {
  return (
    <div className={styles.ledContainer}>
      <span className={styles.ledText}>
        {text}
      </span>
    </div>
  );
}

export default LedBanner;