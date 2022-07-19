import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {LandingPage, Home, Login, Signup, Profile} from "./pages/index"
import {Route, Routes} from "react-router-dom"
import {RequireAuth} from "./utils/requireAuth"
import MockMan from "mockman-js";

function App() {
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
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/mock" element={<MockMan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
