import Logo from '../MovieLogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex border border-t-0 space-x-8 items-center pl-3 py-4">
      <img className="w-[50px]" src={Logo} alt="imdb logo" />
      <Link to="/" className="text-blue-500 text-xl font-bold">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-500 text-xl font-bold">
        WatchList
      </Link>
    </div>
  );
};

export default Navbar;
