import "./new-post.css"
import CollectionsIcon from '@mui/icons-material/Collections';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddCircleIcon from '@mui/icons-material/AddCircle';
function NewPost () {
    return(
        <div className="new__post-container">
            <div className="new__post-left">
                <img src=""/>
            </div>
            <div className="new__post-right">
                <textarea className="post__text" placeholder="What's happening?"></textarea>
                <div className="post__options">
                    <CollectionsIcon className="post__icons"/>
                    <InsertEmoticonIcon className="post__icons"/>
                    <AddCircleIcon className="post__btn"/>
                </div>
            </div>
        </div>
    )
}

export {NewPost}