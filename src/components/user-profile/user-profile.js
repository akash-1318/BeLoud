import "./user-profile.css"

function UserProfile(){
    return(
        <div className="profile-container">
            <div className="user__profile-pic">
                
            </div>
            <p className="user__profile-name">Akash Sharma</p>
            <p className="user__profile-id">akash1307</p>
            <button className="user__profile-btn">Edit Profile</button>
            {/* <button className="user__profile-btn follow"> Follow</button> */}
            <p className="profile__bio">Aspiring web developer</p>
            <p className="user__link">akash-sharma.netlify.app</p>
            <div className="user__profile-detail">
                <div className="profile__detail-col">
                    <p>0</p>
                    <p>Following</p>
                </div>
                <div className="profile__detail-col">
                    <p>0</p>
                    <p>Posts</p>
                </div>
                <div className="profile__detail-col">
                    <p>0</p>
                    <p>Followers</p>
                </div>
            </div>
        </div>
    )
}

export {UserProfile}