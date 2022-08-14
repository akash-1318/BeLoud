import "./comments.css";
import { Aside, FollowSuggestion, Post } from "../../components/compIndex";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAllPostsData } from "../../features/postSlice";
import Loader from "react-js-loader";

function Comments() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { allPosts } = useSelector((store) => store.post);

  let singlePost = allPosts?.find((post) => post._id === postId)

  return (
    <div className="main__conatiner">
      <section className="left__section">
        <Aside />
      </section>
      <section className="middle__section">
          {singlePost ? (
              <Post key={singlePost._id} post={singlePost} />
          ) : (
            <Loader type="spinner-default" bgColor={"#8292fd"} size={80} />
          )}
      </section>
      <section className="right__section">
        <FollowSuggestion />
      </section>
    </div>
  );
}

export { Comments };
