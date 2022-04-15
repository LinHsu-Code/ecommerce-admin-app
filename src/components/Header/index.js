import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Navbar, Container, Nav } from "react-bootstrap";
import { logout } from "../../actions";
/**
 * @author Lin
 * @function Header
 */
const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const userLogout = () => {
    dispatch(logout());
    navigate("/signin", { replace: true });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={pathname} className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          {auth.authenticate ? (
            <Nav activeKey={pathname}>
              <Nav.Link href="#" onClick={userLogout}>
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav activeKey={pathname}>
              <Nav.Link href="/signin">Sign In</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
