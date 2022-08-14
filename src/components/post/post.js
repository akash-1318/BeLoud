import "./post.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  deleteUserPost,
  userDislikedPost,
  userLikedPost,
  addPostToBookmark,
  removeBookmarkedPostData,
  addCommentOnPost
} from "../../features/postSlice";
import { handleModalState, setPostId } from "../../features/additionalSlice";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Post({ post }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.reduxStore);
  const { allUserData } = useSelector((store) => store.user);
  const { allPosts, bookmarkedPosts } = useSelector((store) => store.post);
  const { content, createdAt, username, pic, _id, likes } = post;
  const [openMenu, setOpenMenu] = useState(false);
  const [comment, setComment] = useState("")

  const date = new Date(createdAt);
  const [month, day, year, hour, minutes] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
  ];

  let userInfo = allUserData.find(
    (userData) => userData.username === post.username
  );

  let likedUser = likes.likedBy.some(
    (likedUser) => likedUser.username === user.username
  );

  let isBookmarked = bookmarkedPosts?.some((post) => post._id === _id);

  return (
    <div className="post__container">
      <div className="inner__post-container">
        <div className="new__post-left">
          <img src={userInfo?.profilePic} />
        </div>
        <div className="new__post-right">
          <p className="post__name">
            {userInfo?.firstName} <span className="id"> {username} </span>{" "}
          </p>
          <p className="post__date">{`${year}/${
            +month + 1
          }/${day}  ${hour}:${minutes}`}</p>
        </div>
        {user.username === userInfo?.username ? (
          <div className="post__menu" onClick={() => setOpenMenu(!openMenu)}>
            <i class="bx bx-dots-vertical-rounded"></i>
          </div>
        ) : null}
        {openMenu ? (
          <>
            <div className="post__menu-container">
              <ul className="menu__list">
                <li
                  onClick={() => {
                    dispatch(handleModalState());
                    setOpenMenu(!openMenu);
                    dispatch(setPostId(post._id));
                    console.log(post._id);
                  }}
                >
                  {" "}
                  <i class="bx bxs-trash-alt"></i> Edit
                </li>
                <li onClick={() => dispatch(deleteUserPost(_id))}>
                  {" "}
                  <i class="bx bxs-edit"></i> Delete
                </li>
              </ul>
            </div>
          </>
        ) : null}
      </div>
      <div className="post__content">
        <p className="post__content-text">{content}</p>
        <img src={pic} className="post__pic" />
      </div>
      <div className="post__footer">
        <div
          className={`post__footer-icon ${
            likedUser ? "liked__post" : "not__liked"
          }`}
          onClick={() => {
            if (likedUser) {
              dispatch(userDislikedPost(_id));
            } else {
              console.log(post.username);
              dispatch(userLikedPost(_id));
            }
          }}
        >
          {likedUser ? (
            <i class="bx bxs-heart"></i>
          ) : (
            <i class="bx bx-heart"></i>
          )}
          <p> {likes.likeCount} </p>
        </div>
        <div
          className="post__footer-icon"
          onClick={() => navigate(`/post/${_id}`)}
        >
          <i class="bx bx-message-rounded"></i>
        </div>
        <div
          className={`post__footer-icon bookmark ${
            isBookmarked ? "bookmarked" : ""
          }`}
          onClick={() => {
            if (isBookmarked) {
              dispatch(removeBookmarkedPostData(_id));
            } else {
              dispatch(addPostToBookmark(_id));
            }
          }}
        >
          {isBookmarked ? (
            <i class="bx bxs-bookmarks"></i>
          ) : (
            <i class="bx bx-bookmarks"></i>
          )}
        </div>
      </div>
      {location.pathname.includes("/post") === true ? (
        <>
          <div className="comment__container">
            <p className="replying__to">
              Replying to <span>{username}</span>{" "}
            </p>
            <div className="comment__input-div">
              <div className="new__post-left">
                <img src={user?.profilePic} />
              </div>
              <input type="text" placeholder="Reply here..." onChange={(e) => setComment(e.target.value.trim())}/>
              <button className="follow__btn comment" onClick={() => dispatch(addCommentOnPost({commentData : comment, postId : post._id}))}>Post</button>
            </div>
            <div className="user__comments">
              <div className="new__post-left comment">
                <img src=""/>
              </div>
              <div className="user__comment-right">
              <p className="user__comments-name">Akash</p>
              <p className="comment__text">gfcjhgvjhgvjhgvhfgcjgfchfgchgfdhgfcgresgfcjhgvjtftyrdchghtf</p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export { Post };
