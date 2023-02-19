import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link to="/" />
      </li>
      <li>
        <Link to="/about" />
      </li>
      <li>
        <Link to="/menu" />
      </li>
      <li>
        <Link to="/booking" />
      </li>
      <li>
        <Link to="/order" />
      </li>
      <li>
        <Link to="/login" />
      </li>
    </ul>
  );
};

export default Menu;
