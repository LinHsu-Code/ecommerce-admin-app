import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Products from "./components/Products";
import Orders from "./components/Orders";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isUserLoggedIn } from "./actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            >
              <Route path="products" element={<Products />} />
              <Route path="orders" element={<Orders />} />
            </Route>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
