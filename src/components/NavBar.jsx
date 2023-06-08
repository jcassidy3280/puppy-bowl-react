import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
   <nav>
    <Link to='/'>Home<br></br></Link>
    <Link to='/allplayers'>Puppy Player Roster<br></br></Link>
    <Link to='/:id'>Selected Player Details</Link>
   </nav>
  );
};

export default NavBar;