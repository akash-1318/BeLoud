import {
  Aside,
  FollowSuggestion,
  Post,
} from "../../components/compIndex";
import {useSelector, useDispatch} from "react-redux"
import {getAllPostsData} from "../../features/postSlice"
import { useEffect } from "react";
import Loader from "react-js-loader"

function Explore() {
  const {authToken} = useSelector((store) => store.reduxStore)
  const {allPosts} = useSelector((store) => store.post);
  const {loader} = useSelector((store) => store.additional);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostsData())
  },[authToken])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let reversePostsData = [...allPosts]?.reverse()

  return (
    <div className="main__conatiner">
      <section className="left__section">
        <Aside />
      </section>
      <section className="middle__section">
        {reversePostsData.length > 0 ? (
          <>
          {reversePostsData?.map((post) => {
            return(
              <Post
              key={post._id}
              post = {post}
              /> 
            )
          })}
          </>
        ) : (<Loader type="spinner-default" bgColor={"#8292fd"} size={80} />)}
        <div className="space"></div>
      </section>
      <section className="right__section">
        <FollowSuggestion />
      </section>
    </div>
  );
}

export { Explore };