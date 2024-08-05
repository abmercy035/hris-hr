// components/PerformanceTable.tsx
import React from 'react';
import styles from '@/styles/PerformanceTable.module.css';
import PercentageBar from '../performance/PercentageBar';
import Image from 'next/image';

interface TableProps {
  columns: Array<{ key: string }>;
  data: Array<{ [key: string]: any }>;
}

const PerformanceTable: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableBody}>
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.tableRow}>
            {columns.map((col, colIndex) => {
              const cellClass =
                col.key === 'title' ? styles.wideColumn :
                  col.key === 'percentage' ? styles.longColumn :
                    col.key === 'icon' ? styles.lastColumn :
                      styles.narrowColumn;
              return (
                <div
                  key={colIndex}
                  className={`${styles.tableCell} ${cellClass}`}
                >
                  {col.key === 'title' && row[col.key] ? (
                    <div className={styles.profileContainer}>
                      <Image src={`/images/${row[col.key]}.png`} alt="Profile" className={styles.profileImage} />
                      <span>{row[col.key]}</span>
                    </div>
                  ) : col.key === 'percentage' ? (
                    <PercentageBar percentage={row[col.key]} />
                  ) : (
                    row[col.key]
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceTable;
