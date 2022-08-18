import axios from "axios";

export const getUsers = () => axios.get("/api/users");

export const followUser = (followUserId, authToken) =>
  axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: {
        authorization: authToken,
      },
    }
  );

  export const unfollowUser = (followUserId, authToken) =>
  axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    {
      headers: {
        authorization: authToken,
      },
    }
  );  

export const updateUser = (userData,authToken) => 
axios.post(`/api/users/edit`,
{
    userData
},
{
    headers: {
      authorization: authToken,
    },
  }
)  

export const editUser = (userData, authToken) => 
axios.post(`/api/users/edit`,
{
    userData
},
{
    headers: {
      authorization: authToken,
    },
  }
)