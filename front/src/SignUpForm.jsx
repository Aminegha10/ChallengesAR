import { useSelector, useDispatch } from "react-redux";
import {
  adduser,
  initialuser,
  inputemail,
  inputpassword,
  inputusername,
} from "./redux/features/userSlice";
import { useNavigate } from "react-router-dom";
export default function SignUpForm() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <>
      {/* <div className="login-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(adduser(user));
            dispatch(initialuser());
            navigate("/Login");
          }}
          className="login-form"
        >
          <h2>SignUp</h2>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              onChange={(e) => dispatch(inputusername(e.target.value))}
            />
          </div>
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
          <button type="submit">SignUp</button>
        </form>
      </div> */}
    </>
  );
}
