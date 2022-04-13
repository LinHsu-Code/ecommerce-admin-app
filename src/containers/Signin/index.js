import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import HeaderAuth from "../../components/HeaderAuth";
import FooterAuth from "../../components/FooterAuth";
import Input from "../../components/UI/Input";
import "../../stylesheets/auth.css";

import { login } from "../../actions";

/**
 * @author Lin
 * @function Page:Signin
 */
const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  let navigate = useNavigate();

  useEffect(() => {
    if (auth.authenticate) {
      navigate("/", { replace: true });
    }
  }, []);

  const userLogin = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user)).then(() => {
      if (auth.authenticate) {
        navigate("/");
      }
    });
    console.log(auth.authenticate);
  };

  return (
    <div className="auth-wrapper">
      <HeaderAuth />
      <main>
        <div className="auth-form-wrapper">
          <div className="auth-form-header">
            <h1>Sign in to eCommerce</h1>
          </div>
          <Form className="auth-form" onSubmit={userLogin}>
            <Input
              label="Email"
              placeholder="Email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              placeholder="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="auth-button" variant="primary" type="submit">
              Sign in
            </Button>
          </Form>
          <p className="signup-link-wrapper">
            New to eCommerce? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </main>
      <FooterAuth />
    </div>
  );
};
export default Signin;
