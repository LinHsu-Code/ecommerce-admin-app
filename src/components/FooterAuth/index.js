import React from "react";
import { Link } from "react-router-dom";
/**
 * @author Lin
 * @function Footer
 */
const FooterAuth = (props) => {
  return (
    <footer className="auth-footer">
      <ul className="auth-footer-wrapper">
        <li className="auth-footer-list-item">
          <Link to="#" className="auth-footer-link">
            Terms
          </Link>
        </li>
        <li className="auth-footer-list-item">
          <Link to="#" className="auth-footer-link">
            Privacy
          </Link>
        </li>
        <li className="auth-footer-list-item">
          <Link to="#" className="auth-footer-link">
            Security
          </Link>
        </li>
        <li className="auth-footer-list-item">
          <Link to="#" className="auth-footer-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </footer>
  );
};
export default FooterAuth;
