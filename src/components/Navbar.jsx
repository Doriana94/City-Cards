import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex gap-10 mb-10">
      <li>
        <Link to="/" className="hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link to="/contatti" className="hover:underline">
          Contatti
        </Link>
      </li>
      <li>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </li>
      <li>
        <Link to="/cards-children" className="hover:underline">
          Cards-details
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
