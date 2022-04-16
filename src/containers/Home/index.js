import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link, Outlet } from "react-router-dom";
import "./style.css";

/**
 * @author Lin
 * @function Page:Home
 */
const Home = (props) => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState.authenticate) {
      navigate("/signin");
    }
  }, [authState, navigate]);

  return (
    <div className="content-container">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};
export default Home;
