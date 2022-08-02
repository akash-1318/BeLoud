import "./post.css";
import {useSelector, useDispatch} from "react-redux"
import { useState } from "react";

function Post({post}) {
  const {user} = useSelector((store) => store.reduxStore)
  const {allUserData} = useSelector((store) => store.user)
  const {allPosts} = useSelector((store) => store.post)
  const {content, createdAt, username,pic } = post
  const [openMenu, setOpenMenu] = useState(false)

  const date = new Date(createdAt)
  const [month, day, year, hour, minutes] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
  ];
  
  let userInfo = allUserData.find((userData) => userData.username === post.username)

  console.log(pic)

  return (
    <div className="post__container">
      <div className="inner__post-container">
        <div className="new__post-left">
          <img src={userInfo?.profilePic}/>
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
          <i class='bx bx-dots-vertical-rounded'></i>
          </div>
        ) : null}
        {openMenu ? (<>
        <div className="post__menu-container">
          <ul className="menu__list">
            <li> <i class='bx bxs-trash-alt'></i> Edit</li>
            <li> <i class='bx bxs-edit'></i> Delete</li>
          </ul>
        </div>
        </>) : null}
      </div>
      <div className="post__content">
        <p className="post__content-text">
        {content}
        </p>
        <img src={pic} className="post__pic"/>
      </div>
      <div className="post__footer">
          <div className="post__footer-icon">
          <i class='bx bx-heart'></i>
          <p> Like </p>
          </div>
          <div className="post__footer-icon">
          <i class='bx bx-bookmarks' ></i>
          <p>Bookmark </p>
          </div>
      </div>
    </div>
  );
}

export { Post };
