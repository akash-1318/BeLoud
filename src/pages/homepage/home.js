import "./home.css";
import { Aside, FollowSuggestion, NewPost, Post } from "../../components/compIndex";
function Home() {
  return (
    <div className="main__conatiner">
      <section className="left__section">
        <Aside />
      </section>
      <section className="middle__section">
          <NewPost/>
          <div className="filter__container">
              <div className="trending">
                  <p> <i class='bx bxs-hot' ></i> Trending posts</p>
              </div>
              <div className="latest">
                  <p> <i class='bx bx-filter-alt'></i> Latest posts</p>
              </div>
          </div>
          <Post/>
      </section>
      <section className="right__section">
        <FollowSuggestion />
      </section>
    </div>
  );
}

export { Home };
