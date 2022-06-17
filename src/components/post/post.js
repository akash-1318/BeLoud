import "./post.css";

function Post() {
  return (
    <div className="post__container">
      <div className="inner__post-container">
        <div className="new__post-left">
          <img src="" />
        </div>
        <div className="new__post-right">
          <p className="post__name">
            Akash <span className="id"> @akash_1307 </span>{" "}
          </p>
          <p className="post__date">2022/6/17 04:50</p>
        </div>
      </div>
      <div className="post__content">
        <p className="post__content-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
