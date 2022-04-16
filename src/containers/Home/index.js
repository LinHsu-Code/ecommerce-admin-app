import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
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
      <div className="sidebar">s</div>
      <div className="main">m</div>
    </div>
  );
};
export default Home;
