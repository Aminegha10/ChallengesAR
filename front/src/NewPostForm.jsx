/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addpost,
  inputTitle,
  inputDescription,
  initialpost,
  inputimage,
} from "./redux/features/postsSlice";
export default function NewPostForm() {
  const navigate = useNavigate(); // Use the useNavigate hook
  const { postInput } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  function Addpost(e) {
    // dispatch(usernameconnected(`${localStorage.getItem("username")}`));
    // console.log(postInput);
    dispatch(addpost(postInput));
    dispatch(initialpost());
    e.preventDefault();
    // Prevent the default form submission behavior
    navigate("/Home");
    // Navigate to the home page
  }

  return (
    <>
      <div className="newposts">
        <div className="container">
          <div className="card">
            <div className="card-image"></div>
            <form className="card-form" onSubmit={(e) => Addpost(e)}>
              <div className="input">
                <input
                  type="text"
                  className="input-field"
                  onChange={(e) => {
                    dispatch(inputTitle(e.target.value));
                  }}
                />
                <label className="input-label">Title</label>
              </div>
              <div className="input">
                <input
                  type="text"
                  className="input-field"
                  onChange={(e) => {
                    dispatch(inputDescription(e.target.value));
                  }}
                />
                <label className="input-label">Description</label>
              </div>
              <div className="input">
                <input
                  type="file"
                  className="input-field"
                  onChange={(e) => {
                    const url = URL.createObjectURL(e.target.files[0]);
                    dispatch(inputimage(url));
                  }}
                />
                <label className="input-label">Image</label>
              </div>
              <div className="action">
                <button className="action-button">Add Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <main>
        <div className="addpost">
          <form onSubmit={(e) => Addpost(e)}>
            <input
              onChange={(e) => {
                dispatch(inputTitle(e.target.value));
              }}
              type="text"
              name="title"
              id="inputtitle"
              placeholder="Add a title"
            />
            <input
              onChange={(e) => {
                dispatch(inputDescription(e.target.value));
              }}
              type="text"
              name="description"
              id="inputdesc"
              placeholder="Add a description"
            />
            <button type="submit">Add Post</button>
          </form>
        </div>
      </main> */}
    </>
  );
}

//   function removePost(index) {
//     setPosts(posts.filter((post, i) => i !== index));
//   }
//   function changetitle(event, index) {
//     setPosts(
//       posts.map((post, i) => {
//         if (i == index) return { ...post, title: event.target.value };
//         else {
//           return post;
//         }
//       })
//     );
//   }
//   function changedesc(event, index) {
//     setPosts(
//       posts.map((post, i) => {
//         if (i == index) return { ...post, description: event.target.value };
//         else {
//           return post;
//         }
//       })
//     );
//   }
//   function existPosts() {
//     return (
//       <>
//         <div className="posts_container">
//           {posts.map((post, index) => {
//             return (
//               <div key={index} className="post_box">
//                 <h1>{post.title}</h1>
//                 <div>{post.description}</div>
//                 <input
//                   value={post.title}
//                   type="text"
//                   onChange={(event) => changetitle(event, index)}
//                 />
//                 <input
//                   value={post.description}
//                   type="text"
//                   onChange={(event) => changedesc(event, index)}
//                 />
//                 <button
//                   onClick={() => {
//                     removePost(index);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </>
//     );
//   }
//   function emptyPosts() {
//     return (
//       <>
//         <div className="wh">No Posts Found Here!!</div>
//       </>
//     );
//   }
// const [newposts, setNewposts] = useState({ title: "", description: "" });
// const addpost = (e) => {
//   e.preventDefault();
//   props.setPosts([...props.posts, newposts]);
//   document.getElementById("inputtitle").value = "";
//   document.getElementById("inputdesc").value = "";
// };
