import "./profile.css";
import {
  Aside,
  FollowSuggestion,
  Post,
  UserProfile,
  OtherProfiles
} from "../../components/compIndex";

function AnyProfile() {
  return (
    <div className="main__conatiner">
      <section className="left__section">
        <Aside />
      </section>
      <section className="middle__section">
        <OtherProfiles/>
      </section>
      <section className="right__section">
        <FollowSuggestion />
      </section>
    </div>
  );
}

export { AnyProfile };