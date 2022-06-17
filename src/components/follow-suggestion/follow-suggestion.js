import "./follow-suggestion.css";

function FollowSuggestion() {
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
          <div className="profile__container">
            <div className="profile__img">
              <img src="" />
            </div>
            <div className="profile__name">
              <p className="name">Akash Sharma</p>
              <p className="id">Akash_1307</p>
            </div>
            <button className="follow__btn">
              {" "}
              <i class="bx bx-plus"></i> follow
            </button>
          </div>
          <div className="profile__container">
            <div className="profile__img"></div>
            <div className="profile__name">
              <p className="name">Akash Sharma</p>
              <p className="id">Akash_1307</p>
            </div>
            <button className="follow__btn">
              {" "}
              <i class="bx bx-plus"></i> follow
            </button>
          </div>
          <div className="profile__container">
            <div className="profile__img"></div>
            <div className="profile__name">
              <p className="name">Akash Sharma</p>
              <p className="id">Akash_1307</p>
            </div>
            <button className="follow__btn">
              {" "}
              <i class="bx bx-plus"></i> follow
            </button>
          </div>
        </div>
        <p className="see__more">See more...</p>
      </div>
    </>
  );
}

export { FollowSuggestion };
