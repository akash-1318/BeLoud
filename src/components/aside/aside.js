import "./aside.css"
import { useSelector, useDispatch } from "react-redux";
import {logout} from "../../features/authSlice"
import logo from "../../assets/images/logo.png"

function Aside () {
    const dispatch = useDispatch(); 
    return(
        <aside className="aside">
            <div className="aside__header">
                <img src={logo}/>
                <p>BeLoud</p>
            </div>
            <main className="aside__options">
                <div className="aside__option">
                <i class='bx bxs-home mr-5'></i>
                    <p className="">Feed</p>
                </div>
                <div className="aside__option">
                <i class='bx bxs-compass mr-5' ></i>
                    <p>Explore</p>
                </div>
                <div className="aside__option">
                <i class='bx bxs-bookmarks mr-5' ></i>
                    <p>Bookmark</p>
                </div>
                <div className="aside__option">
                <i class='bx bxs-user-circle mr-5' ></i>
                    <p>Profile</p>
                </div>
                <div className="aside__option" onClick={()=>{
                    dispatch(logout())
                }}>
                <i class='bx bx-log-out-circle mr-5'></i>
                    <p>Logout</p>
                </div>
                <div className="new__post">
                    <p>Add new post</p>
                </div>
            </main>
        </aside>
    )
}

export {Aside}