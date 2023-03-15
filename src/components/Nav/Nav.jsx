import React from 'react';
import SearchBar from './SearchBar';

function Nav() {
  function handleSearch(id) {
    console.log(`Buscando el ID ${id}...`);
  }

  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <SearchBar onSearch={handleSearch} />
    </nav>
  );
}

export default Nav;
