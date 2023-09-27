import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Meshi Co.</Link>
      <SearchOrder />
    </header>
  );
}

export default Header;
