import "./post.css";
import {useSelector, useDispatch} from "react-redux"

function Post({post}) {
  const {user} = useSelector((store) => store.reduxStore)
  const {allUserData} = useSelector((store) => store.user)
  const {allPosts} = useSelector((store) => store.post)
  const {content, createdAt, username } = post

  const date = new Date(createdAt)
  const [month, day, year, hour, minutes] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
  ];
  
  let userInfo = allUserData.find((userData) => userData.username === post.username)

  console.log(userInfo)

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
      </div>
      <div className="post__content">
        <p className="post__content-text">
        {content}
        </p>
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
