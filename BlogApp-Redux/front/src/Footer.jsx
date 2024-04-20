import { useDispatch } from "react-redux";
import { initialuser, logged } from "./redux/features/userSlice";
export default function Footer() {
  const dispatch = useDispatch();
  var logout;
  logout = (
    <div className="Login_Registration">
      <button
        onClick={() => {
          dispatch(logged());
          dispatch(initialuser());
          localStorage.removeItem("username");
        }}
      >
        Logout
      </button>
    </div>
  );
  return (
    <>
      <footer>
        <div className="container">
          <div className="logo">BlogApp</div>
          <div>{logout}</div>
        </div>
      </footer>
    </>
  );
}
