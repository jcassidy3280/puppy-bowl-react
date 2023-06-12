import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
   <nav>
    <Link to='/'className="nav-link">Home  </Link>
    <Link to='/all' className="nav-link">Roster  </Link>
    {/* <Link to='/myTeam'>My Team  </Link> */}
   </nav>
  );
};

export default NavBar;