import { Link } from "react-router-dom";
import Logo from "../assets/img/foodvilla.png";
import UseOnline from "../utils/UseOnline";
import { useState } from "react";

export const Title = () => {
  return <img alt="logo" src={Logo} data-testid="logo" />;
};

const Header = () => {
  const isOnline = UseOnline();
  const [cartItems, setCartItems] = useState([]);

  return (
    <header className="header">
      <Title />
      <nav>
        <ul>
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
              Cart- {cartItems.length} items
            </Link>
          </li>
        </ul>
      </nav>
      <div data-testid="online-status">{isOnline ? "✅" : "🛑"}</div>
    </header>
  );
};

export default Header;
