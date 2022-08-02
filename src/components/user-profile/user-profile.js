import "./user-profile.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import defaultProfile from "../../assets/images/profile.svg";
import { Post } from "../../components/post/post";
import { getSingleUserPostsData } from "../../features/postSlice";
import noPost from "../../assets/images/zero-post.jpg";
import { openLoader, closeLoader } from "../../features/additionalSlice";
import Loader from "react-js-loader";

function UserProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.reduxStore);
  const { singleUserPosts } = useSelector((store) => store.post);
  const { loader } = useSelector((store) => store.additional);

  useEffect(() => {
    dispatch(openLoader());
    console.log(loader);
    setTimeout(() => {
      dispatch(closeLoader());
    }, 500);
    console.log(loader);
  }, [user.username]);

  useEffect(() => {
    dispatch(getSingleUserPostsData(user.username));
  }, [user.username]);

  let reversePostsData = [...singleUserPosts].reverse()

  return (
    <>
      {loader ? (
        <>
          <Loader type="spinner-default" bgColor={"#8292fd"} size={80} />
        </>
      ) : (
        <>
          <div className="profile-container">
            <div className="user__profile-pic">
              <img src={user.profilePic ?? defaultProfile} alt="profile-img" />
            </div>
            <p className="user__profile-name">
              {user.firstName} {user.lastName}
            </p>
            <p className="user__profile-id">{user.username}</p>
            <button className="user__profile-btn">Edit Profile</button>
            <p className="profile__bio">{user.bio}</p>
            <a href={user.link} target="_blank">
              <p className="user__link">{user.link}</p>
            </a>
            <div className="user__profile-detail">
              <div className="profile__detail-col">
                <p>{user.following.length}</p>
                <p>Following</p>
              </div>
              <div className="profile__detail-col">
                <p>0</p>
                <p>Posts</p>
              </div>
              <div className="profile__detail-col">
                <p>{user.followers.length}</p>
                <p>Followers</p>
              </div>
            </div>
            <div className="post__conatiner">
              <div className="hr__style">
                <hr className="hr" />
                <p>Posts</p>
                <hr className="hr" />
              </div>
              {reversePostsData.length ? (
                <>
                  {reversePostsData.map((post) => {
                    return <Post key={post._id} post={post} />;
                  })}
                </>
              ) : (
                <>
                  <div className="zero__post-container">
                    <img src={noPost} />
                    <h1 className="no__post-text">Be loud! {user.firstName}</h1>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export { UserProfile };
