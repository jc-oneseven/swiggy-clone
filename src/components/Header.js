import { Link } from "react-router-dom";
import Logo from "../assets/img/foodvilla.png";
import { useState } from "react";

export const Title = () => {
  return <img className="h-full" alt="logo" src={Logo} data-testid="logo" />;
};

const Header = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <header className="flex justify-between items-center h-20 border-b border-b-slate-400 p-4">
      <Title />
      <nav>
        <ul className="flex justify-between gap-4">
          <li>
            <Link to={"/"}> Home </Link>
          </li>
          <li>
            <Link to={"/about"}> About </Link>
          </li>
          <li>
            <Link to={"/contact"}> Contact </Link>
          </li>
          <li className="px-2">
            <Link to="/cart" data-testid="cart">
              Cart ({cartItems.length})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
