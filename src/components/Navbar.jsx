import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        🎓 MyCareer Guide
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/assessment">
          Assessment
        </Link>

        <Link to="/careers">
          Careers
        </Link>

        <Link to="/scholarships">
          Scholarships
        </Link>

        <Link to="/resources">
          Learning
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;