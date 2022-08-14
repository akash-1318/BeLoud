import axios from "axios";

export const getUserPosts = (username) =>
  axios.get(`/api/posts/user/${username}`);

export const getAllPosts = () => axios.get("/api/posts");

export const getSingleUserPosts = (username) =>
  axios.get(`/api/posts/user/${username}`);

export const addPost = (postData, authToken) =>
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

export const deletePost = (postId, authToken) =>
  axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: authToken,
    },
  });

export const editPost = ({ uploadPost, postIdToUpdate }, authToken) =>
  axios.post(
    `/api/posts/edit/${postIdToUpdate}`,
    {
      postData: uploadPost,
    },
    {
      headers: {
        authorization: authToken,
      },
    }
  );

export const likePost = (postId, authToken) =>
  axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: authToken,
      },
    }
  );

export const dislikePost = (postId, authToken) =>
  axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: authToken,
      },
    }
  );

export const addBookmark = (postId, authToken) =>
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: authToken,
      },
    }
  );

export const getBookmarkedPosts = (authToken) => {
  axios.get("/api/users/bookmark", {
    headers: {
      authorization: authToken,
    },
  });
};

export const removeBookmarkedPost = (postId, authToken) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: authToken,
      },
    }
  );

export const addComment = (commentData, postId, authToken) =>
  axios.post(
    `/api/comments/add/${postId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: authToken,
      },
    }
  );
