/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { username: "", email: "", password: "" },
    isLoggedIn: false,
  },
  reducers: {
    // checktokenreload: (state, action) => {
    //   state.isLoggedIn = true;
    // },
    inputusername: (state, action) => {
      state.user = { ...state.user, username: action.payload };
    },
    logged: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    inputemail: (state, action) => {
      state.user = { ...state.user, email: action.payload };
    },
    inputpassword: (state, action) => {
      state.user = { ...state.user, password: action.payload };
    },
    initialuser: (state, action) => {
      state.user = { username: "", email: "", password: "" };
    },
  },
});
export function adduser(userData) {
  return async function () {
    await axios.post("http://localhost:3000/users/register", userData);
  };
}
export function loginuser(userData, navigate) {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3000/users/login",
      userData
    );
    console.log(response);
    if (response.status == 200) {
      localStorage.setItem("token", `Bearer ${response.data}`);
      // localStorage.setItem("username", response.data.username);
      dispatch(logged());
      navigate("/Home");
    }
  };
}
export const {
  initialuser,
  logged,
  failedadduser,
  inputemail,
  inputpassword,
  inputusername,
} = userSlice.actions;
export default userSlice.reducer;
