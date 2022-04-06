import React, { useRef } from 'react';
import styles from './styles.module.css';

const Header = ({ searchVidoes }) => {
  const inputRef = useRef();

  const search = () => {
    searchVidoes(inputRef.current.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchVidoes(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo_wrapper}>
        <img src="/images/logo.png" alt="logo" />
        <span>Youtube</span>
      </div>
      <div className={styles.search}>
        <input
          type="search"
          placeholder="Search..."
          ref={inputRef}
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <button className={styles.search_button} onClick={() => search()}>
          <img src="/images/search.png" alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Header;
