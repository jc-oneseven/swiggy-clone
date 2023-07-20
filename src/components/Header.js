import { APP_LOGO } from "../constants";
import { Link } from "react-router-dom";

export const Title = () => {
  return <img alt="logo" src={APP_LOGO} />;
};

const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
