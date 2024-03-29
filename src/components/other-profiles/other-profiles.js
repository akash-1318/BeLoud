import { useSelector, useDispatch } from "react-redux";
import defaultProfile from "../../assets/images/profile.svg";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "react-js-loader";
import {Post} from ".././compIndex"
import {openLoader, closeLoader} from "../../features/additionalSlice"
import {getSingleUserPostsData, getAllPostsData} from "../../features/postSlice"
import noPost from "../../assets/images/zero-post.jpg"
import {followUserData, unfollowUserData} from "../../features/userSlice"

function OtherProfiles() {
  const {singleUserPosts, allPosts} = useSelector((store) => store.post)
  const dispatch = useDispatch();
  const { username } = useParams();
  const { user } = useSelector((store) => store.reduxStore);
  const { allUserData } = useSelector((store) => store.user);
  const {loader} = useSelector((store) => store.additional)
  const [otherUser, setOtherUser] = useState({});

  useEffect(() => {
      dispatch(openLoader())
      setTimeout(() => {
          dispatch(closeLoader())
      },500)
  },[username])

  useEffect(() => {
    let otherUserinfo = allUserData.find((user) => user.username === username);
    setOtherUser(otherUserinfo);
    dispatch(getSingleUserPostsData(username))
  }, [username, allUserData, allPosts]);

  let reversePostsData = [...singleUserPosts].reverse()

  return (
    <>
      {otherUser?.username ? (
          <>
          {loader ? (
              <Loader type="spinner-default" bgColor={"#8292fd"} size={80} />
          ) : (
            <div className="profile-container">
            <div className="user__profile-pic">
              <img
                src={otherUser.profilePic ?? defaultProfile}
                alt="profile-img"
              />
            </div>
            <p className="user__profile-name">
              {otherUser.firstName} {otherUser.lastName}
            </p>
            <p className="user__profile-id">{otherUser.username}</p>
            {user.following.some((check) => check.username === otherUser.username) ? (
              <button className="user__profile-btn follow" onClick={() => dispatch(unfollowUserData({followUserId:otherUser._id, dispatch : dispatch}))}> Unfollow</button>
            ) : (
              <button className="user__profile-btn follow" onClick={() => dispatch(followUserData({followUserId:otherUser._id, dispatch : dispatch}))}> Follow</button>
            )}
            <p className="profile__bio">{otherUser.bio}</p>
            <a href={otherUser.link} target="_blank">
              <p className="user__link">{otherUser.link}</p>
            </a>
            <div className="user__profile-detail">
              <div className="profile__detail-col">
                <p>{otherUser.following.length}</p>
                <p>Following</p>
              </div>
              <div className="profile__detail-col">
                <p>{reversePostsData.length}</p>
                <p>Posts</p>
              </div>
              <div className="profile__detail-col">
                <p>{otherUser.followers.length}</p>
                <p>Followers</p>
              </div>
            </div>
            <div className="post__conatiner">
              <div className="hr__style">
                <hr className="hr" />
                <p>Posts</p>
                <hr className="hr" />
              </div>
              {reversePostsData.length > 0 ? (
                <>
                {reversePostsData.map((post) => {
                  return(
                    <Post 
                    key = {post._id}
                    post = {post}
                    />
                  )
                })}
                </>
              ) : (<>
              <div className="zero__post-container">
              <img src={noPost}/>
              <h1 className="no__post-text">Be loud! {otherUser.firstName}</h1>
              </div>
              </>)}
            </div>
          </div>
          )}
          </>
      ) : (
        <>
        {loader ? <Loader type="spinner-default" bgColor={"#8292fd"} size={80} /> : null}
        </>
      )}
    </>
  );
}

export { OtherProfiles };
