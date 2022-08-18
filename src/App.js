import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {LandingPage, Home, Login, Signup, Profile, AnyProfile, Bookmark, Comments, Explore} from "./pages/index"
import {Route, Routes} from "react-router-dom"
import {RequireAuth} from "./utils/requireAuth"
import MockMan from "mockman-js";
import {getUsersData} from "./features/userSlice"
import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import {EditPostModal, PostModal, EditModal} from "./components/compIndex"
import {getAllPostsData} from "./features/postSlice"

function App() {
  const {authToken, user} = useSelector((store) => store.reduxStore)
  const {allPosts} = useSelector((store) => store.post)
  const {modalState, postModalState, editModal} = useSelector((store) => store.additional)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersData())
    dispatch(getAllPostsData())
  },[authToken, user])

  return (
    <div className="App">
      <ToastContainer autoClose={1000} style={{fontSize : "1.5rem"}} />
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/home" element={
          <RequireAuth>
            <Home/>
          </RequireAuth>
        }></Route>
        <Route path="/profile" element={
          <RequireAuth>
            <Profile/>
          </RequireAuth>
        }></Route>
        <Route path="/otherprofiles/:username" element={
          <RequireAuth>
            <AnyProfile/>
          </RequireAuth>
        }></Route>
        <Route path="/post/:postId" element={
          <RequireAuth>
            <Comments/>
          </RequireAuth>
        }></Route>
        <Route path="/bookmark" element={
          <RequireAuth>
            <Bookmark/>
          </RequireAuth>
        }></Route>
        <Route path="/explore" element={
          <RequireAuth>
            <Explore/>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/mock" element={<MockMan />}></Route>
      </Routes>
      {modalState ? (<EditPostModal/>) : null}
      {postModalState ? (<PostModal/>) : null}
      {editModal ? (<EditModal/>) : null}
    </div>
  );
}

export default App;
