import "./bookmark.css";
import {
  Aside,
  FollowSuggestion,
  NewPost,
  Post,
} from "../../components/compIndex";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllPostsData,
  getBookmarkedPostsData,
} from "../../features/postSlice";
import { useEffect } from "react";
import Loader from "react-js-loader";
import noPost from "../../assets/images/zero-post.jpg";

function Bookmark() {
  const { authToken } = useSelector((store) => store.reduxStore);
  const { allPosts, bookmarkedPosts } = useSelector((store) => store.post);
  const { loader } = useSelector((store) => store.additional);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarkedPostsData());
  }, [bookmarkedPosts, allPosts]);

  let newPostData = allPosts.filter((post) =>
    bookmarkedPosts?.some((bookPost) => post._id === bookPost._id)
  );

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="main__conatiner">
      <section className="left__section">
        <Aside />
      </section>
      <section className="middle__section">
        {newPostData.length > 0 ? (
          <>
            {newPostData.map((post) => {
              return <Post key={post._id} post={post} />;
            })}
          </>
        ) : (
          <div className="zero__post-container">
            <img src={noPost} className="no__bookmarked-img" />
            <h1 className="no__post-text">No bookmarked posts!</h1>
          </div>
        )}
      </section>
      <section className="right__section">
        <FollowSuggestion />
      </section>
    </div>
  );
}

export { Bookmark };
