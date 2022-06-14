import "./App.css";
import {LandingPage} from "./pages/index"
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
