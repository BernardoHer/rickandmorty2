import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx'
import styles from './Nav.module.css'

function Nav(props) {
 
  return (
    <nav className={styles.container}>
      <div>
        <SearchBar
          onSearch={(characterID) => props.onSearch(characterID)}
        />
      </div>
    </nav>
  );
}

export default Nav;
