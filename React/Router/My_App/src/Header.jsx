/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function Header(props) {
  //   const setlog = props.login.setIsLoggedIn;
  //   const log = props.login.isLoggedIn;
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [username, setUsername] = useState("");
  //   const [showLoginForm, setShowLoginForm] = useState(false);
  //   const [showRegistreForm, setShowRegistreForm] = useState(false);
  //   // Function to toggle the display of the login form
  //   const toggleLoginForm = () => {
  //     setShowLoginForm(true);
  //     setShowRegistreForm(false);
  //   };
  //   const toggleRegistreForm = () => {
  //     setShowRegistreForm(true);
  //     setShowLoginForm(false);
  //   };
  //   const toggleLogOut = () => {
  //     setlog(false);
  //   };
  var btns;
  //   if (log) {
  //     btns = (
  //       <div className="Login_Registration">
  //         <button onClick={toggleLogOut}>Logout</button>
  //       </div>
  //     );onClick={toggleRegistreForm}
  //   }onClick={toggleLoginForm}
  //   if (log == false) {
  btns = (
    <div className="Login_Registration">
      <button>
        <Link className="links" to="/Login">
          Login
        </Link>
      </button>
      <button>
        <Link className="links" to="/Singup">
          Signup
        </Link>
      </button>
    </div>
  );
  //   }
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">{props.title}</div>
          <ul>
            <li>
              <Link className="links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="links" to="/New-post">
                New-Posts
              </Link>
            </li>
          </ul>
          {btns}
        </div>
      </header>
      {/* <div>
        {showLoginForm && (
          <LoginForm
            user_data={{ email, password }}
            set_functions={{
              setEmail,
              setPassword,
              setlog,
              setUsername,
              setShowLoginForm,
            }}
            user={user}
          />
        )}
        {showRegistreForm && (
          <SignUpForm
            user_data={{ email, password, username }}
            set_functions={{ setEmail, setPassword, setUsername }}
            user={user}
          />
        )}
      </div> */}
    </>
  );
}
