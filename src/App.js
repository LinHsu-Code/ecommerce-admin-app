import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Product from "./containers/Product";
import Category from "./containers/Category";
import Order from "./containers/Order";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { isUserLoggedIn } from "./actions";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(isUserLoggedIn());
  // }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="product" element={<Product />} />
            <Route path="category" element={<Category />} />
            <Route path="order" element={<Order />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
