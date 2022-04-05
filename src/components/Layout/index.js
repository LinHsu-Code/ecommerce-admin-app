import Header from "../Header";
import { Outlet } from "react-router-dom";
/**
 * @author Lin
 * @function Layout
 */
const Layout = (props) => {
  return (
    <div>
      <Header />
      <Outlet />
      <div>footer</div>
    </div>
  );
};
export default Layout;
