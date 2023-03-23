import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const NavLinkMe = ({ to, children, ...props }) => {
  return (
    <NavLink
      {...props}
      to={to}
      className={({ isActive }) => isActive ? styles.active : styles.disable
      }
    >
      {children}
    </NavLink>
  );
};

function Nav(props) {
  const addRandomCharacter = () => {
    const randomCharacterId = Math.floor(Math.random() * 826) + 1; 
    props.onSearch(randomCharacterId); 
  };

  return (
    <div className={styles.container}>
      <NavLinkMe to='/home' > Home</NavLinkMe>
      <NavLinkMe to='/about' > About</NavLinkMe>
      <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
      <button className={styles.randomButton} onClick={addRandomCharacter}>Random Card</button> 
    </div>
  );
}

export default Nav;
