import { Form, Button } from "react-bootstrap";
import HeaderAuth from "../../components/HeaderAuth";
import FooterAuth from "../../components/FooterAuth";
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
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
