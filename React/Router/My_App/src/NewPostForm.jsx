/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function NewPostForm(props) {
  const navigate = useNavigate(); // Use the useNavigate hook
  const [newposts, setNewposts] = useState({ title: "", description: "" });
  const addpost = (e) => {
    e.preventDefault();
    props.setPosts([...props.posts, newposts]);
    document.getElementById("inputtitle").value = "";
    document.getElementById("inputdesc").value = "";
    navigate("/"); // Navigate to the home page
  };
  return (
    <>
      <main>
        <div className="addpost">
          <form onSubmit={addpost}>
            <input
              onChange={(e) => {
                setNewposts({ ...newposts, title: e.target.value });
              }}
              type="text"
              name="title"
              id="inputtitle"
              placeholder="Add a title"
            />
            <input
              onChange={(e) => {
                setNewposts({
                  ...newposts,
                  description: e.target.value,
                });
              }}
              type="text"
              name="description"
              id="inputdesc"
              placeholder="Add a description"
            />
            <button type="submit">Add Post</button>
          </form>
        </div>
      </main>
      <div className="a">a</div>
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
