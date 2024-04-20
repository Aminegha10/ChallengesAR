/* eslint-disable no-unused-vars */
// postsSlice.js (example)
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts_array: [],
    postInput: {},
    loading: true,
    error: null,
    image: null,
  },

  reducers: {
    // updatetitle: (state, action) => {
    //   console.log(action.payload)
    //   // state.posts_array = state.posts_array.map((item, index) => {
    //   //   if (action.payload == index)
    //   //     return (item.title = state.postInput.title);
    //   // })
    // },
    inputimage: (state, action) => {
      state.postInput = { ...state.postInput, image: action.payload };
    },
    initialpost: (state, action) => {
      state.postInput = { title: "", description: "", image: "" };
    },
    // usernameconnected: (state, action) => {
    //   state.postInput = action.payload;
    // },
    fetchPostsSuccess: (state, action) => {
      state.loading = false;
      state.posts_array = action.payload;
    },
    fetchPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addpostFailed: (state, action) => {
      state.error = action.payload;
    },
    deleteposts: (state, action) => {
      state.posts_array = state.posts_array.filter(
        (item) => item.title != action.payload
      );
    },
    inputDescription: (state, action) => {
      state.postInput = { ...state.postInput, description: action.payload };
    },
    inputTitle: (state, action) => {
      state.postInput = { ...state.postInput, title: action.payload };
    },
  },
});
export function addpost(postData) {
  return async function (dispatch) {
    try {
      let response = await axios.post(
        "http://localhost:3000/posts/addpost",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(postData);
    } catch (err) {
      dispatch(addpostFailed(err));
    }
  };
}
// export function redirect() {
//   return async function (dispatch) {
//     try {
//       let res = axios.get("http://localhost:3000/");
//       var a = res.responseURL;
//     } catch {}
//   };
// }
export function fetchposts() {
  return async function (dispatch) {
    try {
      // const username = localStorage.getItem("username");
      let response = await axios.get("http://localhost:3000/posts/getposts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      dispatch(fetchPostsSuccess(response.data));
    } catch (err) {
      dispatch(fetchPostsFailure(err));
    }
  };
}
export function deletePost(title) {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3000/posts/deletepost/${title}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      dispatch(deleteposts(title));
    } catch (err) {
      dispatch(fetchPostsFailure(err));
    }
  };
}
export const {
  // updatetitle,
  inputimage,
  initialpost,
  inputTitle,
  inputDescription,
  fetchPostsSuccess,
  fetchPostsFailure,
  addpostFailed,
  deleteposts,
  addpostSuccess,
} = postsSlice.actions;
export default postsSlice.reducer;

// extraReducers: (builder) => {
//   builder
//     .addCase(fetchPosts.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     })
//     .addCase(fetchPosts.fulfilled, (state, action) => {
//       state.loading = false;
//       state.posts = action.payload;
//     })
//     .addCase(fetchPosts.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message;
//     });
// },
//   export const fetchPosts = () => async (dispatch) => {
//   dispatch(fetchPostsStart());
//   try {
//     const response = await axios.get('http://localhost:3000/getposts');
//     dispatch(fetchPostsSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchPostsFailure(error.message));
//   }
// };

// (similar slices for comments and ui)
