import React from "react";
import { Form, Button } from "react-bootstrap";
import HeaderAuth from "../../components/HeaderAuth";
import FooterAuth from "../../components/FooterAuth";
import Input from "../../components/UI/Input";
import "../../stylesheets/auth.css";
/**
 * @author Lin
 * @function Page:Signup
 */
const Signup = (props) => {
  return (
    <div>
      <HeaderAuth />
      <main>
        <div className="auth-form-wrapper">
          <div className="auth-form-header">
            <h1>Sign up to eCommerce</h1>
          </div>
          <Form className="auth-form">
            <div className="flex-row">
              <Input
                label="First Name"
                placeholder="First Name"
                value=""
                type="text"
                onChange={() => {}}
              />
              <Input
                label="Last Name"
                placeholder="Last Name"
                value=""
                type="text"
                onChange={() => {}}
              />
            </div>
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
              Sign up
            </Button>
          </Form>
        </div>
      </main>
      <FooterAuth />
    </div>
  );
};
export default Signup;
