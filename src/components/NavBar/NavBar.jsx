import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>FakeStore</h1>
      </Link>
      <nav>
        <ul>
          <li><NavLink to={`/category/cocina`} >Cocina</NavLink></li>
          <li><NavLink to={`/category/comedor`} >Comedor</NavLink></li>
          <li><NavLink to={`/category/dormitorio`} >Dormitorio</NavLink></li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
