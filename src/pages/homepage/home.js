import "./home.css";
import {
  Aside,
  FollowSuggestion,
  NewPost,
  Post,
} from "../../components/compIndex";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostsData, userDislikedPost } from "../../features/postSlice";
import { useEffect, useState } from "react";
import Loader from "react-js-loader";

function Home() {
  const { authToken, user } = useSelector((store) => store.reduxStore);
  const { allPosts } = useSelector((store) => store.post);
  const { loader } = useSelector((store) => store.additional);
  const dispatch = useDispatch();
  const [feedPost, setFeedPost] = useState([]);
  const [postype, setPostType] = useState("latest");

  useEffect(() => {
    dispatch(getAllPostsData());
  }, [authToken]);

  useEffect(() => {
    setFeedPost(
      allPosts?.filter(
        (post) =>
          post.username === user.username ||
          user?.following?.find((ind) => ind.username === post.username)
      )
    );
  }, [allPosts]);

  let reversePostsData = [...feedPost]?.reverse();

  return (
    <div className="main__conatiner">
      <section className="left__section">
        <Aside />
      </section>
      <section className="middle__section">
        <NewPost />
        <div className="filter__container">
          <div
            className={`trending ${
              postype === "trending" ? "set__trending" : ""
            }`}
          >
            <p onClick={() => setPostType("trending")}>
              {" "}
              <i class="bx bxs-hot"></i> Trending posts
            </p>
          </div>
          <div
            className={`latest ${postype === "latest" ? "set__latest" : ""}`}
          >
            <p onClick={() => setPostType("latest")}>
              {" "}
              <i class="bx bx-filter-alt"></i> Latest posts
            </p>
          </div>
        </div>
        {reversePostsData.length > 0 ? (
          <>
            {postype === "latest"
              ? [...reversePostsData]
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map((post) => {
                    return <Post key={post._id} post={post} />;
                  })
              : [
                  ...reversePostsData.filter(
                    (post) =>
                      post?.likes?.likeCount > 0 || post?.comments?.length > 0
                  ),
                ]
                  .sort((a, b) => {
                    return (
                      b?.likes?.likeCount +
                      b?.comments?.length -
                      (a?.likes?.likeCount + a?.comments?.length)
                    );
                  })
                  .map((post) => {
                    return <Post key={post._id} post={post} />;
                  })}
          </>
        ) : (
          <Loader type="spinner-default" bgColor={"#8292fd"} size={80} />
        )}
        <div className="space"></div>
      </section>
      <section className="right__section">
        <FollowSuggestion />
      </section>
    </div>
  );
}

export { Home };
