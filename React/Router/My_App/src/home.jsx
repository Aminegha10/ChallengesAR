/* eslint-disable react/prop-types */
function emptyPosts() {
  return (
    <>
      <div className="wh">No Posts Found Here!!</div>
    </>
  );
}
function existPost(props) {
  return (
    <>
      <div className="posts_container">
        {props.posts.map((post, index) => {
          return (
            <div key={index} className="post_box">
              <h1>{post.title}</h1>
              <h4>{post.description}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}


