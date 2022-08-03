import "./edit-post-modal.css";
import CollectionsIcon from "@mui/icons-material/Collections";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Picker from "emoji-picker-react";
import { addUserPost, editUserPost } from "../../features/postSlice";
import { useEffect } from "react";
import {handleModalState} from "../../features/additionalSlice"

function EditPostModal() {
  const { user, authToken } = useSelector((store) => store.reduxStore);
  const {postIdToUpdate} = useSelector((store) => store.additional)
  const {allPosts} = useSelector((store) => store.post)
  const [showEmojis, setSHowEmojis] = useState(false);
  const [uploadPost, setUplaodPost] = useState({
    content: "",
    pic: null,
  });

  let postToUpdate = allPosts.filter((post) => post._id === postIdToUpdate)

  const [postFile, setPostFile] = useState(postToUpdate[0]?.pic);
  const [chosenEmoji, setChosenEmoji] = useState(postToUpdate[0]?.content);

  const dispatch = useDispatch();

  const onFileChange = async (e) => {
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
    setPostFile(getPostImg);
  };

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji((preEmoji) => preEmoji + emojiObject.emoji);
    setSHowEmojis(false);
  };

  useEffect(() => {
    setUplaodPost({ ...uploadPost, pic: postFile });
  }, [postFile]);

  useEffect(() => {
    setUplaodPost({ ...uploadPost, content: chosenEmoji });
  }, [chosenEmoji]);

  return (
    <div className="modal__primary-container">
      <div className="new__post-container edit__post-modal">
        <div className="new__post-left">
          <img src={user.profilePic} />
        </div>
        <div className="new__post-right">
          <textarea
            id="post__text"
            className="post__text"
            placeholder="What's happening?"
            value={chosenEmoji}
            onChange={(e) => {
              setChosenEmoji(e.target.value);
            }}
          ></textarea>
          {postFile ? (
            <>
              <div className="file__container">
                <img src={postFile} />
                <div className="cancel__btn" onClick={() => setPostFile(null)}>
                  <i class="bx bx-x"></i>
                </div>
              </div>
            </>
          ) : null}
          {showEmojis && (
            <div className="emoji__container update-post">
              <Picker onEmojiClick={onEmojiClick} />
            </div>
          )}
          <div className="post__options">
            <div className="image-upload">
              <label for="update-file-input" className="post__icon-label">
                <CollectionsIcon className="post__icons" />
              </label>

              <input
                id="update-file-input"
                type="file"
                onChange={onFileChange}
                accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
              />
            </div>
            <InsertEmoticonIcon
              className="post__icons"
              onClick={(e) => setSHowEmojis(!showEmojis)}
            />
            <CheckCircleIcon
              className="post__btn"
              onClick={() => {
                  if(uploadPost.content !== "" || uploadPost.pic !== null){
                    dispatch(editUserPost({uploadPost, postIdToUpdate}))
                    dispatch(handleModalState())
                  }
              }}
            />
            <CancelIcon
            className="post__btn edit__modal-btn"
            onClick={() => dispatch(handleModalState())}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { EditPostModal };
