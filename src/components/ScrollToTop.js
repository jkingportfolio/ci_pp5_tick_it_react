import React from 'react';
import styles from "../styles/ScrollToTop.module.css";

const ScrollToTop = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className={styles.ScollButton} onClick={handleClick}>
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}

export default ScrollToTop;