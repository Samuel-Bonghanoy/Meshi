import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="font-rubik flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 font-bold uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Meshi
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
