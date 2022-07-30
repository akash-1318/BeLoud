import "./profile.css";
import {
  Aside,
  FollowSuggestion,
  Post,
  UserProfile,
} from "../../components/compIndex";

function Profile() {
  return (
    <div className="main__conatiner">
      <section className="left__section">
        <Aside />
      </section>
      <section className="middle__section">
        <UserProfile />
      </section>
      <section className="right__section">
        <FollowSuggestion />
      </section>
    </div>
  );
}

export { Profile };
