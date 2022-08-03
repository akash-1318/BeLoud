import "./new-post.css";
import CollectionsIcon from "@mui/icons-material/Collections";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Picker from "emoji-picker-react";
import {addUserPost} from "../../features/postSlice"
import { useEffect } from "react";

function NewPost() {
  const { user, authToken } = useSelector((store) => store.reduxStore);
  const [postFile, setPostFile] = useState(null);
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [showEmojis, setSHowEmojis] = useState(false);
  const [uploadPost, setUplaodPost] = useState({
    content : "",
    pic : null
  })
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

  const handlePostUplaod = () => {
    if(uploadPost.content !== "" || uploadPost.pic !== null){
      dispatch(addUserPost(uploadPost))
      setChosenEmoji("")
      setPostFile(null)
    }
  }

  useEffect(() => {
    setUplaodPost({...uploadPost, pic : postFile})
  },[postFile])

  useEffect(() => {
    setUplaodPost({...uploadPost, content : chosenEmoji})
  },[chosenEmoji])

  return (
    <div className="new__post-container">
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
            setChosenEmoji(e.target.value)
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
          <div className="emoji__container">
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        )}
        <div className="post__options">
          <div className="image-upload">
            <label for="file-input" className="post__icon-label">
              <CollectionsIcon className="post__icons" />
            </label>

            <input
              id="file-input"
              type="file"
              onChange={onFileChange}
              accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
            />
          </div>
          <InsertEmoticonIcon
            className="post__icons"
            onClick={(e) => setSHowEmojis(!showEmojis)}
          />
          <AddCircleIcon className="post__btn" onClick={() => handlePostUplaod()} />
        </div>
      </div>
    </div>
  );
}

export { NewPost };
