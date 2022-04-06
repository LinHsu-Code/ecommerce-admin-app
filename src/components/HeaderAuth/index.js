import { Link } from "react-router-dom";
/**
 * @author Lin
 * @function Header
 */
const HeaderAuth = (props) => {
  return (
    <nav className="auth-header-wrapper">
      <div className="auth-header">
        <Link to="/" className="auth-header-home-link">
          Home
        </Link>
      </div>{" "}
    </nav>
  );
};
export default HeaderAuth;
