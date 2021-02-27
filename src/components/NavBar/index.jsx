import './styles.scss';
import Logo from './assets/brain.png';
import { Link } from 'react-router-dom';

import Tilt from 'react-tilt';

const NavBar = () => {
  return (
    <nav>

      <Tilt className="Tilt" options={{ max : 55 }}  >
        <div className="Tilt-inner">
          <img src={Logo} alt="Logo"/>
        </div>
      </Tilt>

      <div className="navbar-menu">
        <Link to="/">Sign out</Link>
        <Link to="/">Sign out</Link>
      </div>

    </nav>
  );
}

export default NavBar;