/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "./Header.jsx";
import Home from "./home.jsx";
import NewPostForm from "./NewPostForm.jsx";
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUpForm.jsx";
import Footer from "./Footer.jsx";
import Error from "./Error.jsx";
import { Routes, Route, ProtectedRoute } from "react-router-dom";
import { title } from "./index.jsx";
import "./App.css";

export default function App() {
  const [posts, setPosts] = useState([]);
  return (
    <div className="App">
      <Header title={title} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Singup" element={<SignUpForm />} />
        <Route
          path="/New-post"
          element={
            <ProtectedRoute>
              <NewPostForm setPosts={setPosts} posts={posts} />
            </ProtectedRoute>
          }
        />
        {/* newposts*/}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer title={title} />
    </div>
  );
}
