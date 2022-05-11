import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Form, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { signup } from "../../actions";
import "../../stylesheets/style.css";
/**
 * @author Lin
 * @function Page:Signup
 */
const Signup = (props) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   authState.authenticate && navigate("/product");
  // }, []);

  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(signup(user));
    //userState.load && navigate("/signin");
  };

  return (
    <div className="content-container">
      <div className="auth-form-wrapper">
        <div className="auth-form-header">
          <h1>Sign up to eCommerce</h1>
        </div>
        <Form className="auth-form" onSubmit={userSignup}>
          <div className="flex-row">
            <Input
              controlId="forFirstName"
              label="First Name"
              placeholder="First Name"
              value={firstName}
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <Input
              controlId="forLastName"
              label="Last Name"
              placeholder="Last Name"
              value={lastName}
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <Input
            controlId="forEmail"
            label="Email"
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <Input
            controlId="forPassword"
            label="Password"
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="errorMessage">{userState.errorMessage}</p>
          <Button className="auth-button" variant="primary" type="submit">
            Sign up
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Signup;
