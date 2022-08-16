import "./follow-suggestion.css";
import { useSelector, useDispatch } from "react-redux";
import { getUsersData } from "../../features/userSlice";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

function FollowSuggestion() {
  const navigate = useNavigate()
  const { allUserData, userStatus } = useSelector((store) => store.user);
  const { authToken, user } = useSelector((store) => store.reduxStore);
  const dispatch = useDispatch();
  const [followSuggestion, setFollowSuggestion] = useState([]);

  useEffect(() => {
    setFollowSuggestion(
      allUserData
        .filter((followUser) => followUser.username !== user.username)
        .slice(0, 3)
    );
  }, [user, allUserData]);

  const handleProfileClick = (user) => {
    navigate(`/profile/${user.username}`)
    console.log(user)
  }

  console.log(allUserData)

  return (
    <>
      <div className="follow__conatiner">
        <div className="search__div">
          <i class="bx bx-search-alt-2"></i>
          <input type="text" placeholder="search"></input>
        </div>
        <header>
          <p>Who to Follow</p>
        </header>
        <div className="follow__conatiner-main">
          {followSuggestion.map((user) => {
            return (
              <div className="profile__container">
                <div className="profile__img" onClick={() => handleProfileClick(user)}>
                  <img src={user.profilePic} />
                </div>
                <div className="profile__name" onClick={() => handleProfileClick(user)}>
                  <p className="name">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="id">{user.username}</p>
                </div>
                <button className="follow__btn">
                  {" "}
                  <i class="bx bx-plus"></i> follow
                </button>
              </div>
            );
          })}
        </div>
        <p className="see__more">See more...</p>
      </div>
    </>
  );
}

export { FollowSuggestion };
