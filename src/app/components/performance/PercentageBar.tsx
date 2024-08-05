import React from 'react';
import styles from '@/styles/progressBar.module.css';

const PercentageBar = ({ percentage }: { percentage: number }) => {
  return (
    <div className={styles.progressBarWrapper}>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar} style={{ width: `${percentage}%` }}></div>
      </div>
      <div className={styles.percentageText}>
        {percentage}%
      </div>
    </div>
  );
};

export default PercentageBar;
