import { useSelector, useDispatch } from "react-redux";
import defaultProfile from "../../assets/images/profile.svg";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "react-js-loader";
import {Post} from ".././compIndex"
import {openLoader, closeLoader} from "../../features/additionalSlice"

function OtherProfiles() {
  const dispatch = useDispatch();
  const { username } = useParams();
  const { user } = useSelector((store) => store.reduxStore);
  const { allUserData } = useSelector((store) => store.user);
  const {loader} = useSelector((store) => store.additional)
  const [otherUser, setOtherUser] = useState({});

  useEffect(() => {
      dispatch(openLoader())
      console.log(loader)
      setTimeout(() => {
          dispatch(closeLoader())
      },500)
      console.log(loader)
  },[username])

  useEffect(() => {
    let otherUserinfo = allUserData.find((user) => user.username === username);
    setOtherUser(otherUserinfo);
  }, [username, allUserData]);

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
            <button className="user__profile-btn follow"> Follow</button>
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
                <p>0</p>
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
              <Post />
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