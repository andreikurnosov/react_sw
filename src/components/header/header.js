import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#0">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#0">People</a>
        </li>
        <li>
          <a href="#0">Planets</a>
        </li>
        <li>
          <a href="#0">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
