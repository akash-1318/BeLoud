import "./profile.css";
import {
  Aside,
  FollowSuggestion,
  Post,
  UserProfile,
} from "../../components/compIndex";
import {useEffect} from "react"

function Profile() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="main__conatiner">
      <section className="left__section">
        <Aside />
      </section>
      <section className="middle__section">
        <UserProfile />
        <div className="space"></div>
      </section>
      <section className="right__section">
        <FollowSuggestion />
      </section>
    </div>
  );
}

export { Profile };
