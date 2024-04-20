/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.user);
  // var logsign;
  // logsign = (
  //   <div className="Login_Registration">
  //     <button>
  //       <Link className="links" to="/Login">
  //         Login
  //       </Link>
  //     </button>
  //     <button>
  //       <Link className="links" to="/Signup">
  //         Signup
  //       </Link>
  //     </button>
  //   </div>
  // );
  //   }
  return (
    <>
      <header>
        <div className="menu-bar">
          <div className="image">
            <img
              src="./t.jpeg"
              alt=""
            />
          </div>
          {/* {!isLoggedIn && logsign} */}
          {isLoggedIn && (
            <ul>
              <li>
                <Link className="links" to="/Home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="links" to="/New-post">
                  New-Posts
                </Link>
              </li>
            </ul>
          )}
        </div>
      </header>
    </>
  );
}
