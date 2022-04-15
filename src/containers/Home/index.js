import { Row, Col } from "react-bootstrap";
import "./style.css";

/**
 * @author Lin
 * @function Page:Home
 */
const Home = (props) => {
  return (
    <Row className="content-container">
      <Col md={2} className="sidebar">
        side bar
      </Col>
      <Col md={10} className="main">
        container
      </Col>
    </Row>
  );
};
export default Home;
