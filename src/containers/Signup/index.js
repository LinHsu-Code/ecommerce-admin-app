import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Form, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import "../../stylesheets/auth.css";
/**
 * @author Lin
 * @function Page:Signup
 */
const Signup = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <div className="content-container">
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
    </div>
  );
};
export default Signup;
