/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchposts,
  deletePost,
  // updatetitle,
  // inputTitle,
} from "./redux/features/postsSlice"; // Import actions
import { useState } from "react";
import axios from "axios";

export default function PostList() {
  const { posts_array, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchposts());
  }, []);
  // const [isEditing, setIsEditing] = useState(false);
  // let todoContent;
  // if (isEditing) {
  //   todoContent = (
  //     <>
  //       <input
  //         value={posts_array[index].title}
  //         onChange={(e) => {
  //           dispatch(updatetitle(e.target.value));
  //         }}
  //       />
  //       <button onClick={() => setIsEditing(false)}>Save</button>
  //     </>
  //   );
  // } else {
  //   todoContent = (
  //     <>
  //       {item.title}
  //       <button onClick={() => setIsEditing(true)}>Edit</button>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="Home">
        {loading ? (
          <div>...Loading</div>
        ) : error ? (
          <div>
            <h1>There is an error in the server</h1>
            {error}
          </div>
        ) : posts_array && posts_array.length > 0 ? (
          <div className="posts">
            {posts_array.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  <div className="card2">
                    <ul>
                      <li className="heading">{item.title}</li>
                      <li className="desc">{item.description}</li>
                      <button onClick={() => dispatch(deletePost(item.title))}>
                        delete
                      </button>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty">No Posts Here</div>
        )}
      </div>
    </>
  );
}
