/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import PostList from "./PostList";
import Header from "./Header.jsx";
import NewPostForm from "./NewPostForm.jsx";
import LoginForm from "./LoginForm.jsx";
import Footer from "./Footer.jsx";
import "./nn.css";
import "./posts.css";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";
import "./newposts.css";
import "./App.css";
import "./log.css";
import "./header.css";
import "./footer.css";
import ProtectedRoutes from "./ProtectedRoutes";

import { useNavigate } from "react-router-dom";
export default function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="nn">
              <div className="headss">This is the landing page</div>
              <div className="og">
                <button
                  onClick={() => {
                    navigate("/Login");
                  }}
                >
                  Login
                </button>
              </div>
              <div className="container">
                <div className="card">
                  <img
                    src="https://static.posters.cz/image/hp/66923.jpg"
                    alt="Card Image"
                  />
                  <div className="card-content">
                    <h2>Card Title</h2>
                    <p>
                      This is a simple card description. You can add more
                      details here.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://static.posters.cz/image/350/affiches-et-posters/the-dark-knight-trilogy-joker-i198202.jpg"
                    alt="Card Image"
                  />
                  <div className="card-content">
                    <h2>Card Title</h2>
                    <p>
                      This is a simple card description. You can add more
                      details here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/Home"
          element={
            <ProtectedRoutes>
              <Header />
              <PostList />
              <Footer />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <LoginForm />
            </>
          }
        />

        <Route
          path="/New-post"
          element={
            <ProtectedRoutes>
              <Header />
              <NewPostForm />
              <Footer />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
}
