import React from 'react';
import styles from '../styles/stylishbtn.module.scss';
import Link from 'next/link';

const StylishBtn = ({ children, href }) => {
  return (
    <div className={styles.buttons}>
      <Link href={href}>
        <button className={styles.blob_btn}>
          {children}
          <span className={styles.blob_btn__inner}>
            <span className={styles.blob_btn__blobs}>
              <span className={styles.blob_btn__blob}></span>
              <span className={styles.blob_btn__blob}></span>
              <span className={styles.blob_btn__blob}></span>
              <span className={styles.blob_btn__blob}></span>
            </span>
          </span>
        </button>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        height={75}
        width={125}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend
              in2="goo"
              in="SourceGraphic"
              result="mix"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default StylishBtn;
