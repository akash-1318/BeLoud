import axios from "axios";

export const getUserPosts = (username) => axios.get(`/api/posts/user/${username}`)