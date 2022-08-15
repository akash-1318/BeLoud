import "./comments.css";
import { Aside, FollowSuggestion, Post } from "../../components/compIndex";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllPostsData } from "../../features/postSlice";
import {openLoader, closeLoader} from "../../features/additionalSlice"
import Loader from "react-js-loader";

function Comments() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { allPosts } = useSelector((store) => store.post);
  const {loader} = useSelector((store) => store.additional)

  let singlePost = allPosts?.find((post) => post._id === postId)

  useEffect(() => {
    dispatch(openLoader())
    setTimeout(() => {
        dispatch(closeLoader())
    },500)
},[postId])

useEffect(() => {
    window.scrollTo(0, 0)
}, [])

  return (
    <div className="main__conatiner">
      <section className="left__section">
        <Aside />
      </section>
      <section className="middle__section">
          {loader ? (<Loader type="spinner-default" bgColor={"#8292fd"} size={80} />) : (
              <>
              {singlePost ? (
                <Post key={singlePost._id} post={singlePost} />
            ) : (
              <Loader type="spinner-default" bgColor={"#8292fd"} size={80} />
            )}
              </>
          )}
      </section>
      <section className="right__section">
        <FollowSuggestion />
      </section>
    </div>
  );
}

export { Comments };
