import "./home.css";
import {
  Aside,
  FollowSuggestion,
  NewPost,
  Post,
} from "../../components/compIndex";
import {useSelector, useDispatch} from "react-redux"
import {getAllPostsData} from "../../features/postSlice"
import { useEffect } from "react";
import Loader from "react-js-loader"

function Home() {
  const {authToken} = useSelector((store) => store.reduxStore)
  const {allPosts} = useSelector((store) => store.post);
  const {loader} = useSelector((store) => store.additional);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostsData())
  },[authToken])

  console.log(allPosts)

  return (
    <div className="main__conatiner">
      <section className="left__section">
        <Aside />
      </section>
      <section className="middle__section">
        <NewPost />
        <div className="filter__container">
          <div className="trending">
            <p>
              {" "}
              <i class="bx bxs-hot"></i> Trending posts
            </p>
          </div>
          <div className="latest">
            <p>
              {" "}
              <i class="bx bx-filter-alt"></i> Latest posts
            </p>
          </div>
        </div>
        {allPosts.length > 0 ? (
          <>
          {allPosts.map((post) => {
            return(
              <Post
              key={post._id}
              post = {post}
              /> 
            )
          })}
          </>
        ) : (<Loader type="spinner-default" bgColor={"#8292fd"} size={80} />)}
      </section>
      <section className="right__section">
        <FollowSuggestion />
      </section>
    </div>
  );
}

export { Home };
