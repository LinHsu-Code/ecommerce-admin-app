import Header from "../Header";
import { Outlet } from "react-router-dom";
import { Stack } from "react-bootstrap";
import "./style.css";
/**
 * @author Lin
 * @function Layout
 */
const Layout = () => {
  return (
    <Stack className="supper-container">
      <Header />
      <Outlet />
      <div className="footer">footer</div>
    </Stack>
  );
};
export default Layout;
