import "./edit-user.css";
import { handleEditModalState } from "../../features/additionalSlice";
import {editUserData} from "../../features/authSlice"
import {} from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function EditModal() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.reduxStore);
  const [editDetails, setEditDetails] = useState({
    profilePic: user.profilePic,
    bio: user.bio,
    link: user.link,
  });
  const [selectProfile, setSelectProfile] = useState(null)

  const handleFileChange = async (e) => {
    let file = e.target.files[0];

    const getImgUrl = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    };
    const getPostImg = await getImgUrl(file);
    setSelectProfile(getPostImg);
    setEditDetails({...editDetails, profilePic : getPostImg})
  };

  console.log(editDetails)

  return (
    <>
      <div className="modal__primary-container">
        <div className="edit__modal">
          <i
            class="bx bx-x"
            onClick={() => dispatch(handleEditModalState())}
          ></i>
          <div className="edit__avatar flex">
            <p>Avatar</p>
            <div className="avatar">
              <img src={selectProfile ? selectProfile : editDetails.profilePic} />
              <label for="edit-file" className="camera__icon">
              <i class="bx bxs-camera"></i>
              </label>
              <input
              id="edit-file"
              type="file"
              onChange={handleFileChange}
              accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
            />
            </div>
          </div>
          <div className="edit__bio flex">
            <p>Bio</p>
            <textarea
              type="text"
              value={editDetails.bio}
              onChange={(e) =>
                setEditDetails({ ...editDetails, bio: e.target.value })
              }
            />
          </div>
          <div className="edit__link flex">
            <p>Link</p>
            <input
              type="text"
              value={editDetails.link}
              onChange={(e) =>
                setEditDetails({ ...editDetails, link: e.target.value })
              }
            />
          </div>
          <div className="update__btn">
            <button className="user__profile-btn follow user" onClick={() => {
                dispatch(editUserData(editDetails))
                dispatch(handleEditModalState())
            }}>Update</button>
          </div>
        </div>
      </div>
    </>
  );
}

export { EditModal };
