import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderAuth from "../../components/HeaderAuth";
import FooterAuth from "../../components/FooterAuth";
import Input from "../../components/UI/Input";
import "../../stylesheets/auth.css";

//import { postLogin } from "../../store/userSlice";
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

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  //const user = useSelector((state) => state.user);

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
