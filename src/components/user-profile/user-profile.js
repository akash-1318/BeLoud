import "./user-profile.css";
import { useSelector, useDispatch } from "react-redux";
import defaultProfile from "../../assets/images/profile.svg";
import { Post } from "../../components/post/post";

function UserProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.reduxStore);
  return (
    <div className="profile-container">
      <div className="user__profile-pic">
        <img src={user.profilePic ?? defaultProfile} alt="profile-img" />
      </div>
      <p className="user__profile-name">
        {user.firstName} {user.lastName}
      </p>
      <p className="user__profile-id">{user.username}</p>
      <button className="user__profile-btn">Edit Profile</button>
      {/* <button className="user__profile-btn follow"> Follow</button> */}
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
      <Post />
      </div>
    </div>
  );
}

export { UserProfile };
