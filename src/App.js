import "./App.css";
import {LandingPage, Home} from "./pages/index"
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
