/* eslint-disable no-undef */

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

/* eslint-disable no-unused-vars */
const API_URL = "http://localhost:3000/getposts";

export default function BlogLandingPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchPosts = async () => {
    try {
      const response = await axios.get(API_URL);
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
      console.log(response)
      setPosts(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  //one time : just  in the first after the reload (not the re-rendering)
  useEffect(() => {
    fetchPosts();
  }, []);
  // fetchPosts();

  return (
    <>
      {isLoading ? (
        <div>isLoading.....</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          <ul>
            {posts.map((item,index,array) => {
              return (
                <>
                  <li>{item.title}</li>
                  <li>{item.description}</li>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
