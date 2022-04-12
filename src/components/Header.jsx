import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Ya lo vi 👀</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Mi lista</Link>
            </li>
            <li>
              <Link to="/watched">Vistas</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                Agregar Peliculas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
