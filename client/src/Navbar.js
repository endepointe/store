import React from 'react';
import {
  Link
} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">link 1</Link>
        </li>
        <li>
          <Link to="/">link 2</Link>
        </li>
        <li>
          <Link to="/">link 3</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;