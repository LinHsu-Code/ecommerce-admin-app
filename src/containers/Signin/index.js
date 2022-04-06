import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderAuth from "../../components/HeaderAuth";
import FooterAuth from "../../components/FooterAuth";
import Input from "../../components/UI/Input";
import "../../stylesheets/auth.css";
/**
 * @author Lin
 * @function Page:Signin
 */
const Signin = (props) => {
  return (
    <div className="auth-wrapper">
      <HeaderAuth />
      <main>
        <div className="auth-form-wrapper">
          <div className="auth-form-header">
            <h1>Sign in to eCommerce</h1>
          </div>
          <Form className="auth-form">
            <Input
              label="Email"
              placeholder="Email"
              value=""
              type="email"
              onChange={() => {}}
            />

            <Input
              label="Password"
              placeholder="Password"
              value=""
              type="password"
              onChange={() => {}}
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
