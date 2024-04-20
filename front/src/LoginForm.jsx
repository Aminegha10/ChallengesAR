/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import {
  loginuser,
  inputpassword,
  inputemail,
  inputusername,
  adduser,
  initialuser,
} from "./redux/features/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const dispatch = useDispatch();
  let { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
    document.getElementById("passwordlogin").value = "";
    document.getElementById("emaillogin").value = "";
    dispatch(initialuser());
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
    document.getElementById("Username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    dispatch(initialuser());
  };
  return (
    <div className="loginform">
      <div
        className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
      >
        <div className="form-container sign-up-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(adduser(user));
              dispatch(initialuser());
              handleSignInClick();
            }}
          >
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="UserName"
              id="Username"
              onChange={(e) => dispatch(inputusername(e.target.value))}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={(e) => dispatch(inputemail(e.target.value))}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={(e) => dispatch(inputpassword(e.target.value))}
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(loginuser(user, navigate));
            }}
          >
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              id="emaillogin"
              onChange={(e) => dispatch(inputemail(e.target.value))}
            />
            <input
              type="password"
              placeholder="Password"
              id="passwordlogin"
              onChange={(e) => dispatch(inputpassword(e.target.value))}
            />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /* <div className="login-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(loginuser(user, navigate));
          }}
          className="login-form"
        >
          <h2>Login</h2>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => dispatch(inputemail(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => dispatch(inputpassword(e.target.value))}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div> */
}
