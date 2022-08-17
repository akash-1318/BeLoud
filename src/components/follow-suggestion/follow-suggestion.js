import "./follow-suggestion.css";
import { useSelector, useDispatch } from "react-redux";
import { getUsersData, followUserData } from "../../features/userSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FollowSuggestion() {
  const navigate = useNavigate();
  const { allUserData, userStatus } = useSelector((store) => store.user);
  const { authToken, user } = useSelector((store) => store.reduxStore);
  const dispatch = useDispatch();
  const [followSuggestion, setFollowSuggestion] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);

  useEffect(() => {
    setFollowSuggestion(
      allUserData
        .filter(
          (followUser) =>
            followUser.username !== user.username &&
            !user.following.some(
              (data) => data.username === followUser.username
            )
        )
        .slice(0, 4)
    );
  }, [user, allUserData]);

  const handleProfileClick = (user) => {
    navigate(`/profile/${user.username}`);
    console.log(user);
  };

  console.log(allUserData);

  useEffect(() => {
    setSuggestionList(
      allUserData.filter((user) => user.username.includes(searchUser) || user.firstName.includes(searchUser))
    );
  }, [searchUser]);

  console.log(allUserData)

  return (
    <>
      <div className="follow__conatiner">
        <div className="search__div">
          <i class="bx bx-search-alt-2"></i>
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchUser(e.target.value)}
          />
          {searchUser.length > 0 ? (
            <div className="user__suggestions">
              {suggestionList.length > 0 ? (
                <>
                {suggestionList.map((user) => {
                return (
                  <div className="user__profile" onClick={() => handleProfileClick(user)}>
                    <div className="profile__pic">
                      <img src={user.profilePic}/>
                    </div>
                    <p className="name">{user.firstName} {user.lastName}</p>
                  </div>
                );
              })}
                </>
              ) : <h3>No user found</h3>}
            </div>
          ) : null}
        </div>
        <header>
          <p>Who to Follow</p>
        </header>
        <div className="follow__conatiner-main">
          {followSuggestion.length > 0 ? (
            <>
              {followSuggestion.map((user) => {
                return (
                  <div className="profile__container">
                    <div
                      className="profile__img"
                      onClick={() => handleProfileClick(user)}
                    >
                      <img src={user.profilePic} />
                    </div>
                    <div
                      className="profile__name"
                      onClick={() => handleProfileClick(user)}
                    >
                      <p className="name">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="id">{user.username}</p>
                    </div>
                    <button
                      className="follow__btn"
                      onClick={() =>
                        dispatch(
                          followUserData({
                            followUserId: user._id,
                            dispatch: dispatch,
                          })
                        )
                      }
                    >
                      {" "}
                      <i class="bx bx-plus"></i> follow
                    </button>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <h3>No suggestions</h3>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export { FollowSuggestion };
