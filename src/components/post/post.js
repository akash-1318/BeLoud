import "./post.css";

function Post() {

  return (
    <div className="post__container">
      <div className="inner__post-container">
        <div className="new__post-left">
          <img src=""/>
        </div>
        <div className="new__post-right">
          <p className="post__name">
            Akash <span className="id"> akash1307 </span>{" "}
          </p>
          <p className="post__date">2022/6/17 04:50</p>
        </div>
      </div>
      <div className="post__content">
        <p className="post__content-text">
        lorem ipsum
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
