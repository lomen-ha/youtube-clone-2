import React from 'react';
import styles from './styles.module.css';

const Header = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_wrapper}>
        <img src="/images/logo.png" alt="logo" />
        <span>Youtube</span>
      </div>
      <div className={styles.search}>
        <input type="search" placeholder="Search..." />
        <button className={styles.search_button}>
          <img src="/images/search.png" alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Header;
