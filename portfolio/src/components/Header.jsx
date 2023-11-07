import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Info de nosotros</Link></li>
          <li><Link to="/creations">Mis Creaciones</Link></li>
          <li><Link to="/favorites">Favoritos</Link></li>
          {/* Agrega enlaces adicionales según sea necesario */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;