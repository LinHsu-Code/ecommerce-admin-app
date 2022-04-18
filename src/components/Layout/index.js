import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Navbar, Container, Nav, Stack } from "react-bootstrap";
import { logout } from "../../actions";
import { Link, Outlet } from "react-router-dom";
import "../../stylesheets/style.css";
/**
 * @author Lin
 * @function Layout
 */
const Layout = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!authState.authenticate) {
      navigate("/signin");
    }
  }, [authState, navigate]);

  const userLogout = () => {
    dispatch(logout());
    navigate("/signin", { replace: true });
  };

  return (
    <Stack className="supper-container">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            {authState.authenticate ? (
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

      <div className="content-container">
        {pathname.startsWith("/sign") ? (
          <Outlet />
        ) : (
          <>
            <div className="sidebar">
              <ul>
                <li>
                  <Link to="/product">Product</Link>
                </li>
                <li>
                  <Link to="/category">Category</Link>
                </li>
                <li>
                  <Link to="/order">Order</Link>
                </li>
              </ul>
            </div>
            <div className="main">
              <Outlet />
            </div>
          </>
        )}
      </div>
      <div className="footer">footer</div>
    </Stack>
  );
};
export default Layout;
