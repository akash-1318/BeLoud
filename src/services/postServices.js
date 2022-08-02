import axios from "axios";

export const getUserPosts = (username) =>
  axios.get(`/api/posts/user/${username}`);

export const getAllPosts = () => axios.get("/api/posts");

export const getSingleUserPosts = (username) =>
  axios.get(`/api/posts/user/${username}`);

export const addPost = (postData,authToken) =>
  axios.post(
    "/api/posts",
    {
        postData,
    },
    {
      headers: {
        authorization: authToken,
      },
    }
  );
